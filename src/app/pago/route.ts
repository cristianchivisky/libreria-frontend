import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
    accessToken: `${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
    options: { timeout: 5000, idempotencyKey: 'abc' },
})

export async function POST(request: Request) {
    const {
        products,
        envio,
        id_usuario,
        total,
        id_direccion,
        id_carrito,
        id_session,
    }: {
        products: { quantity: number; unit_price: number; title: string; id: string; currency_id: string }[]
        envio: number
        id_usuario: string
        total: number
        id_direccion: string
        id_carrito: number
        id_session: string
    } = await request.json()
    const preference = new Preference(client)
    // add payer info with id_usuario; validate cookie?; create webhook endpoint to confirm payment
    try {
        const res = await preference.create({
            body: {
                items: products,
                metadata: {
                    user_id: id_usuario,
                    total: total,
                    id_direccion: id_direccion,
                    id_carrito: id_carrito,
                    id_session: id_session,
                },
                shipments: {
                    cost: envio,
                },
                additional_info: id_usuario,
                notification_url: `${process.env.NEXT_PUBLIC_FRONT_URL}webhook`,
                auto_return: 'approved',
                back_urls: {
                    success: `${process.env.NEXT_PUBLIC_FRONT_URL}`,
                },
            },
        })
        return new Response(res.init_point, {
            status: 200,
        })
    } catch (error) {
        return new Response('Error al crear pago ' + JSON.stringify(error), {
            status: 400,
        })
    }
}

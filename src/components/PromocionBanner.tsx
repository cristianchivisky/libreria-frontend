import { getPromocionImagen } from '@/services/graphql'
import { promocion } from '@/types/promocion'

export default async function PromocionBanner() {
    const promociones = await getPromocionImagen()
    if (!promociones || promociones.length === 0) return null
    const currentDate = new Date()
    const filteredPromos = promociones.filter((promo: promocion) => {
        const fechaInicio = new Date(promo.fechaInicio)
        const fechaFin = new Date(promo.fechaFin)
        return currentDate >= fechaInicio && currentDate <= fechaFin
    })
    if (filteredPromos.length === 0) return null
    return (
        <div className="mt-6 mx-4 flex justify-center">
            <img alt="promocion" src={atob(filteredPromos[0].imagen)} className="w-full h-auto sm:mx-24"/>
        </div>
    )
}

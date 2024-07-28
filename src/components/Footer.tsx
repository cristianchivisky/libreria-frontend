export default function Footer() {
    return (
        <div className="mt-auto flex flex-col items-center justify-around gap-2 bg-neutral-300 py-2 text-sm md:flex-row">
            <div className="text-center md:text-left">
                <p>Avenida Ficción 123, Piso 4, CP 9999</p>
                <p>Ciudad Imaginaria, Provincia Inventada</p>
            </div>
            <div className="order-1 flex gap-1 md:order-none">
                <p>© 2024 | </p>
                <p className="font-bold">LibroMundo</p>
            </div>
            <div className="font-bold md:text-lg">
                <div className="flex gap-2">
                    <img className="w-4 md:w-6" alt="mail" src="/MailIcon.svg" />
                    <p>libromundo@gmail.com</p>
                </div>
                <div className="flex gap-2">
                    <img className="w-3 md:w-5" alt="telefono" src="/PhoneIcon.svg" />
                    <p>#########</p>
                </div>
            </div>
        </div>
    )
}

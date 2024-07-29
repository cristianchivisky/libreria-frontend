import { ejemplar } from './ejemplar'

export type promocion = {
    fechaFin: string
    fechaInicio: string
    imagen: string
    idPromocionDescuento: string
    ejemplares: ejemplar[]
    nombrePromocion: string
    porcentaje: number
}

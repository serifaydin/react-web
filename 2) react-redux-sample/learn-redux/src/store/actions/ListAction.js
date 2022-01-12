import { LISTE_EKLE } from '../types'

export const ekle = (sayi) => {
    return {
        type: LISTE_EKLE,
        payload: sayi
    }
}
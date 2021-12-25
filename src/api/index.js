import axios from 'axios'

import { API_URL } from '../constant/env'

const nft = {
    create: (pdf, title, author, description, image, artist, genere, language, qty) => axios.post(`${API_URL}/createNFT`, {
        pdf,
        title,
        author,
        description,
        image,
        artist,
        genere,
        language,
        qty
    }),
}

const api = {
    nft
}

export default api
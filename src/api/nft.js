import axios from 'axios'

import { API_URL } from '../constant/env'

const nft = {
  create: (pdf, title, pageLimit, author, description, image, artist, genere, language, tokenid, marketplaceAddr, marketplaceURL, qty) => axios.post(`${API_URL}/createNFT`, {
    pdf,
    title,
    pageLimit,
    author,
    description,
    image,
    artist,
    genere,
    language,
    tokenid, 
    marketplaceAddr, 
    marketplaceURL, 
    qty
  }),
}

export default nft
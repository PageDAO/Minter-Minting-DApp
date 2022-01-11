import axios from 'axios'

import { API_URL, ALCHEMY_PRC_URL } from '../constant/env'

const nft = {
    create: (pdf, title, author, description, image, artist, genere, language, qty) => axios.post(`${API_URL}/nft/create`, {
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

    getLog: async (filters) => {
        try {
            // address is the MintControl contract address
            // topic0 is the "Minted" event from the contract
            // alchemy will return 10mb of logs
            const logs = await axios.post(ALCHEMY_PRC_URL,
                {
                    "jsonrpc": "2.0",
                    "method": "eth_getLogs",
                    "params": [{
                        "fromBlock": "earliest",
                        "address": "0xEd5467Fd62250788EdaA228ae27a609A39B354B0",
                        "topics": ['0xb9203d657e9c0ec8274c818292ab0f58b04e1970050716891770eb1bab5d655e']
                    }],
                    "id": 1
                }
            );
            const logData = await Promise.all(logs.data.result.map(async (log) => {
                // can possibly do additional query to the Collection Contract to get and fetch TokenURI and Metadata
                const block = await axios.post(ALCHEMY_PRC_URL,
                    {
                        "jsonrpc": "2.0",
                        "method": "eth_getBlockByNumber",
                        "params": [`${log.blockNumber}`, true],
                        "id": 0
                    }
                )
                const time = block.data.result.timestamp
                const blockHash = await axios.post(ALCHEMY_PRC_URL,
                    {
                        "jsonrpc": "2.0",
                        "method": "eth_getTransactionByHash",
                        "params": [`${log.transactionHash}`],
                        "id": 1
                    }
                )
                const from = blockHash.data.result.from
                return {
                    ...log,
                    time: time,
                    minter: from
                }
            }));
            return logData
        }
        catch (error) {
            console.log('error', error);
            return null;
        }
    }
}

const api = {
    nft
}

export default api

import React, { useState, useEffect } from "react"
import axios from "axios"

import styles from './History.module.scss'
import { useAppSelector } from '../../redux/hook'
import api from '../../api'
import { OPENSEA_URL, ETHERSCAN_URL } from "../../constant/env"
import { accountAddress, uniftyContract, comunityContract } from "../../utils/web3/Wallet"
import { useResize } from "../../utils/Helper"
import HistoryRow from "../../components/HistoryRow"
import NoHistory from "../../components/NoHistory"

const History = () => {

    const { isMobile } = useResize()
    const [histories, setHistories] = useState([])
    const hasMembership = useAppSelector(state => state.membership.hasMembership)

    const getActivity = async (collection) => {
        let histories = []
        const openseaUrl = `${OPENSEA_URL}/${collection}`
        const logs = await api.nft.getLog()

        await Promise.all(logs.filter(log => (log.minter === accountAddress.toLowerCase()))
            .map(async log => {
                const res = await uniftyContract.methods.uri(log.topics[1]).call()
                const metaDataUrl = res
                const result = await axios.get(metaDataUrl)
                const metaData = result.data
                let delta = (new Date() - new Date(parseInt(log.time) * 1000)) / 1000
                var days = Math.floor(delta / 86400)
                delta -= days * 86400
                var hours = Math.floor(delta / 3600) % 24
                delta -= hours * 3600
                var minutes = Math.floor(delta / 60) % 60
                delta -= minutes * 60
                var seconds = Math.floor(delta % 60)
                let time = ''
                if (days > 0) {
                    time = days + 'days ' + hours + 'hrs ago'
                } else if (hours > 0) {
                    time = hours + 'hrs ' + minutes + 'mins ago'
                } else if (minutes > 0) {
                    time = minutes + 'mins ' + seconds + 's ago'
                } else {
                    time = seconds + 's ago'
                }
                const history = {
                    "img": metaData.image,
                    "title": metaData.name,
                    "author": metaData.properties.author,
                    "qty": metaData.properties.qty,
                    "time": time,
                    "etherscanUrl": `${ETHERSCAN_URL}/${log.transactionHash}`,
                    'openSeaUrl': `${openseaUrl}/${parseInt(log.topics[1])}`
                }
                histories.push(history)
                setHistories([...histories])
            }))
    }

    useEffect(() => {
        const init = async () => {
            const collection = await comunityContract?.methods.Collection().call({ from: accountAddress })
            getActivity(collection)
        }
        if (comunityContract) {
            init()
        }
    }, [comunityContract]) // eslint-disable-line

    return (
        <div className={styles.div}>
            <div className="h3 h3_sm mt_65 text_center">My Minting {isMobile && <br />} History</div>
            <div className={styles.history}>
                {(histories.length > 0) && histories.map((history, index) => (
                    <HistoryRow obj={history} key={index} />
                ))}
                {(histories.length === 0) && <NoHistory hasMembership={hasMembership} />}
            </div>
        </div>
    )
}

export default History
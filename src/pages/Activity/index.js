import React, { useState, useEffect } from "react";
import axios from "axios";

import api from '../../api'
import { useResize } from '../../utils/Helper'
import styles from './Activity.module.scss';
import ActivityRow from "../../components/ActivityRow"
// import Button from "../../components/Button"
import { OPENSEA_URL, ETHERSCAN_URL } from "../../constant/env"
import { accountAddress, uniftyContract, comunityContract } from "../../utils/web3/Wallet"

const Activity = () => {

    const { isMobile } = useResize()
    const [histories, setHistories] = useState([])

    const getActivity = async (collection) => {
        let histories = []
        const openseaUrl = `${OPENSEA_URL}/${collection}`
        const logs = await api.nft.getLog()

        await Promise.all(logs.map(async log => {
            const res = await uniftyContract.methods.uri(log.topics[1]).call()
            const metaDataUrl = res
            const result = await axios.get(metaDataUrl)
            const metaData = result.data
            let delta = (new Date() - new Date(parseInt(log.time) * 1000)) / 1000
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
            var seconds = Math.floor(delta % 60);
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
                "minter": log.minter.substr(0, 6) + '...' + log.minter.substr(38, 42),
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
    }, [comunityContract])

    return (
        <div className={styles.div}>
            <div className="h3 h3_sm mt_65 text_center">Mint Activity</div>
            <div className={styles.history}>
                {!isMobile && <div className="d_flex align_items_center">
                    <div className="h6 grey60" style={{ width: '50%' }}>Items</div>
                    <div className="h6 grey60" style={{ width: '10%' }}>Qty.</div>
                    <div className="h6 grey60" style={{ width: '15%' }}>Minter</div>
                    <div className="h6 grey60" style={{ width: '25%' }}>Time</div>
                </div>}
                {(histories.length === 0) && <div className="h6 grey60 mt_50 text_center">Loading data...</div>}
                {histories?.map((history, index) => (
                    <ActivityRow obj={history} key={index} />
                ))}
                {/* <Button value="Load more"
                    style={{ width: 320, height: 56, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }} red /> */}
            </div>
        </div>
    )
}

export default Activity
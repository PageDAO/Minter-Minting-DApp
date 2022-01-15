import React from "react";

import styles from './HistoryRow.module.scss';
import { getImg } from '../../utils/Helper'

const HistoryRow = (props) => {

    return (
        <div className={styles.div}>
            <div className="d_flex align_items_center">
                <img src={getImg('polygon.png')} alt="img" />
                <div className="ml_10 caption">
                    {props.obj.time}
                </div>
            </div>
            <div className={styles.container}>
                <div style={{ width: '100%' }}>
                    <div className="d_flex align_items_center">
                        <div className={styles.img}>
                            <a href={props.obj.openSeaUrl} target="_blank" rel="noreferrer">
                                <img src={props.obj.img} alt="img" />
                            </a>
                        </div>
                        <div className="ml_15">
                            <div className="h5">{props.obj.title}</div>
                            <div className="body_1">{props.obj.author}</div>
                        </div>
                    </div>
                    <div className={styles.banner}>
                        <div className="body_1">QTY: {props.obj.qty}</div>
                        <a href={props.obj.etherscanUrl} target="_blank" rel="noreferrer"
                            className="d_flex align_items_center">
                            <div className="subTitle_2 red50">Etherscan</div>
                            <img src={getImg('open_new.png')} className="ml_10" alt="img" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryRow
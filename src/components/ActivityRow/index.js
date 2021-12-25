import React from "react";

import styles from './ActivityRow.module.scss';
import { getImg, useResize } from '../../utils/Helper'

const ActivityRow = (props) => {

    const { isMobile } = useResize()

    return (
        <div className={styles.div}>
            {!isMobile && <div className="d_flex align_items_center" style={{ width: '100%' }}>
                <div className="d_flex align_items_center" style={{ width: '50%' }}>
                    <div className={styles.img}>
                        <a href="https://polygonscan.com/" target="_blank" rel="noreferrer">
                            <img src={getImg(props.obj.img)} alt="img" />
                        </a>
                    </div>
                    <div className="ml_15">
                        <div className="h5">{props.obj.title}</div>
                        <div className="body_1">{props.obj.author}</div>
                    </div>
                </div>
                <div className="body_1" style={{ width: '15%' }}>{props.obj.qty}</div>
                <div className="body_1" style={{ width: '15%' }}>{props.obj.minter}</div>
                <a href="https://polygonscan.com/"
                    target="_blank" rel="noreferrer"
                    className="d_flex align_items_center" style={{ width: '20%' }}>
                    <div className="subTitle_2 red50">{props.obj.time}</div>
                    <img src={getImg('open_new.png')} className="ml_10" alt="img" />
                </a>
            </div>}
            {isMobile && <div style={{ width: '100%' }}>
                <div className="d_flex align_items_center">
                    <div className={styles.img}>
                        <img src={getImg(props.obj.img)} alt="img" />
                    </div>
                    <div className="ml_15">
                        <div className="h5">{props.obj.title}</div>
                        <div className="body_1">{props.obj.author}</div>
                    </div>
                </div>
                <div className="d_flex align_items_center justify_content_between mt_40">
                    <div className="body_1">{props.obj.minter}</div>
                    <a href="https://polygonscan.com/"
                        target="_blank" rel="noreferrer"
                        className="d_flex align_items_center">
                        <div className="subTitle_2 red50">{props.obj.time}</div>
                        <img src={getImg('open_new.png')} className="ml_10" alt="img" />
                    </a>
                </div>
            </div>}
        </div>
    )
}

export default ActivityRow
import React from "react";

import styles from './NoHistory.module.scss';
import { getImg } from '../../utils/Helper'
import Button from '../Button'

const NoHistory = (props) => {

    return (
        <div className={styles.div}>
            {props.hasMembership && <div>
                <img src={getImg('nft.png')} alt="img" />
                <div className="body_2 mt_30 mb_25">You haven’t mint any book yet.</div>
                <Button value="Get Started"
                    style={{ width: 187, height: 56, marginLeft: 'auto', marginRight: 'auto' }} red />
            </div>}
            {!props.hasMembership && <div>
                <img src={getImg('no_history.png')} alt="img" />
                <div className="body_2 mt_30 mb_25">Page DAO membership is required.</div>
                <Button value="Learn more"
                    style={{ width: 189, height: 56, marginLeft: 'auto', marginRight: 'auto' }} red />
            </div>}
        </div>
    )
}

export default NoHistory
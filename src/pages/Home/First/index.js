import React from "react";
import { Link } from "react-router-dom";

import styles from './First.module.scss';
import { getImg } from "../../../utils/Helper";
import Button from "../../../components/Button";

const First = () => {

    return (
        <div className={styles.div}>
            <div className="h5 mt_200">Page DAO presents the</div>
            <div className="h2 h2_sm mt_15">NFTBook Minter</div>
            <a href="#wallet">
                <Button value="Create your NFT"
                    style={{ width: 228, height: 56, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}
                    white />
            </a>
            <img className={styles.pageDao} src={getImg('page_dao.png')} alt="page_dao" />
            <div className="h4">Create your NFT </div>
            <div className={styles.text}>
                <div className="body_1">
                    Our NFT minter is design & build with book/pdf in mind. We figured that other marketplace didn’t built with pdf content in mind, this is why we are proud to present this minter for our DAO members.
                </div>
            </div>
            <Link to="#" className="mt_20 body_1">Get started now.</Link>
        </div>
    )
}

export default First
import React from "react";
import { Link } from "react-router-dom";

import styles from './First.module.scss';
import { getImg } from "../../../utils/Helper";
import Button from "../../../components/Button";

const First = () => {

    return (
        <div className={styles.div}>
            <div className="h5 mt_200">Cryptoversal Books and PageDAO present</div>
            <div className="h2 h2_sm mt_15">Ye Olde Minting Press</div>
            <a href="#wallet">
                <Button value="Create your NFT"
                    style={{ width: 228, height: 56, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}
                    white />
            </a>
            <img className={styles.pageDao} src={getImg('page_dao.png')} alt="page_dao" />
            <div className="h4">Create your NFT </div>
            <div className={styles.text}>
                <div className="body_1">
                    Ye Olde Wordler Village Minting Press is designed to give the Wordler Village community an opportunity to collaborate in the creation of a Web3 Literary Collection listed on OpenSea.io. 
                    <br></br>
                    1/3 of Royalties received by the DAO go to buy $PAGE. 
                    <br></br>
                    *This open source technology is in beta, and does not like large files.
                </div>
            </div>
            <Link to="#" className="mt_20 body_1">Get started now.</Link>
        </div>
    )
}

export default First

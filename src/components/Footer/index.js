import React from "react";

import { getImg } from "../../utils/Helper";

const Footer = () => {

    return (
        <footer>
            <div className="text_center mb_50 mt_100">
                <img src={getImg('logo_footer.png')} alt="logo_footer" />
                <div className="h6 mt_10 mb_25"> NFTBOOK<br />BAZAAR </div>
                <div>
                    <a href="https://twitter.com/page_dao" target="_blank" rel="noreferrer">
                        <img src={getImg('twitter.png')} alt="twiter" />
                    </a>
                    <a href="https://discord.gg/fHPc9nVb3V" className="ml_15" target="_blank" rel="noreferrer">
                        <img src={getImg('discord.png')} alt="discord" />
                    </a>
                </div>
                <div className="caption mt_25">Made with ❤️️ by PageDAO.</div>
            </div>
        </footer>
    )
}

export default Footer
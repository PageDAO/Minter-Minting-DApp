import React from "react";

import styles from './Roadmap.module.scss';
import { getImg } from '../../utils/Helper'

const Roadmap = (props) => {

    const { img, title, contents } = props.obj
    return (
        <div className={styles.div}>
            <div className="d_flex align_items_center">
                <img src={getImg(img)} alt="img" />
                <div className="h5 ml_10">{title}</div>
            </div>
            <div>
                {contents.map((content, index) => (
                    <div className={styles.row} key={index}>
                        <img src={getImg(content.img)} alt="img" />
                        <div className="body_1 ml_20">{content.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Roadmap
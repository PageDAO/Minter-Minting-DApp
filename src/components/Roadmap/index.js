import React from "react"

import styles from './Roadmap.module.scss'

const Roadmap = (props) => {

    const { img, title, contents } = props.obj
    return (
        <div className={styles.div}>
            <div className="d_flex align_items_center">
                <img src={`/assets/${img}`} alt="img" />
                <div className="h5 ml_10">{title}</div>
            </div>
            <div>
                {contents.map((content, index) => (
                    <div className={styles.row} key={index}>
                        <img src={`/assets/${content.img}`} alt="img" />
                        <div className="body_1 ml_20">{content.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Roadmap
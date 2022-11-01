import React from "react"

import styles from './TextBox.module.scss'

const TextBox = (props) => {

    return (
        <div className={styles.div} style={props.style}>
            <h2>PageDAO Metaverse Authors' Party</h2>
            <p>Join PageDAO for a metaverse venue crawl featuring NFTBook Authors from all stages of PageDAO development and beyond! Communities and authors working on bringing literature to the blockchain will be recognized and celebrated throughout the day of 12/17 with speaking engagements at Metaverse and Discord stops throughout the day.</p>
            <h5>0.01 ETH / each</h5>
        </div>
    )
}

export default TextBox
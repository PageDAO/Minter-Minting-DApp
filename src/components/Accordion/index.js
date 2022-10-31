import React, { useState } from 'react'

import styles from './Accordion.module.scss'

const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={styles.accordion}>
            <div className={styles.title} onClick={() => setIsActive(!isActive)}>
                <div>{props.obj.title}</div>
                <p className={styles.chevron}>{isActive ? '-' : '+'}</p>
            </div>
            {isActive && <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.obj.content }} />}
        </div>
    )
}

export default Accordion
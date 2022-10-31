import React, { useState } from "react"

import { useResize } from "../../utils/Helper"
import styles from './SpinCard.module.scss'

const SpinCard = (props) => {

    const { isMobile } = useResize()
    const [count, setCount] = useState(0)

    const onClickPlus = () => {
        setCount(count + 1)
    }

    const onClickMinus = () => {
        if (count === 0) return
        setCount(count - 1)
    }

    return (
        <div className={styles.div}>
            <img src={isMobile ? '/assets/card_left_mob.png' : '/assets/card_left.png'} alt="card_left" />
            <div className={styles.center}>
                {isMobile && <img src='/assets/ticket_sm.png' alt="ticket_sm" />}
                <div className={styles.container}>
                    <div className={styles.dateTime}>
                        {!isMobile && <img src='/assets/ticket_sm.png' alt="ticket_sm" />}
                        <div>
                            <h5>{props.card.date}</h5>
                            <p>{props.card.time}</p>
                        </div>
                    </div>
                    <div className={styles.spin}>
                        <span onClick={onClickMinus}>-</span>
                        <div>{count}</div>
                        <span onClick={onClickPlus}>+</span>
                    </div>
                </div>
            </div>
            <img src={isMobile ? '/assets/card_right_mob.png' : '/assets/card_right.png'} alt="card_right" />
        </div>
    )
}

export default SpinCard
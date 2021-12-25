import React from "react";
import { useSelector } from "react-redux";

import styles from './History.module.scss';
// import { uniftyContract } from "../../utils/web3/Wallet";
import HistoryRow from "../../components/HistoryRow";
import { useResize } from "../../utils/Helper";
import NoHistory from "../../components/NoHistory";

const histories = [
    // {
    //     "img": "item_book.png",
    //     "title": "Book Name",
    //     "author": "Author Name",
    //     "time": "18/12/2021, 03:11 UTC",
    //     "qty": "2"
    // },
    // {
    //     "img": "item_book.png",
    //     "title": "Book Name",
    //     "author": "Author Name",
    //     "time": "18/12/2021, 03:11 UTC",
    //     "qty": "2"
    // }
]

const History = () => {

    const { isMobile } = useResize()
    const { hasMembership } = useSelector(state => state.membership)

    return (
        <div className={styles.div}>
            <div className="h3 h3_sm mt_65 text_center">My Minting {isMobile && <br />} History</div>
            <div className={styles.history}>
                {(histories.length > 0) && histories.map((history, index) => (
                    <HistoryRow obj={history} key={index} />
                ))}
                {(histories.length === 0) && <NoHistory hasMembership={hasMembership} />}
            </div>
        </div>
    )
}

export default History
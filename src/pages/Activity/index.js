import React from "react";

import { useResize } from '../../utils/Helper'
import styles from './Activity.module.scss';
import ActivityRow from "../../components/ActivityRow"
import Button from "../../components/Button"

const histories = [
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    },
    {
        "img": "item_book.png",
        "title": "Book Name",
        "author": "Author Name",
        "qty": "2",
        "minter": "0x2986..8ad3",
        "time": "30 seconds ago"
    }

]

const Activity = () => {

    const { isMobile } = useResize()

    return (
        <div className={styles.div}>
            <div className="h3 h3_sm mt_65 text_center">Mint Activity</div>
            <div className={styles.history}>
                {!isMobile && <div className="d_flex align_items_center">
                    <div className="h6 grey60" style={{ width: '50%' }}>Items</div>
                    <div className="h6 grey60" style={{ width: '15%' }}>Qty.</div>
                    <div className="h6 grey60" style={{ width: '15%' }}>Minter</div>
                    <div className="h6 grey60" style={{ width: '20%' }}>Time</div>
                </div>}
                {histories.map((history, index) => (
                    <ActivityRow obj={history} key={index} />
                ))}
                <Button value="Load more"
                    style={{ width: 320, height: 56, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }} red />
            </div>
        </div>
    )
}

export default Activity
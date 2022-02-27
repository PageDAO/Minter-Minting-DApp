import React from "react";

import styles from './PdfViewer.module.scss';
import PdfModal from '../../components/PdfModal';

const PdfViewer = (props) => {
    const id = props.location.pathname.split('/')[2]
    return (
        <div className={styles.div}>
            <PdfModal url={`https://ipfs.io/ipfs/${id}`} />
        </div>
    )
}

export default PdfViewer
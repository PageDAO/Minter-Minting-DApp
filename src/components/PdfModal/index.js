import React, { useEffect } from 'react'

import styles from './PdfModal.module.scss'

const PdfModal = (props) => {

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "/dflip/js/dflip.min.js"
        script.async = true

        document.body.appendChild(script)
    }, [])

    const height = props.modal ? { height: '552px !important' } : { height: 'calc(100vh - 120px) !important' }

    return (
        <div className={styles.div}>
            <div className="_df_book" webgl="true" backgroundcolor="#C1C1C1" minwidth="auto"
                source={props.url} style={height}>
            </div>
        </div>
    )
}

export default PdfModal
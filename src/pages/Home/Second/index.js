import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import api from '../../../api'

import styles from './Second.module.scss'
import { chainId, accountAddress, comunityContract } from "../../../utils/web3/Wallet"
import { CHAIN_ID, OPENSEA_URL, ETHERSCAN_URL } from "../../../constant/env"
import { getImg, useResize } from "../../../utils/Helper"
import Button from "../../../components/Button"
import CreateNFT from "../../../components/CreatNFT"
import PdfModal from "../../../components/PdfModal"
import Progress from "../../../components/Progress"

const Second = (props) => {

    const { isMobile } = useResize()
    const { hasMembership } = useSelector(state => state.membership)
    const [minting, setMinting] = useState(false)
    const [minted, setMinted] = useState(false)
    const [activeProgressModal, setActiveProgressModal] = useState(false)
    const [activePdfModal, setActivePdfModal] = useState(false)
    const [openseaUrl, setOpenSeaUrl] = useState('')
    const [etherscanUrl, setEtherscanUrl] = useState('')

    const [pdf, setPdf] = useState('')
    const [pdfName, setPdfName] = useState('No file choosen')
    const [pdfUrl, setPdfUrl] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [imageName, setImageName] = useState('No file choosen')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [language, setLanguage] = useState('')
    const [qty, setQty] = useState(0)

    const checkNet = async () => {
        if (!window.web3) {
            alert("Please install MetaMask!")
            return false
        } else if (!accountAddress) {
            alert('Please connect Metamask!')
            return false
        } else if (chainId !== CHAIN_ID) {
            alert('Please make sure you are in Ethereum Main Net')
            return false
        }
        return true
    }

    const onPdfChange = async file => {
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => setPdf(reader.result)
    }

    const onImageChange = async file => {
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => setImage(reader.result)
    }

    const changeAuthor = (e) => {
        const authors = e.split(',')
        setAuthor(authors)
    }

    const create = async () => {
        if (pdfName === 'No file choosen') {
            alert('Please select PDF file')
        } else if (title === '') {
            alert('Please input title')
        } else if (author === '') {
            alert('Please input author')
        } else if (description === '') {
            alert('Please input description')
        } else if (imageName === 'No file choosen') {
            alert('Please input banner image')
        } else if (artist === '') {
            alert('Please input artist')
        } else if (genre === '') {
            alert('Please select genre')
        } else if (language === '') {
            alert('Please select language')
        } else if (qty === 0) {
            alert('Please input quantity')
        } else if (checkNet()) {
            setMinting(true)
            setActiveProgressModal(true)
            const result = await api.nft.create(
                pdf,
                title,
                author.toString().replace(", ", ","),
                description, image,
                artist.toString().replace(", ", ","),
                genre.toString().replace(", ", ","),
                language,
                qty
            )
            const metadataURL = result.data.metadataURL

            comunityContract.methods.mint(qty, qty, `${metadataURL}`).send({
                from: accountAddress
            }).on('confirmation', function (confirmationNumber, receipt) {
                const transactionHash = receipt.transactionHash
                setEtherscanUrl(`${ETHERSCAN_URL}/${transactionHash}`)
                const tokenId = receipt.events.Minted.returnValues[0]
                comunityContract.methods.Collection().call({ from: accountAddress })
                    .then(res => {
                        const collection = res
                        setOpenSeaUrl(`${OPENSEA_URL}/${collection}/${tokenId}`)
                        setMinting(false)
                        setMinted(true)
                    })
            }).on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                console.log('error in mint:', error)
                setMinting(false)
                setActiveProgressModal(false)
                setMinted(false)
            });
        }
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.attributes.charset = "utf-8"

        document.body.appendChild(script);
    }, [])

    return (
        <div id="wallet">
            {!hasMembership && <div className={styles.div} style={!isMobile ? { backgroundImage: `url(${getImg('grid_bg.png')})` } : { backgroundImage: `url(${getImg('grid_bg_mob.png')})` }}>
                {!props.account && <div className={styles.wallet}>
                    <div className="text_center">
                        <div className="body_2 white mb_30">Please connect your wallet to get started.</div>
                        <Button value="Connect"
                            style={{ width: 432, height: 56, color: "var(--red50)", fontSize: 18 }}
                            onClick={props.handleSetAccount}
                            white />
                        <div className="caption white mt_15">PageDAO Membership card required to mint.</div>
                    </div>
                </div>}
                {props.account && <div className={styles.noMember}>
                    <div className="body_1">
                        Hold up! The minter is currently in Beta and only open to PageDAO Members to access at this time. You can pick up an official member card NFT here if any are available.
                        <br /><br />
                        Stay tuned for #announcements in the <a href="https://discord.gg/zpZTm38ZHC" className="red50" target="_blank" rel="noreferrer">PageDAO discord</a> as we continue to roll out more news. 🙂
                    </div>
                    <img src={getImg('no_member.png')} className="mt_15 mb_25" alt="img" />
                    <div className={styles.footer}>
                        <div className="body_2">Network: Polygon</div>
                        <div className={styles.divider}></div>
                        <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/111515117730074772965449733806193829182550002799402836500696112828456993030244"
                            className="d_flex align_items_center" target="_blank" rel="noreferrer">
                            <div className="body_2 red50">Get it on Opensea</div>
                            <img src={getImg('open_new.png')} className="ml_20" alt="img" />
                        </a>
                    </div>
                </div>}
            </div>}
            {hasMembership && <CreateNFT
                minting={minting}
                pdfName={pdfName}
                setActivePdfModal={setActivePdfModal}
                setPdfUrl={setPdfUrl}
                title={title}
                imageName={imageName}
                setPdfName={setPdfName}
                setTitle={setTitle}
                setAuthor={changeAuthor}
                setDescription={setDescription}
                setImageName={setImageName}
                setArtist={setArtist}
                setGenre={setGenre}
                setLanguage={setLanguage}
                setQty={setQty}
                onPdfChange={onPdfChange}
                onImageChange={onImageChange}
                create={create}
            />}
            {activePdfModal && <div className={styles.pdf_modal}>
                <div className={styles.pdf_container}>
                    <div className="d_flex align_items_center justify_content_between mb_20">
                        <div className="h6">PDF preview</div>
                        <img src={getImg('close_modal.png')} alt="img" onClick={() => { setActivePdfModal(false); setMinted(false) }} />
                    </div>
                    <PdfModal url={pdfUrl} />
                </div>
            </div>}

            {activeProgressModal && <div>
                {(minting || minted) && <div className={styles.modal}>
                    <div className={styles.container}>
                        {minting && <div className="text_center">
                            <Progress />
                            <div className="h6 mt_30">Minting in progress...</div>
                        </div>}
                        {minted && <div>
                            <div className={styles.success}>
                                <div className={styles.success_container}>
                                    <div></div>
                                    <img className={styles.main} src={getImg('success.png')} alt="img" />
                                    <img className={styles.close} src={getImg('close_modal.png')} alt="img" onClick={() => { setMinted(false); setActiveProgressModal(false) }} />
                                </div>
                                <div className="h6">Success!</div>
                            </div>
                            <div className="d_flex align_items_center justify_content_between mt_15 mb_30">
                                <a href={openseaUrl} target="_blank" rel="noreferrer"
                                    className="d_flex align_items_center">
                                    <div className="body_2 red50 mr_20">Opensea</div>
                                    <img src={getImg('open_new.png')} alt="img" />
                                </a>
                                <div className={styles.modal_divider}>
                                </div>
                                <a href={etherscanUrl} target="_blank" rel="noreferrer"
                                    className="d_flex align_items_center">
                                    <div className="body_2 red50 mr_20">Etherscan</div>
                                    <img src={getImg('open_new.png')} alt="img" />
                                </a>
                            </div>
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Check out this awesome #NFTBook I just minted!"
                                data-url={`https://${openseaUrl}`} data-via="page_dao" data-hashtags="NFTBook" data-lang="en" data-show-count="false" target="_blank" rel="noreferrer">
                                <Button value="Share on Twitter"
                                    style={{ width: "100%", height: 46 }} white />
                            </a>
                        </div>}
                    </div>
                </div>}
            </div>}
        </div >
    )
}

export default Second
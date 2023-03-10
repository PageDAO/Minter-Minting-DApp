import React, { useState } from "react"
import wait from 'wait'

import styles from './Second.module.scss'
import api from '../../../api'
import { useAppSelector } from '../../../redux/hook'
import { chainId, accountAddress, web3given, uniftyContract2, comunityContract2, marketplaceContract2 } from "../../../utils/web3/Wallet"
import { CHAIN_ID, OPENSEA_URL, ETHERSCAN_URL, MARKETPLACE_URL } from "../../../constant/env"
//import { useResize } from "../../../utils/Helper"
import Button from "../../../components/Button"
import CreateNFT from "../../../components/CreatNFT"
import PdfModal from "../../../components/PdfModal"
import Progress from "../../../components/Progress"
import { MarketplaceContractAddr, UniftyContractAddr } from "../../../constant/contractAddr"

const Second = (props) => {

    //const { isMobile } = useResize()
    const hasMembership = useAppSelector(state => state.membership.hasMembership)
    const [minting, setMinting] = useState(false)
    const [minted, setMinted] = useState(false)
    const [activeProgressModal, setActiveProgressModal] = useState(false)
    const [activePdfModal, setActivePdfModal] = useState(false)
    const [openseaUrl, setOpenSeaUrl] = useState('')
    const [etherscanUrl, setEtherscanUrl] = useState('')

    const [pdf, setPdf] = useState('')
    const [pdfName, setPdfName] = useState('No file chosen')
    const [pdfUrl, setPdfUrl] = useState('')
    const [title, setTitle] = useState('')
    const [pageLimit, setPageLimit] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [imageName, setImageName] = useState('No file chosen')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [language, setLanguage] = useState('')
    const [qty, setQty] = useState(0)
    const [license, setLicense] = useState('All Rights Reserved')
    const [fee, setFee] = useState(0)
    const [mintamount, setMintAmount] = useState(0)
    const [listToMarketChecked, setListToMarket] = React.useState(true)

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
        if (pdfName === 'No file chosen') {
            alert('Please select PDF file')
        } else if (title === '') {
            alert('Please input title')
        } else if (author === '') {
            alert('Please input author')
        } else if (description === '') {
            alert('Please input description')
        } else if (imageName === 'No file chosen') {
            alert('Please input banner image')
        } else if (genre === '') {
            alert('Please select genre')
        } else if (mintamount === 0) {
            setMintAmount(1)
        } else if (language === '') {
            alert('Please select language')
        } else if (qty === 0) {
            alert('Please input quantity')
        } else if (qty > 10000) {
            alert('Max number exceeds 10000')
        }
        else if (checkNet()) {
            setMinting(true)
            setActiveProgressModal(true)
            var tokenid = (await uniftyContract2.methods.currentTokenID().call()*1)+1;

            console.log(tokenid, MarketplaceContractAddr);
            const result = await api.nft.create(
                pdf,
                title,
                pageLimit,
                author.toString().replace(", ", ","),
                description,
                image,
                artist.toString().replace(", ", ","),
                genre.toString().replace(", ", ","),
                language,
                license,
                tokenid,
                UniftyContractAddr, 
                CHAIN_ID,
                MarketplaceContractAddr,
                MARKETPLACE_URL,
                qty
            )
            const metadataURL = result.data.metadataURL

            console.log("metadata url: ", metadataURL);

            const curGasPrice = await web3given.eth.getGasPrice()
            console.log("gasPrice:", curGasPrice)

            const feeinwei = web3given.utils.toWei(web3given.utils.toBN(parseFloat(fee)), 'ether');

            const estimatedGas = await comunityContract2.methods.createToken( qty, qty, feeinwei, true, true, false, qty, true, `${metadataURL}`, mintamount).estimateGas({
                from: accountAddress,
            })
            console.log("estimated gas:", estimatedGas)
            await wait(1000)
            
            comunityContract2.methods.createToken( qty, qty, feeinwei, true, true, false, qty, true, `${metadataURL}`, mintamount).send({
                from: accountAddress,
                gasPrice: curGasPrice,
                gas: estimatedGas * 5
            }).on('confirmation', async function (confirmationNumber, receipt) {
                if (confirmationNumber===1){
                    const transactionHash = await receipt.transactionHash
                    await setEtherscanUrl(`${ETHERSCAN_URL}/${transactionHash}`)
                    //const retValues = await receipt.events.TransferSingle.returnValues;
                    
                    //console.log(retValues);
                    //const tokenId = await receipt.events.Minted.returnValues[0]
                    console.log("waiting for some time");
                    
                    //todo: automatically list on marketplace
                    /*assetContract
                    assetContract (address)
                    tokenId (uint256)
                    startTime (uint256)
                    secondsUntilEndTime (uint256)
                    quantityToList (uint256)
                    currencyToAccept (address)
                    reservePricePerToken (uint256)
                    buyoutPricePerToken (uint256)
                    listingType
                    */                
                    const timestamp = (await web3given.eth.getBlock(transactionHash.blockNumber)).timestamp;

                    if (listToMarketChecked) {
                        console.log('list to market checked');
                        const curGasPrice2 = await web3given.eth.getGasPrice()
                        console.log("gasPrice:", curGasPrice2)

                        const estimatedGasList = await marketplaceContract2.methods.createListing([UniftyContractAddr, tokenid, timestamp, 2630000, mintamount, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", fee, fee, 0 ]).estimateGas({
                            from: accountAddress,
                        })

                        console.log(estimatedGasList);

                        await marketplaceContract2.methods.createListing([UniftyContractAddr, tokenid, timestamp, 2630000, mintamount, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", fee, fee, 0 ]).send({
                            from: accountAddress,
                            gasPrice: curGasPrice2,
                            gas: estimatedGasList * 5
                        }).on('confirmation', async function (confirmationNumber, receipt) {
                            const transactionHash = await receipt.transactionHash
                            console.log('listed - tx:', transactionHash)
                        });
                    }


                    await setOpenSeaUrl(`${OPENSEA_URL}/${UniftyContractAddr}/${tokenid}`);
                    setMinting(false);
                    setMinted(true);
                    /*
                    await wait(1000)
                    await comunityContract2.methods.Collection().call({ from: accountAddress })
                        .then(async (res) => {
                            const collection = res
                            await setOpenSeaUrl(`${OPENSEA_URL}/${collection}/${tokenId}`)
                            await wait(1000)
                            setMinting(false)
                            setMinted(true)
                        })
                    */
                }
            }).on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                console.log('error in mint:', error)
                setMinting(false)
                setActiveProgressModal(false)
                setMinted(false)
            });
        }
    }

    return (
        <div id="wallet">
            {!hasMembership && <div className={styles.div} >
                {!props.account && <div className={styles.wallet}>
                    <div className="text_center">
                        <div className="body_2 white mb_30">Please connect your wallet to get started.</div>
                        <Button value="Connect"
                            style={{ width: 432, height: 56, color: "var(--red50)", fontSize: 18 }}
                            onClick={props.handleSetAccount}
                            white />
                        <div className="caption white mt_15">Membership card required to mint.</div>
                    </div>
                </div>}
                {props.account && <div className={styles.noMember}>
                    <div className="body_1">
                        Excited to mint your first NFTBook? So are we! Go grab a PageDAO Membership NFT that will allow access to it while supplies last. <a href="https://membership.nftbookbazaar.com">https://membership.nftbookbazaar.com</a>
                        <br /><br />
                        Stay tuned for #announcements in the <a href="https://discord.gg/zpZTm38ZHC" className="red50" target="_blank" rel="noreferrer">PageDAO discord</a> as we continue to roll out more news. 🙂
                    </div>
                    <img src='/assets/no_member.png' className="mt_15 mb_25" alt="img" />
                    <div className={styles.footer}>
                        <div className="body_2">Network: Polygon</div>
                        <div className={styles.divider}></div>
                        <a href="https://membership.nftbookbazaar.com"
                            className="d_flex align_items_center" target="_blank" rel="noreferrer">
                            <div className="body_2 red50">Mint yours now!</div>
                            <img src='/assets/open_new.png' className="ml_20" alt="img" />
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
                setPageLimit={setPageLimit}
                setAuthor={changeAuthor}
                setDescription={setDescription}
                setImageName={setImageName}
                setArtist={setArtist}
                setGenre={setGenre}
                setLanguage={setLanguage}
                setLicense={setLicense}
                setQty={setQty}
                setFee={setFee}
                setMintAmount={setMintAmount}
                listToMarketChecked={listToMarketChecked}
                setListToMarket={setListToMarket}
                onPdfChange={onPdfChange}
                onImageChange={onImageChange}
                create={create}
            />}
            {activePdfModal && <div className={styles.pdf_modal}>
                <div className={styles.pdf_container}>
                    <div className="d_flex align_items_center justify_content_between mb_20">
                        <div className="h6">PDF preview</div>
                        <img src='/assets/close_modal.png' alt="img" onClick={() => { setActivePdfModal(false); setMinted(false) }} />
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
                                    <img className={styles.main} src='/assets/success.png' alt="img" />
                                    <img className={styles.close} src='/assets/close_modal.png' alt="img" onClick={() => { setMinted(false); setActiveProgressModal(false) }} />
                                </div>
                                <div className="h6">Success!</div>
                            </div>
                            <div className="d_flex align_items_center justify_content_between mt_15">
                                <a href={openseaUrl} target="_blank" rel="noreferrer"
                                    className="d_flex align_items_center">
                                    <div className="body_2 red50 mr_20">Opensea</div>
                                    <img src='/assets/open_new.png' alt="img" />
                                </a>
                                <div className={styles.modal_divider}>
                                </div>
                                <a href={etherscanUrl} target="_blank" rel="noreferrer"
                                    className="d_flex align_items_center">
                                    <div className="body_2 red50 mr_20">Etherscan</div>
                                    <img src='/assets/open_new.png' alt="img" />
                                </a>
                            </div>
                        </div>}
                    </div>
                </div>}
            </div>}
        </div>
    )
}

export default Second

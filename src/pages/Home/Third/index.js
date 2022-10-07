import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styles from './Third.module.scss'
import './Third.css'
import { getImg, useResize } from '../../../utils/Helper'
import Accordion from "../../../components/Accordion";
import Roadmap from "../../../components/Roadmap";

const roadmapQ1 = {
    title: 'Q1, 2022',
    img: 'calendar.png',
    contents: [
        {
            img: 'map_lunched.png',
            text: 'Launch NFTBook Minter on Polygon (Accessible to PageDAO Members ONLY)'
        },
        {
            img: 'map_plan.png',
            text: 'Fee-less minting'
        },
        {
            img: 'map_plan.png',
            text: 'Volume mining rewards for OpenSea transactions'
        },
        {
            img: 'map_plan.png',
            text: 'PAGE burning mechanic to Mint NFTBooks '
        },
        {
            img: 'map_plan.png',
            text: 'NFTBook Minter public launch'
        }
    ]
}

const roadmapQ2 = {
    title: 'Q2, 2022',
    img: 'calendar.png',
    contents: [
        {
            img: 'map_plan.png',
            text: 'Add NFTBook contract builder for Publishers to create their own collections on Page Network'
        },
        {
            img: 'map_plan.png',
            text: ' NFTBook Bazaar marketplace & PAGE token on Cosmos w/Evmos'
        }
    ]
}

const faqs = [
    { "title": "What does the NFTBook Minter do exactly?", "content": "Our Minter is built specifically for reading books on blockchain. All NFTBooks comes with a standard pdf viewer built-in for anyone to read directly from OpenSea. You also have the freedom to do whatever you want with your NFTBooks; sell them on any NFT marketplace, give them away, burn them or just keep all of them for yourself. Once your books are ON the blockchain, no one will be able to take them down – not even us. NFTBooks are forever. " },
    { "title": "How do I connect to Matic Network for minting?", "content": "Go here for detailed instructions for adding Matic network to your Metamask: <a href='https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844' target='_blank'>https://medium.com/stakingbits/<br/>setting-up-metamask-for-polygon-matic-network-838058f6d844</a>" },
    { "title": "How will people read my book?", "content": "Your NFTBook will have both an interactive reader that shows up on your OpenSea listing AND a link to view the IPFS page with your book." },
    { "title": "Can anyone read my book?", "content": "Yes, all books minted will be open for anyone to read. No purchase required." },
    { "title": "How do I list my NFTBooks for sale after minting?", "content": "After your book is minted, you will receive a link to view it on OpenSea. Go to OpenSea and follow their instructions for listing your NFT for sale: <a href='https://support.opensea.io/hc/en-us/articles/360063498333-How-do-I-sell-an-NFT-' target='_blank'>https://support.opensea.io/hc/en-us/articles/360063498333-How-do-I-sell-an-NFT-</a>" },
    { "title": "What do I do if minted a book by mistake or need to make an edit?", "content": "Contact an @admin on the PageDAO discord if you need help removing an NFTBook after minting. <a href='Https://bit.ly/pagedao-discord' target='_blank'>Https://bit.ly/pagedao-discord</a>" },
    { "title": "Why Matic NFTBooks? Why not Ethereum?", "content": "We chose to use the Polygon Network (Matic) because the gas fees are basically non-existent. We know that not all authors have the means to pay hundreds of $$$ just to mint their book, so we opted for a solution that enables 100% of our writing community to publish their works – and more of them!" },
    { "title": "How can I get $MATIC to pay for gas to mint?", "content": "You will need $MATIC bridged over to Polygon network to pay for gas fees. You can follow the guide here for help through that process: <a href='https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05' target='_blank'>https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05</a>." }
]

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={getImg('author_1.png')} alt="img" onDragStart={handleDragStart} role="presentation" />,
    <img src={getImg('author_2.png')} alt="img" onDragStart={handleDragStart} role="presentation" />,
    <img src={getImg('author_3.png')} alt="img" onDragStart={handleDragStart} role="presentation" />,
    <img src={getImg('author_4.png')} alt="img" onDragStart={handleDragStart} role="presentation" />
];

const Third = () => {

    const { isMobile } = useResize()
    return (
        <div className={styles.div}>
            
            <div className={styles.faq}>
                <div>
                    <div className="h3 mb_50">FAQ</div>
                    {faqs.map((faq, index) => (
                        <Accordion obj={faq} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Third

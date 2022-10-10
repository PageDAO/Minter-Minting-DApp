import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styles from './Third.module.scss'
import './Third.css'
import { getImg, useResize } from '../../../utils/Helper'
import Accordion from "../../../components/Accordion";
import Roadmap from "../../../components/Roadmap";

const roadmapQ1 = {
    title: 'Q4, 2022',
    img: 'calendar.png',
    contents: [
        {
            img: 'map_lunched.png',
            text: 'Launch Ye Olde Minting Press on Polygon (Accessible to Passport Holders and Cryptoversal Members ONLY)'
        },
        {
            img: 'map_plan.png',
            text: 'NFT-Mediated Licenses of story elements'
        }
    ]
}

const roadmapQ2 = {
    title: '2023',
    img: 'calendar.png',
    contents: [
        {
            img: 'map_plan.png',
            text: 'Integration with NFT Bookstore, NFTBook Bazaar marketplace, and PAGE token on Cosmos w/Evmos'
        }
    ]
}

const faqs = [
    { "title": "What does Ye Olde Wordler Village Minting Press do exactly?", "content": "Our Web3 Literary Minter enables Wordler Village community members to publish Web3 stories that can be read in any web browser. You also have the freedom to do whatever you want with your Web3 stories; sell them on any NFT marketplace, give them away, burn them, or just keep all of them for yourself. Immutably stored on IPFS and minted to the Polygon blockchain, Web3 stories are forever. " },
    { "title": "How do I connect to Polygon network and $MATIC tokens for minting?", "content": "Go here for detailed instructions for adding Polygon network and its native $MATIC tokens to your Metamask: <a href='https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844' target='_blank'>https://medium.com/stakingbits/<br/>setting-up-metamask-for-polygon-matic-network-838058f6d844</a>" },
    { "title": "How will people read my stories?", "content": "Your Web3 stories will have both an interactive reader that shows up on your OpenSea listing AND a link to view the IPFS page with your book." },
    { "title": "Can anyone read my book?", "content": "With the current minting press, all stories will be open-access for anyone to read without purchase. An option to mint stories that are gated for owner-access may become available in the future." },
    { "title": "How do I list my Web3 stories for sale after minting?", "content": "After your story is minted, you will receive a link to view it on OpenSea. Go to OpenSea and follow their instructions for listing your NFT for sale: <a href='https://support.opensea.io/hc/en-us/articles/360063498333-How-do-I-sell-an-NFT-' target='_blank'>https://support.opensea.io/hc/en-us/articles/360063498333-How-do-I-sell-an-NFT-</a>" },
    { "title": "What do I do if minted a story by mistake or need to make an edit?", "content": "Contact an @admin on the PageDAO discord if you need help removing an NFTBook after minting. <a href='Https://bit.ly/pagedao-discord' target='_blank'>Https://bit.ly/pagedao-discord</a>" },
    { "title": "Why are we publishing to the Polygon blockchain and using $MATIC? Why not Ethereum, Solana, or some other chain?", "content": "We chose to use the Polygon PoS blockchain for its low gas fees, ensuring the broadest possible access for authors and readers. Also, Polygon PoS is energy efficient and certified carbon-neutral with a plan to become carbon-positive by the end of 2022, making it a perfect choice for protecting our planet. We look forward to being able to provide additional blockchain options as Web3 publishing develops in the future." },
    { "title": "How can I get $MATIC to pay for the gas fees required to mint?", "content": "Until we can implement gas-free minting, you will need $MATIC bridged over to Polygon network to pay for gas fees. You can follow the guide here for help through that process: <a href='https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05' target='_blank'>https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05</a>." },
    { "title": "Who is behind this project?", "content": "Wordler Village is an experimental Web3 project organized by Author Greg R. Fishbone and launched through Cryptoversal Books using an innovative minter developed by PageDAO, the Metaverse Writer's Guild. " }
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

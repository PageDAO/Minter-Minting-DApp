import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Web3 from 'web3'

import styles from './PrivateRoute.module.scss';
import { initWallet, accountAddress, chainId, closeWalletProvider, membershipContract } from "../../utils/web3/Wallet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { changeMembership } from "../../actions/membership";
import { CHAIN_ID, CHAIN_ID_HEX } from "../../constant/env";

const PrivateRoute = ({ component: Component, ...restOfProps }) => {

    const dispatch = useDispatch()
    const address = useSelector(state => state.wallet.address)
    const [account, setAccount] = useState("")
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const changeNet = async () => {
        const web3 = new Web3(Web3.givenProvider);
        try {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: CHAIN_ID_HEX }]
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    const init = async () => {
        await initWallet()
        changeNet()
        setAccount(accountAddress)
    }

    const handleSetAccount = () => {
        init()
        setIsOpenMenu(false)
    }

    const closeAccount = () => {
        closeWalletProvider()
        setAccount("")
        setIsOpenMenu(false)
    }

    useEffect(() => {
        if (chainId === CHAIN_ID) {
            try {
                membershipContract?.methods.balanceOf(accountAddress, 0).call().then(res => {
                    let hasMembership = (res > 0) ? true : false
                    dispatch(changeMembership(hasMembership))
                })
            } catch (error) {
                console.log('error', error)
            }
        }
    }, [accountAddress])

    useEffect(() => {
        if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) init()
        else setAccount("")
    }, [address])

    return (
        <div className={styles.div}>
            <Header
                account={account}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
                handleSetAccount={handleSetAccount}
                closeAccount={closeAccount} />
            <Route
                {...restOfProps}
                render={(props) =>
                    // accountAddress ? <Component {...props} /> : <Redirect to="/" />
                    <Component {...props}
                        handleSetAccount={handleSetAccount}
                        account={account} />
                }
            />
            <Footer />
        </div>

    )
}

export default PrivateRoute;
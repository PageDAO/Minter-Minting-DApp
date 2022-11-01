import React from "react"
import { NavLink } from 'react-router-dom'

import { useAppSelector } from '../../redux/hook'
import { useResize } from "../../utils/Helper"
import styles from './Header.module.scss'
import Button from "../Button"

const headerStyle = {
    position: 'fixed',
    background: 'var(--white)',
    top: 0,
    left: 0,
    width: '100%'
}

const Header = (props) => {

    const { isMobile } = useResize()
    const hasMembership = useAppSelector(state => state.membership.hasMembership)
    let toggleImg = '/assets/toggle.png'

    if (props.isOpenMenu) toggleImg = '/assets/close.png'
    else toggleImg = '/assets/toggle.png'

    const toggleMenu = () => {
        props.setIsOpenMenu(!props.isOpenMenu)
    }

    return (
        <header style={(isMobile && props.isOpenMenu) ? headerStyle : {}}>
            <div className="container">
                <div className={styles.div}>
                    <div>
                        <NavLink to="/">
                            <img className={styles.logo} src='/assets/logo.png' alt="logo" />
                            <div>
                                {!isMobile && <div className="h5 ml_20">NFTBOOK BAZAAR</div>}
                                <div className={styles.divider}></div>
                                <div className="h6">Mint</div>
                            </div>
                        </NavLink>
                    </div>

                </div>
            </div>
            {props.isOpenMenu && <div className={styles.menu}>
                <div>
                    <div className="subTitle_2 mt_30">
                        <NavLink to="/activity" activeClassName={styles.active}
                            onClick={() => props.setIsOpenMenu(false)}>Activity</NavLink>
                    </div>
                    {props.account && <div className="subTitle_2 mt_30">
                        <NavLink to="/history" activeClassName={styles.active}
                            onClick={() => props.setIsOpenMenu(false)}>My History</NavLink>
                    </div>}
                    <div className="subTitle_2 mt_30" onClick={props.closeAccount}>Disconnect</div>
                </div>
            </div>}
        </header >
    )
}

export default Header

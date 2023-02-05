import React from "react"
import Second from "./Second"


const Home = (props) => {

    return (
        <div>
            <Second handleSetAccount={props.handleSetAccount} account={props.account} />
        </div>
    )
}

export default Home
import React from "react"
import First from "./First"
import Second from "./Second"
import Third from "./Third"

const Home = (props) => {

    return (
        <div>
            <First />
            <Second handleSetAccount={props.handleSetAccount} account={props.account} />
            <Third />
        </div>
    )
}

export default Home
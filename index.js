import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main"
import Button from "./Button"
import Content from "./Content"
import Footer from "./Footer"

export default function App() {
    return(
        <div className="container">
        <Main />
        <Button />
        <Content />
        <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
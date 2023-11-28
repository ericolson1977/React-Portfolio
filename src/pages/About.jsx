import "../styles/About.css"
import myPic from "../images/Me.jpg"

export default function About () {
    return (
        <>
            <h1>This is the About Page</h1>
            {/* <img src="./logo/react.svg"/> */}
            <img id="me" src={myPic}/>
            <p>asdsada sadsa dsaads </p>
        </>
    )
}
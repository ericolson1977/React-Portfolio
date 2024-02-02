import "../styles/About.css"
import myPic from "../images/Me.jpg"

export default function About() {
    return (
        <>
            <h1>About Me</h1>
            {/* <img src="./logo/react.svg"/> */}
            <img src={myPic} alt="Eric Olson headshot" className="float-start me-3 rounded shadow" width="15%" />
                <p>Welcome to my portfolio! With over two decades of experience as a mortgage home lending advisor, I've navigated the intricate paths of financial landscapes, helping individuals achieve their dream of homeownership. However, my journey doesn't stop there.</p>
                <p>Driven by an insatiable curiosity and a passion for problem-solving, I'm currently embarking on a new chapter as a full stack software engineer. This transition signifies not just a career shift but a leap into a world where creativity meets technology, where every line of code builds the foundation for innovative solutions.</p>
                <p>Beyond my professional endeavors, I find fulfillment in the beautiful chaos of family life. I'm happily married and a proud parent to an energetic two-year-old son. They are the constant motivation behind my pursuit of excellence, both personally and professionally.</p>
                <p>As I delve into the realm of software engineering, I bring with me the dedication, adaptability, and client-centric approach honed through years of guiding individuals in the complex landscape of home financing. I believe this fusion of experience will drive me to craft intuitive, user-centric software solutions.</p>
                <p>Join me on this exciting journey as I blend my expertise, enthusiasm for learning, and a fresh perspective to create meaningful technological innovations.</p>
                <p>Thank you for visiting. Let's build something incredible together.</p>
        </>
    )
}
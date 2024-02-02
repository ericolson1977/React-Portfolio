import '../styles/Resume.css';
import resumePdf from '../images/Resume_2.pdf'

export default function Resume() {
    return (
        <>
            <h1></h1>
            <div>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                    <button type="button">Click Here to View My Resume</button>
                </a>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>CSS Librairies and CDNs</li>
                </ul>
                <h2>Back-end Proficiencies</h2>
                <ul>
                    <li>API's</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </>
    )
}
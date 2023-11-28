import '../styles/Projects.css'
import image1 from "../images/Code_Quiz.png"

export default function Projects() {

    return (
        // <h1>This is the Projects Page</h1>
        // <div class="card" style="width: 18rem;">
        <div class="card" style={{
            width: "18rem",
            minHeight: "300px",
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div class="card-body" style={{
                background: "rgba(0,0,0,0.2)"
            }}>
                <h5 class="card-title">Card title</h5>
                <a href="#" class="card-link"><i class="fa-brands fa-github"></i></a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    );
}
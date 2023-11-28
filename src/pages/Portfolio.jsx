import '../styles/Projects.css'
import image1 from "../images/Code_Quiz.png"

export default function Projects() {

    return (
        <>
            <h1>This is the Projects Page</h1>

            {/* <div class="card" style={{
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
            </div> */}
<div id="projets-container">
            <div class="card" style={{
                width: "18rem",
            }}>
                <img src='/src/images/National_Park.png' class="card-img-top" alt="National Park" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card" style={{
                width: "18rem",
            }}>
                <img src='/src/images/Weather_Dashboard.png' class="card-img-top" alt="Weather Dashboard" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card" style={{
                width: "18rem",
            }}>
                <img src='/src/images/JATE.png' class="card-img-top" alt="JATE" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card" style={{
                width: "18rem",
            }}>
                <img src='/src/images/Workday_Scheduler.png' class="card-img-top" alt="Workday Scheduler" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card" style={{
                width: "18rem",
            }}>
                <img src='/src/images/Note_Taker.png' class="card-img-top" alt="Note Taker" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card" style={{
                width: "18rem",
            }}>
                <img src='/src/images/Code_Quiz.png' class="card-img-top" alt="Code Quiz" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            </div>
        </>
    );
}
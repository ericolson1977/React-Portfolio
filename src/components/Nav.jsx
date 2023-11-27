import '../styles/Nav.css';

export default function Nav({ setCurrentPage }) {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary custom-background">
            <div class="container-fluid">
                <a class="navbar-brand custom-nametag" href="#">Eric Olson</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#" onClick={() => {
                            setCurrentPage("About")
                        }}>About Me</a>
                        <a class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Portfolio")
                        }} > Portfolio</a>
                        <a class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Contact")
                        }}>Contact Me</a>
                        <a class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Resume")
                        }} > Resume</a>
                    </div>
                </div>
            </div >
        </nav >
    );
}

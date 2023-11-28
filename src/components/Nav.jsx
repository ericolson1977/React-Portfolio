import '../styles/Nav.css';

export default function Nav({ setCurrentPage }) {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary custom-background">
            <div id="nav-background" class="container-fluid">
                <a id="nav-name"class="navbar-brand" href="#">Eric Olson</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="nav-bar" class="navbar-nav">
                        <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("About")
                        }}>About Me</a>
                        <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Portfolio")
                        }} > Portfolio</a>
                        <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Contact")
                        }}>Contact Me</a>
                        <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Resume")
                        }} > Resume</a>
                    </div>
                </div>
            </div >
        </nav >
    );
}

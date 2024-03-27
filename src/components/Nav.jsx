import '../styles/Nav.css';

export default function Nav({ setCurrentPage }) {

    return (
        <nav id="background" class="navbar navbar-expand-lg bg-body-tertiary custom-background">
            <div id="nav-background" class="container-fluid">
                <a id="nav-name"class="navbar-brand">Eric Olson</a>
                <div>
                    <div id="nav-bar" class="navbar-nav">
                        <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("About")
                        }}>About Me</a>
                        <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Portfolio")
                        }} > Portfolio</a>
                        {/* <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Contact")
                        }}>Contact Me</a> */}
                        <a id="nav-link" class="nav-link" href="#" onClick={() => {
                            setCurrentPage("Resume")
                        }} > Resume</a>
                    </div>
                </div>
            </div >
        </nav >
    );
}

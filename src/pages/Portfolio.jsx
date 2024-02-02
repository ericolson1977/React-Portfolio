import { Container, Row } from 'reactstrap';
import Projects from './Projects'
import myProjects from '../data/myProjects';

export default function Portfolio() {
    return (
        <>
            <Container fluid>
                <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
                    <Projects myProjects={myProjects} />
                </Row>
            </Container>
        </>
    );
};

// export default function Projects() {

//     return (
//         <>
//             <h1></h1>
//             <div id="projects-container">
//                 <div class="card" style={{
//                     width: "18rem",
//                 }}>
//                     <img src='/src/images/Carbon_Snapshot.png' class="card-img-top" alt="Carbon Snapshot"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text.</p>
//                     </div>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//                 <div class="card" style={{
//                     width: "18rem",
//                 }}>
//                     <img src='/src/images/National_Park.png' class="card-img-top" alt="National Park" />
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text.</p>
//                     </div>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//                 <div class="card" style={{
//                     width: "18rem",
//                 }}>
//                     <img src='/src/images/Weather_Dashboard.png' class="card-img-top" alt="Weather Dashboard" />
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text.</p>
//                     </div>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//                 <div class="card" style={{
//                     width: "18rem",
//                 }}>
//                     <img src='/src/images/JATE.png' class="card-img-top" alt="JATE" />
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text.</p>
//                     </div>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//                 <div class="card" style={{
//                     width: "18rem",
//                 }}>
//                     <img src='/src/images/Workday_Scheduler.png' class="card-img-top" alt="Workday Scheduler" />
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text.</p>
//                     </div>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//                 <div class="card" style={{
//                     width: "18rem",
//                 }}>
//                     <img src='/src/images/Note_Taker.png' class="card-img-top" alt="Note Taker" />
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text.</p>
//                     </div>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//                 <div class="card" style={{
//                     width: "18rem",
//                 }}>
//                     <img src='/src/images/Code_Quiz.png' class="card-img-top" alt="Code Quiz" />
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text.</p>
//                     </div>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
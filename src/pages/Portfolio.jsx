import { Container, Row } from 'reactstrap';
import Projects from './Projects'
import myProjects from '../data/myProjects';

export default function Portfolio() {
    return (
        <>
            <Container fluid>
                <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-secondary pt-4 pb-4'>
                    <Projects myProjects={myProjects} />
                </Row>
            </Container>
        </>
    );
};
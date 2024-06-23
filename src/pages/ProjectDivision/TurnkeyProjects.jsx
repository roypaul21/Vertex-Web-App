import {Card} from 'react-bootstrap';

export default function TurnkeyProjects(){
    return(
        <section className="vertex-container container-fluid p-5 d-flex justify-content-center">
            <div id='engineer-service'>
                <h1 className="text-center division-heading mb-4">Turnkey Projects</h1>
                <h5 className='text-lighter text-justify-content'>
                    Vertex serves as a strategic partner for the development and  expansion of latest and existing healthcare facilities. With our  experience in Medical Equipment Management, we offer comprehensive and  unified solutions for the technological design of healthcare facilities,  to assist ensure projects achieve their budget and efficiency targets.
                </h5>
                <div className='row mt-5 p-5'>
                    <div className='col-md-4 col-sm-auto mb-3'>
                        <Card id="project-content">
                            <Card.Body className='container-color'>
                                <h5 className='text-center text-white'>
                                    Design Consultation For New Construction
                                </h5>
                            </Card.Body>
                            <Card.Img variant="bottom" src="/images/projects/project-1.png" />
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-auto mb-3'>
                        <Card id="project-content">
                            <Card.Body className='container-color'>
                                <h5 className='text-center text-white'>
                                    Renovations, And Planning Upgrades
                                </h5>
                            </Card.Body>
                            <Card.Img variant="bottom" src="/images/projects/project-2.png" />
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-auto mb-3'>
                        <Card id="project-content">
                            <Card.Body className='container-color'>
                                <h5 className='text-center text-white'>
                                    Medical Equipment Management
                                </h5>
                            </Card.Body>
                            <Card.Img variant="bottom" src="/images/projects/project-3.png" />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
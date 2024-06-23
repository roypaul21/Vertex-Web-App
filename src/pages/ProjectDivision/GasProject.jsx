import {Card} from 'react-bootstrap';

export default function GasProject(){
    return(
        <section className="vertex-container container-fluid p-5 d-flex justify-content-center">
            <div id="engineer-service">
                <h1 className="text-center division-heading mb-4">Medical Gas Projects</h1>
                <h5 className='text-lighter text-justify-content'>
                    Medical gas projects, including design consultation for new  construction, renovations, and planning upgrades. Vertex assists  engineers, facilities and technicians in purchasing equipment, the  installation of new equipment, relocation of existing equipment and  verification's. Vertex is certainly here to help you with your Medical  Gas requirements and needs.
                </h5>
                <div className='row p-5'>
                    <div className="col-md-6 col-sm-auto mb-3 card-img-container">
                        <Card>
                            <Card.Img variant="bottom" src="/images/projects/project-4.png" />
                            <div className="image-overlay"></div>
                        </Card>
                    </div>
                    <div className="col-md-6 col-sm-auto mb-3 card-img-container">
                        <Card>
                            <Card.Img variant="bottom" src="/images/projects/project-5.png" />
                            <div className="image-overlay"></div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
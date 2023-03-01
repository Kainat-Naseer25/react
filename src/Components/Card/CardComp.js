import React, { } from 'react';
import { Card, CardHeader, CardBody, CardText, Button, Row, Col } from 'reactstrap';
import mail from './mail.png';
import phone from './phone.png';
import pic from './pic.png';

function CardsComp() {
    return (
        <div>

            {/* Card 1 */}
            <Card
                className="my-2" style={{ width: '40rem', height: '15rem', textAlign: 'left' }}
            >
                <CardHeader>
                <Row>
                    <Col md={{ size: 9}} sm="12">
                        Ishan Sarker 
                    </Col>
                    <Col>
                    <Button color="success"> Male </Button>
                    </Col>
                </Row>
                </CardHeader>

                <CardBody>
                    <Row>
                        <Col>
                        <CardText><img src={mail} alt="mail.png" width="20px" height="20px" /> ishansarker@gmail.com</CardText>
                        <img src={phone} alt="mail.png" width="20px" height="20px" /> +01719058105
                        <div className='mt-5'>
                        <Button color="dark"> Edit </Button>{' '}
                        <Button color="danger"> Delete </Button>{' '}
                        </div>
                        </Col>
                        <Col md={{ size: 4}} sm="12">
                        <img src={pic} alt="pic.png" width="150px" height="150px" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/* Card 2 */}
            <Card
                className="my-2" style={{ width: '40rem', height: '15rem', textAlign: 'left' }}
            >
                <CardHeader>
                <Row>
                    <Col md={{ size: 9}} sm="12">
                        Ishan Sarker 
                    </Col>
                    <Col>
                    <Button color="success"> Male </Button>
                    </Col>
                </Row>
                </CardHeader>

                <CardBody>
                    <Row>
                        <Col>
                        <CardText><img src={mail} alt="mail.png" width="20px" height="20px" /> ishansarker@gmail.com</CardText>
                        <img src={phone} alt="mail.png" width="20px" height="20px" /> +01719058105
                        <div className='mt-5'>
                        <Button color="dark"> Edit </Button>{' '}
                        <Button color="danger"> Delete </Button>{' '}
                        </div>
                        </Col>
                        <Col md={{ size: 4}} sm="12">
                        <img src={pic} alt="pic.png" width="150px" height="150px" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/* Card 3 */}
            <Card
                className="my-2" style={{ width: '40rem', height: '15rem', textAlign: 'left' }}
            >
                <CardHeader>
                <Row>
                    <Col md={{ size: 9}} sm="12">
                        Ishan Sarker 
                    </Col>
                    <Col>
                    <Button color="success"> Male </Button>
                    </Col>
                </Row>
                </CardHeader>

                <CardBody>
                    <Row>
                        <Col>
                        <CardText><img src={mail} alt="mail.png" width="20px" height="20px" /> ishansarker@gmail.com</CardText>
                        <img src={phone} alt="mail.png" width="20px" height="20px" /> +01719058105
                        <div className='mt-5'>
                        <Button color="dark"> Edit </Button>{' '}
                        <Button color="danger"> Delete </Button>{' '}
                        </div>
                        </Col>
                        <Col md={{ size: 4}} sm="12">
                        <img src={pic} alt="pic.png" width="150px" height="150px" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}
export default CardsComp;
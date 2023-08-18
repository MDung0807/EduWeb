import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ItemTranscript ({item}){
    return (
        <Container>
        <Row className='pt-2'>
          <Col>{item.hisId}</Col>
          <Col xs={5}>{item.firstName + item.lastName}</Col>
          <Col>{item.testName}</Col>
          <Col>{item.score}</Col>
          <Col>{item.timeInTest}</Col>
          <Col>{item.time}</Col>
        </Row>
      </Container>
    )
}
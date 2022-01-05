import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent'

function App() {
  return (
    <>
      <Container>
        <Row >
          <Col>
            <Card style={{height:"700px", backgroundColor:"#c3ff00"}}>
              <Card.Header style={{textAlign:"center", fontSize:"15px"}}>Class Component</Card.Header>
              <Card.Body>
               <ClassComponent/>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{height:"700px", backgroundColor:"#ffcd05"}}>
              <Card.Header style={{textAlign:"center", fontSize:"15px"}}>Function Component</Card.Header>
              <Card.Body>
                <FunctionComponent/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
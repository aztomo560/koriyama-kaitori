import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">郡山買取サービス</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">サービスの特徴</Nav.Link>
                <Nav.Link href="#items">買取品目</Nav.Link>
                <Nav.Link href="#contact">お問い合わせ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container className="my-5">
          <Row className="text-center">
            <Col>
              <h1>郡山市の不用品、高価買取いたします</h1>
              <p className="lead">ご家庭に眠っている不要なもの、まとめてお売りください！</p>
              <Button variant="primary" size="lg" href="#contact">今すぐ無料査定を申し込む</Button>
            </Col>
          </Row>
        </Container>

        <Container id="features" className="my-5">
          <h2 className="text-center mb-4">サービスの特徴</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>地域密着</Card.Title>
                  <Card.Text>
                    郡山市内どこでもお伺いします。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>無料査定</Card.Title>
                  <Card.Text>
                    査定料・出張料は一切かかりません。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>即日現金化</Card.Title>
                  <Card.Text>
                    査定額にご納得いただければ、その場で現金をお支払いします。
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container id="items" className="my-5 bg-light p-5">
          <h2 className="text-center mb-4">買取品目</h2>
          <Row>
            <Col md={3} className="text-center">
                <p>家電</p>
            </Col>
            <Col md={3} className="text-center">
                <p>家具</p>
            </Col>
            <Col md={3} className="text-center">
                <p>ブランド品</p>
            </Col>
            <Col md={3} className="text-center">
                <p>その他</p>
            </Col>
          </Row>
        </Container>

        <Container id="contact" className="my-5">
          <h2 className="text-center mb-4">お問い合わせ</h2>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>お名前</Form.Label>
                  <Form.Control type="text" placeholder="山田 太郎" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>メールアドレス</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>お問い合わせ内容</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  送信
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="bg-dark text-white text-center p-3">
        <Container>
          <p>&copy; 2025 郡山買取サービス</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;

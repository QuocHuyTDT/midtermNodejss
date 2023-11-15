import { Col, Row, Form, Stack, Button, Alert } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>

              <Form.Control type="email" placeholder="Email"></Form.Control>
              <Form.Control
                type="password"
                placeholder="Password"
              ></Form.Control>

              <Button variant="primary" type="submit">
                Login
              </Button>

              <Alert vairant="danger">
                <p>An error occured</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;

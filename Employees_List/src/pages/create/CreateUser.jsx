import { Form, Button, Container, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handelInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setUser({ name: '', email: '', phone: '' });
        navigate('/home');
      } else {
        console.error('Form submission failed!');
        setError('Form submission failed!');
      }
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  const isFormEmpty = !user.name || !user.email || !user.phone;

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="bg-white p-4">
        <h2 className="text-2xl text-center font-semibold mb-4" style={{ color: 'grey', fontWeight: '600', marginTop: '100px' }}>
          Create User
        </h2>

        <div className="heading">
          {error && <p>Error: {error}</p>}
        </div>

        <Form onSubmit={handelSubmit}>
          <Form.Group control="username">
            <Col xs={3}>
              <Form.Label>Name</Form.Label>
            </Col>
            <Form.Control className="w-full  py-2 border rounded-lg" id="name" name="name" value={user.name} onChange={handelInput} />
          </Form.Group>

          <Form.Group control="email">
            <Col xs={2}>
              <Form.Label className="mt-2">Email</Form.Label>
            </Col>

            <Form.Control className="w-full py-2 border rounded-lg" id="email" name="email" value={user.email} onChange={handelInput} />
          </Form.Group>

          <Form.Group control="password">
            <Col xs={2}>
              <Form.Label className="mt-2">Phone</Form.Label>
            </Col>
            <Form.Control className="w-full py-2 border rounded-lg" id="phone" name="phone" value={user.phone} onChange={handelInput} />
          </Form.Group>

          <Button type="submit" className="btn w-100 btn-hover mt-3" disabled={isFormEmpty}>
            Submit
          </Button>
          <Link to="/home" className="btn bg-warning w-100 mt-3">
            ← Go to Dashboard
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default CreateUser;

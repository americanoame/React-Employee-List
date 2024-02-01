import { Form, Button, Container, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
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

  const isFormEmpty = !data.name || !data.email || !data.phone;

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="bg-white p-4">
        <h2 className="text-center font-semibold mb-4" style={{ color: 'grey', fontWeight: '600', marginTop: '100px' }}>
          Update User
        </h2>

        <div className="heading">
          {error && <p>Error: {error}</p>}
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Col xs={3}>
              <Form.Label>Name</Form.Label>
            </Col>
            <Form.Control
              className="w-full py-2 border rounded-lg"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Col xs={2}>
              <Form.Label className="mt-2">Email</Form.Label>
            </Col>
            <Form.Control
              className="w-full  py-2 border rounded-lg"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Col xs={2}>
              <Form.Label className="mt-2">Phone</Form.Label>
            </Col>
            <Form.Control
              className="w-full py-2 border rounded-lg"
              name="phone"
              value={data.phone}
              onChange={handleInputChange}
            />
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

export default Update;

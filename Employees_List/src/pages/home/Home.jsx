import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Loader from '../../components/loader/Loader';

import './home.css';

import img1 from '../../assets/images/alice.jpg';
import img2 from '../../assets/images/bob.jpg';
import img3 from '../../assets/images/chris.jpg';
import img4 from '../../assets/images/emma.jpg';
import img5 from '../../assets/images/john.jpg';
import img6 from '../../assets/images/oliva.jpg';
import img7 from '../../assets/images/jane.jpg';
import img8 from '../../assets/images/ryan.jpg';
import img9 from '../../assets/images/tayler.jpg';
import img10 from '../../assets/images/black.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Reload the page after successful deletion
      location.reload();

      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };


  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <div className="w-75 rounded bg-white border media shadow p-4">
          <div className="table-responsive">
            <table className="table table-stipend">
              <thead>
                <tr>
                  <th className="id">ID</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>
                      <div className="d-flex align-items-center">
                        <img src={images[index]} className="rounded-circle me-2" style={{ width: '30px', height: '30px' }} />
                      </div>
                    </td>

                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                    <Link to={`/user-details/${item.id}`} className="me-2">
                        <i className="fa fa-pencil" aria-hidden="true">
                          <FaPencilAlt />
                          User Details
                        </i>
                      </Link>

                      <Link to={`/update/${item.id}`} className="btn btn-sm btn-warning media-btn me-2">
                        Edit
                      </Link>

                      <Button onClick={() => handleDelete(item.id)} className="btn btn-sm media-btn btn-danger">
                        <i className="fa fa-eye" aria-hidden="true">
                          <FaTrashAlt />
                        </i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

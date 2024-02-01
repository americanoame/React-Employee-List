import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';

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

const UserDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`);

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
  }, [id]);

  return (
    <div className="d-flex flex-column align-items-center bd-light">
      <h2 className="text-2xl text-center font-semibold mb-4" style={{ color: 'grey', fontWeight: '600', marginTop: '100px' }}>
        User Details
      </h2>

      <div className="rounded bg white border shadow  p-4 mt-4">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && (
          <>
            <div className="row justify-content-center">
              <div className="col-auto text-center">
                <img src={images[id - 1]} className="rounded-circle me-2" style={{ width: '30px', height: '30px', marginBottom: '10px' }} />
              </div>
            </div>

            <div className="mb-2">
              <span>Name: {data.name}</span>
            </div>
            <div className="mb-2">
              <span>Email: {data.email}</span>
            </div>
            <div className="mb-2">
              <span>Phone: {data.phone}</span>
            </div>
            <Link to={`/update/${id}`} className="btn btn-primary w-100 mt-3">
              Edit
            </Link>
            <Link to="/home" className="btn bg-warning w-100 mt-3">
              ⏎ Go to Dashboard
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;

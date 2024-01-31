import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-75 rounded bg-white border media shadow p-4">
        <div className="table-responsive">
          <table className="table table-stipend">
            <thead>
              <tr>
                <th className="id">ID</th>

                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <td>1</td>
              <td>name</td>
              <td>email</td>
              <td>phone</td>
              <td>
                <Link className="me-2">
                  <i className="fa fa-pencil" aria-hidden="true">
                    <FaPencilAlt />
                    User Details
                  </i>
                </Link>

                <Link className="btn btn-sm btn-warning media-btn me-2">Edit</Link>

                <Button className="btn btn-sm media-btn btn-danger">
                  <i className="fa fa-eye" aria-hidden="true">
                    <FaTrashAlt />
                  </i>
                </Button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useNavigate } from 'react-router';
import './index.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <Container>
            <div className="d-flex flex-md-row align-items-center p-2 px-md-4 mb-3 bg-red border-bottom shadow-sm  im" style={{ width: '100%', maxWidth: '1200px' }}>
                <div className="logo-container">
                    <img className="logo" src='https://st5.depositphotos.com/20923550/70481/v/450/depositphotos_704816210-stock-illustration-cartoon-pizza-delivery-boy-scooter.jpg' style={{ width: '100px', height: '100px' }} alt="logo" />
                </div>

                <nav className="navbar navbar-danger">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '50px', fontWeight: 'bold' }}>MealsOnWheels</Link>
                    </div>
                </nav>

                {(sessionStorage["personType"] === "customer" && sessionStorage["loginStatus"] === "1") ? (
                    <div className='d-flex align-items-center flex-md-row'>
                        <nav className="my-5 my-md-3 mr-md-3">
                            <Link className="p-2 text-dark" to="/customer/home">Home</Link>
                            <Link className="p-2 text-dark" to="/customer/orders">All Orders</Link>
                            <Link className="p-2 text-dark" to="/customer/cart">Cart</Link>
                        </nav>
                        <a className="btn btn-outline-primary" href="#" onClick={() => logout()}>Log Out</a>
                    </div>
                ) : <div></div>}

                {(sessionStorage["personType"] === "manager" && sessionStorage["loginStatus"] === "1") ? (
                    <div className='d-flex align-items-center'>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link className="p-2 text-dark" to="/manager/home">Home</Link>
                            <Link className="p-2 text-dark" to="/manager/restaurantmenu">Restaurant Menu</Link>
                            <Link className="p-2 text-dark" to="/manager/allorders">All Orders</Link>
                        </nav>
                        <a className="btn btn-outline-primary" href="#" onClick={() => logout()}>Log Out</a>
                    </div>
                ) : <div></div>}

                {(sessionStorage["personType"] === "deliveryPerson" && sessionStorage["loginStatus"] === "1") ? (
                    <div className='d-flex align-items-center'>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link className="p-2 text-dark" to="/dp/home">Home</Link>
                            <Link className="p-2 text-dark" to="/dp/allorders">All Orders</Link>
                        </nav>
                        <a className="btn btn-outline-primary" href="#" onClick={() => logout()}>Log Out</a>
                    </div>
                ) : <div></div>}

                {/* Admin Navigation */}
                {(sessionStorage["personType"] === "admin" && sessionStorage["loginStatus"] === "1") ? (
                    <div className='d-flex align-items-center'>
                        <nav className="my-2 my-md-0 mr-md-4 n" >
                            {/* <Link className="n" to="/admin/home">Admin Home</Link> */}
                            <Link className="p-2 text-dark"  to="/admin/customerList">Customers</Link>
                            <Link className="p-2 text-dark" to="/admin/managers">Managers</Link>
                            <Link className="p-2 text-dark" to="/admin/restaurants">Restaurants</Link>
                            <Link className="p-2 text-dark" to="/admin/DeliveryPerson">DeliveryPerson</Link>
                            {/* <Link className="p-2 text-dark" to="/admin/deliverypartners">Delivery Partners</Link> */}
                        </nav>
                        <a className="btn btn-outline-primary" href="#" onClick={() => logout()}>Log Out</a>
                    </div>
                ) : <div></div>}
            </div>
        </Container>
    );
};

export default Header;

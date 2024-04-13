import { Container, Modal, Form, Button} from "react-bootstrap";
import { TbListDetails } from "react-icons/tb";
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";

import ProgressBar from 'react-bootstrap/ProgressBar';

function Product( {data}){
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedWine, setSelectedWine] = useState(null);
    const [selectedPrice, setPrice] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const [email, setEmail] = useState('');
    const [listing,setShowListing] = useState(false);
    const [listingName,setListingName] = useState("");
    const [listingDescription,setListingDescription]  = useState("");


    const [showPlaced, setShowPlaced] = useState(false);

    useEffect(() => {
        setFilteredData(data.filter(wine => wine.wine.toLowerCase().includes(searchKeyword.toLowerCase())));
    }, [searchKeyword, data]);

    useEffect(() => {
        localStorage.getItem('email');
        setEmail(email);
    },[]);

    const handleOrder = () => {
        fetch('https://mongorestapi-wine.onrender.com/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // user: 'aaa',
                status: "Pending",
                productName: selectedWine,
                quantity: quantity,
                itemPrice: selectedPrice,
                totalPrice: selectedPrice * quantity,
                email: email,
                createdAt: new Date(),
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Order placed:', data);
            setShowModal(false);
        })
        .catch(error => {
            console.error('Error placing order:', error);
        });
    };

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    return (
        <Container fluid className="home-about-section" id="about">
            <div className="cards-container">
                <div style={{minWidth:"-webkit-fill-available",paddingTop:"20px"}}>
                    <h2 style={{color:"white"}}>Best Selling Products</h2>
                    <Form.Group controlId="formBasicSearch" style={{marginLeft:"750px"}}>
                        <Form.Control
                            type="text"
                            placeholder="Search by name..."
                            value={searchKeyword}
                            onChange={handleSearch}
                            style={{ width: "200px" , backgroundColor: "transparent",color:"white"}} // Adjust the width here
                        />
                    </Form.Group>
                </div>
                {filteredData.filter(wine => wine.wine.toLowerCase().includes(searchKeyword.toLowerCase())).map((wine, index) => (
                    <div className="card" key={index}>
                        <div className="cart_middle">
                            <div style={{ fontSize: "40px", marginRight: "140px", marginTop: "-50px", color: "white", fontWeight: "bold", cursor: 'pointer' }} onClick={() => {
                                    setShowModal(true);
                                    setSelectedWine(wine.wine);
                                    setPrice(wine.price);
                                }}>
                                <FaShoppingCart />
                            </div>
                            <div style={{ fontSize: "40px" , marginRight: "-120px", marginTop:"-60px", color:"white",fontWeight:"bolder"}} onClick={() => {
                                        setShowListing(true);
                                        setListingName(wine.wine);
                                        setListingDescription(wine.rating);

                                }}>
                                <TbListDetails/>
                            </div>
                        </div>
                        <div className="img-container">
                            <img src={wine.image} alt={`alt for ${wine.wine}`} />
                        </div>
                        <div className="name-container">
                            <p style={{color:"white"}}>{wine.wine}
                                <br></br>
                                <p style={{color:"red"}}>{wine.winery}</p>
                            </p>
                            <br></br>
                            <p  style={{color:"white",marginTop:"-30px",fontSize:"20px",fontWeight:"bold"}}>${wine.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Order: {selectedWine}</Modal.Title>
                </Modal.Header>
                <Modal.Title>Select Quantity</Modal.Title>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control
                            type="number"
                            value={quantity}
                            productName={selectedWine}
                            price={selectedPrice}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            min={1}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => {handleOrder(); setShowPlaced(true);}}>Confirm Order</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showPlaced} onHide={() => setShowPlaced(false)}>
                <Modal.Header>
                    Your order has been placed.
                </Modal.Header>
            </Modal>

        </Container>
    );
}

function final()
{

}

function BasicExample({ description }) {
    console.log(description);
    return <ProgressBar variant="success" now={parseInt(description, 10)} />;
  }

export default Product;

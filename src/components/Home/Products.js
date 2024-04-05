
import { Container, Modal, Form, Button} from "react-bootstrap";
//import { CiShoppingCart } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import React, { useState } from 'react';

import { FaShoppingCart } from "react-icons/fa";

function Product( {data}){
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedWine, setSelectedWine] = useState(null);
    const generateRandomPrice = () => {
        // Define minimum and maximum price range
        const minPrice = 10; // Minimum price
        const maxPrice = 100; // Maximum price
        const result = (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
        // setPrice(result)
        // Generate a random price within the range
        console.log(result);
        return result;
      };
      const handleOrder = () => {
        const price = generateRandomPrice();
        fetch('http://localhost:8000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // user: 'aaa',
                productName: selectedWine,
                quantity: quantity,
                itemPrice: price,
                totalPrice: price * quantity,
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
    return (
        <Container fluid className="home-about-section" id="about">
        <div className="cards-container">
        <div style={{minWidth:"-webkit-fill-available",paddingTop:"20px"}}><h2 style={{color:"white"}}>Best Selling Products</h2></div>
        {data.map((wine, index) => (
            <div className="card" key={index}>
                <div class="cart_middle">
                <div style={{ fontSize: "40px", marginRight: "140px", marginTop: "-50px", color: "white", fontWeight: "bold", cursor: 'pointer' }}
                                onClick={() => {
                                    setShowModal(true);
                                    setSelectedWine(wine.wine);
                                    }}>
                                <FaShoppingCart />
                            </div>
                    <div style={{ fontSize: "40px" , marginRight: "-120px", marginTop:"-60px", color:"white",fontWeight:"bolder"}}>
                        <TbListDetails/>
                    </div>
                </div>

                <div className="img-container">
                    <img src={wine.image} alt={`alt for ${wine.wine}`} />
                </div>

                <div className="name-container">
                    <p style={{color:"white"}}>{wine.wine}
                    <br></br>
                    <p style={{color:"red"}}>{wine.winery}</p></p>
                    <br></br>
                    <p  style={{color:"white",marginTop:"-30px",fontSize:"20px",fontWeight:"bold"}}>${generateRandomPrice()}</p>
                </div>
            </div>))}
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
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            min={1}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleOrder}>Confirm Order</Button>
                </Modal.Footer>
            </Modal>
        </Container>
)

}


export default Product;

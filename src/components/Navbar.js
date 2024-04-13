import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
//import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  //AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineLogin,
} from "react-icons/ai";


import { CgFileDocument } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import Cart from "./Cart/OffCanvas";
import { Modal } from "react-bootstrap";

import Table from 'react-bootstrap/Table';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const getOrders = () => {
    fetch('https://mongorestapi-wine.onrender.com/api/orders', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      setOrdersData(data);
    })
    .catch(error => {
      console.error('Error getting order:', error);
    });
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>
             <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                onClick={() => updateExpanded(false)}>
                <AiOutlineLogin style={{ marginBottom: "2px" }} /> Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => {updateExpanded(false); setShowOrders(true);}}>
               <div style={{ fontSize: "30px" , marginRight: "-50px", marginTop:"-10px"}}>
                <CiShoppingCart />
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Modal show={showOrders} onHide={() => setShowOrders(false)}  size="lg" aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Title>Placed Orders</Modal.Title>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Total Price</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Placed At</th>
                </tr>
              </thead>
              <tbody>
              {ordersData.slice(0, Math.ceil(ordersData.length / 3)).map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.productName}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}

              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
}

export default NavBar;

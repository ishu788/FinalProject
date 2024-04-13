import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

function OrderHistory() {
    const [historyList, setHistoryData] = useState([]);

    useEffect(() => {
        getHistoryList();
    }, []);

    const getHistoryList = () => {
        fetch('https://mongorestapi-wine.onrender.com/api/history')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setHistoryData(data);
            })
            .catch(error => {
                console.error('Error getting order:', error);
            });
    }

    const tableCellStyle = {
        color: 'white', // Set font color to white
        // Add more custom styles as needed
    };

    return (
        <Container fluid className="about-section">
            <Container>
                <div>
                    <h2>Order History</h2>
                    <Table striped bordered hover className="table">
                        <thead>
                            <tr>
                                <th style={tableCellStyle}>Order ID</th>
                                <th style={tableCellStyle}>Total</th>
                                <th style={tableCellStyle}>Date</th>
                                {/* Add more table headings for additional order details */}
                            </tr>
                        </thead>
                        <tbody>
                            {historyList.map(order => (
                                <tr key={order._id}>
                                    <td style={tableCellStyle}>{order._id}</td>
                                    <td style={tableCellStyle}>${order.totalPrice}</td>
                                    <td style={tableCellStyle}>{order.createdAt}</td>
                                    {/* Add more table cells for additional order details */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Container>
    );
}

export default OrderHistory;

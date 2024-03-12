
import { Container, Row, Col } from "react-bootstrap";
function Product( {data}){
    return (
    
        <Container fluid className="home-about-section" id="about">
        <h2>Best Selling Products</h2>
        <div className="cards-container">
        {data.slice(1, 8).map((wine, index) => (
        <div className="card" key={index}>
        <img src={wine.image} alt={`alt for ${wine.wine}`} />
        {/* <p>{wine.wine}</p> */}
        </div>))}  
        </div>
        </Container>
)
    
}


export default Product;
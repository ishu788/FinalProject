
import { Container} from "react-bootstrap";
//import { CiShoppingCart } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";


import { FaShoppingCart } from "react-icons/fa";

function Product( {data}){
    const generateRandomPrice = () => {
        // Define minimum and maximum price range
        const minPrice = 10; // Minimum price
        const maxPrice = 100; // Maximum price
    
        // Generate a random price within the range
        return (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
      };
    return (
        <Container fluid className="home-about-section" id="about">
        <div className="cards-container">
        <div style={{minWidth:"-webkit-fill-available",paddingTop:"20px"}}><h2 style={{color:"white"}}>Best Selling Products</h2></div>
        {data.slice(1, 10).map((wine, index) => (
            <div className="card" key={index}>
                <div class="cart_middle">
                    <div style={{ fontSize: "40px" , marginRight: "140px", marginTop:"-50px", color:"white",fontWeight:"bold"}}>
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
        </Container>
)
    
}


export default Product;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LottieAnimation from "../Lottie"; // Assuming you have a file named Lottie.js
import homesvg from "../../Assets/lottie1.json";

import homeImage from "../../Assets/homewine.jpg";
import Product from "./Products";
import Cards from "./Cards";

function Home({ data }) {
  return (
    
    <div>
      <Container fluid className="home-section" id="home">
      <section>
      <img src={homeImage} className="img-fluid" alt="avatar" 
              style={{
                maxHeight: "700px",
               width: "100%" // Adjust the value to move it to the right
              }}/>
      </section>
      </Container>
      {/* <Product data = {data} className="mainDiv"/> */}
      <Cards data={data}/>
      </div>
          
  );
}

export default Home;

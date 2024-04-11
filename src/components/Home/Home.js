import React from "react";
import { Container, Carousel } from "react-bootstrap";
import LottieAnimation from "../Lottie"; // Assuming you have a file named Lottie.js
import homesvg from "../../Assets/lottie1.json";

import homeImage from "../../Assets/homewine.jpg";
import homeImage2 from "../../Assets/homewine2.jpg";
import homeImage3 from "../../Assets/Wines/came-2933943_1920.jpg";



import Product from "./Products";
import Cards from "./Cards";


function Home({ data }) {
  return (
    
    <div>
      <Container fluid className="home-section" id="home">
      
      <Carousel fade interval={3000}> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeImage}
            alt="First slide"
            style={{
              maxHeight: "700px",
              width: "100%"
            }}
          />
          <Carousel.Caption>
                <h3 style={{ fontWeight: "bold", color: "white",marginBottom:"300px", marginLeft:"750px", fontSize:"50px" }}>CellarCraft
                <h6 style={{marginTop:"20px"}}>No. 1 Wine seller in North America</h6></h3>

            </Carousel.Caption>
            
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeImage2}
            alt="Second slide"
            style={{
              maxHeight: "700px",
              width: "100%"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeImage3}
            alt="Third slide"
            style={{
              maxHeight: "700px",
              width: "100%"
            }}
          />
        </Carousel.Item>
      </Carousel>
      {/* <section>
      <img src={homeImage} className="img-fluid" alt="avatar" 
              style={{
                maxHeight: "700px",
               width: "100%"
              }}/>
      </section> */}
      </Container>
      <Product data = {data} className="mainDiv"/>
      {/* <Cards data={data}/> */}
      </div>
          
  );
}

export default Home;

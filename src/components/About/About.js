import React from "react";
import { Container } from "react-bootstrap";
import './About.css';
import winepng from './about-wine.png';
function About() {
  return (
    <Container fluid className="about-section">
    <h1 className="about-h1"> A Few Highlight</h1>
      <Container>

        <div className="top">
          <div >
          <h2 >About Wine</h2>
          <p>
            Welcome to our website! We are passionate about wine and excited to
            share our knowledge and love for this timeless beverage with you.
          </p>
            </div>
          <div >
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to educate and inspire others about the
            world of wine. Whether you're a seasoned sommelier or a curious
            novice, we believe there's always something new to discover and
            appreciate about wine.
          </p>
          </div>
          <div >
          <h2>What We Offer</h2>
          <p>
            On our website, you'll find a variety of resources to help you
            deepen your understanding of wine. From educational articles and
            guides to wine recommendations and tasting notes, we strive to
            provide valuable content for wine enthusiasts of all levels.
          </p>
          </div>
          <div>
          <h2>Join Our Community</h2>
          <p>
            We invite you to join our community of wine lovers! Connect with us
            on social media, sign up for our newsletter, or participate in our
            online forums to engage with like-minded individuals and share your
            passion for wine.
          </p>
          </div>
        </div>
      </Container>
      <Container>
      <div className="second-block">
        <div className="ourstory">
        <h2>Our Story</h2>
          <p>
          At the heart of our passion for wine lies a story of discovery and appreciation.
          It began with a shared love for the artistry and complexity found in every bottle.
          </p>
          <p>
          Over the years, our journey has taken us through vineyards and cellars, across continents,
           and into the depths of wine culture.

          </p>
          <p>
          Along the way, we've learned, tasted, and celebrated the rich history and diverse flavors of this timeless beverage.
           Our story is one of exploration, education, and above all,
            a deep-seated admiration for the craftsmanship and tradition that make wine an enduring symbol of elegance and enjoyment.
            Cheers to our shared story and to the many more chapters yet to unfold.
          </p>
        </div>
        <div>
          <img src={winepng} className="about-img" alt="about-wine-pic" />
        </div>
          </div>
      </Container>
    </Container>
  );
}

export default About;

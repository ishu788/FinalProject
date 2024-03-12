import React from "react";
import { Container } from "react-bootstrap";

function Blog() {
  return (
    <Container fluid className="about-section">
      <Container>
        
        <h1 className="project-heading">
          Professional <strong className="purple">This is blog page </strong>
        </h1>
        <h1 className="project-heading">
          <strong className="purple">Blogs</strong> I use
        </h1>

      </Container>
    </Container>
  );
}

export default Blog;
import React from 'react';
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.marketingcharts.com/digital/social-media-114405"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.socialinsider.io%2Fblog%2Finstagram-carousel-research%2F&psig=AOvVaw3cTIw9ox6oE8xqZpNaVpvg&ust=1633877290885000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjZmbLJvfMCFQAAAAAdAAAAABAm"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Carousels;

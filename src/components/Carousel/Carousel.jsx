import Carousel from 'react-bootstrap/Carousel';

import './carousel.css'

import stock1 from '../../assets/images/stock3.JPG'
import stock2 from '../../assets/images/stock2.JPG'
import stock3 from '../../assets/images/stock1.JPG'
import stock4 from '../../assets/images/stock4.JPG'

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img  width={400} height={500}  
          className="d-block h-80 cover"
          //src="holder.js/800x400?text=First slide&bg=373940"
	  src={stock1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img width={400}  height={500}  
          className="d-block h-80 cover"
          //src="holder.js/800x400?text=Second slide&bg=282c34"
          src={stock2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img  width={400} height={500}  
          className="d-block h-80 cover"
          //src="holder.js/800x400?text=Third slide&bg=20232a"
          src={stock3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img  width={400} height={500}  
          className="d-block h-80 cover"
          //src="holder.js/800x400?text=Third slide&bg=20232a"
          src={stock4}
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
  );
}

export default IndividualIntervalsExample;

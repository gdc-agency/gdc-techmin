import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Carousel as CarouselBootstrap, CarouselItem, Col, Row } from 'react-bootstrap';
import Img1 from '@/assets/images/small/small-1.jpg';
import Img2 from '@/assets/images/small/small-2.jpg';
import Img3 from '@/assets/images/small/small-3.jpg';
import Img4 from '@/assets/images/small/small-4.jpg';
import Img5 from '@/assets/images/small/small-5.jpg';
import Img6 from '@/assets/images/small/small-6.jpg';
import Img7 from '@/assets/images/small/small-7.jpg';
import PageTitle from '@/components/PageTitle';
const SlidesOnly = () => {
  return <ComponentContainerCard title="Slides Only" description={<p className="text-muted mb-0">
          Here’s a carousel with slides only. Note the presence of the <code>.d-block</code>
          and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
        </p>}>
      <CarouselBootstrap className="slide" indicators={false} controls={false}>
        <CarouselItem>
          <img src={Img2} height={475} className="d-block w-100" alt="img-2" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img3} height={475} className="d-block w-100" alt="img-3" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img4} height={475} className="d-block w-100" alt="img-4" />
        </CarouselItem>
      </CarouselBootstrap>
    </ComponentContainerCard>;
};
const SlidesWithControls = () => {
  return <ComponentContainerCard title="With Controls" description={<p className="text-muted mb-0">Adding in the previous and next controls:</p>}>
      <CarouselBootstrap indicators={false}>
        <CarouselItem>
          <img src={Img1} height={475} className="d-block w-100" alt="img-2" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img2} height={475} className="d-block w-100" alt="img-3" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img4} height={475} className="d-block w-100" alt="img-4" />
        </CarouselItem>
      </CarouselBootstrap>
    </ComponentContainerCard>;
};
const SlidesWithIndicators = () => {
  return <ComponentContainerCard title="With Indicators" description={<p className="text-muted">You can also add the indicators to the carousel, alongside the controls, too.</p>}>
      <CarouselBootstrap>
        <CarouselItem>
          <img src={Img3} height={475} className="d-block w-100" alt="img-5" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img2} height={475} className="d-block w-100" alt="img-6" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img1} height={475} className="d-block w-100" alt="img-7" />
        </CarouselItem>
      </CarouselBootstrap>
    </ComponentContainerCard>;
};
const SlidesWithCaptions = () => {
  return <ComponentContainerCard title="With Captions" description={<p className="text-muted">
          Add captions to your slides easily with the
          <code>.carousel-caption</code> element within any <code>.carousel-item</code>.
        </p>}>
      <CarouselBootstrap indicators={false}>
        <CarouselItem>
          <img src={Img3} height={475} className="d-block w-100" alt="img-6" />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-white">First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={Img2} height={475} className="d-block w-100" alt="img-7" />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-white">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={Img1} height={475} className="d-block w-100" alt="img-5" />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-white">Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
      </CarouselBootstrap>
    </ComponentContainerCard>;
};
const CrossFade = () => {
  return <ComponentContainerCard title="Crossfade" description={<p className="text-muted mb-0">
          Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.
        </p>}>
      <CarouselBootstrap indicators={false} fade>
        <CarouselItem>
          <img src={Img1} height={475} className="d-block w-100" alt="img-2" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img2} height={475} className="d-block w-100" alt="img-3" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img3} height={475} className="d-block w-100" alt="img-4" />
        </CarouselItem>
      </CarouselBootstrap>
    </ComponentContainerCard>;
};
const IndividualInterval = () => {
  return <ComponentContainerCard title="Individual" description={<p className="text-muted mb-0">
          Add <code>data-bs-interval=&quot;&quot;</code> to a<code>.carousel-item</code> to change the amount of time to delay between automatically
          cycling to the next item.
        </p>}>
      <CarouselBootstrap indicators={false}>
        <CarouselItem interval={10000}>
          <img src={Img4} height={475} className="d-block w-100" alt="img-2" />
        </CarouselItem>
        <CarouselItem interval={2000}>
          <img src={Img2} height={475} className="d-block w-100" alt="img-3" />
        </CarouselItem>
        <CarouselItem>
          <img src={Img1} height={475} className="d-block w-100" alt="img-4" />
        </CarouselItem>
      </CarouselBootstrap>
    </ComponentContainerCard>;
};
const DarkVariant = () => {
  return <ComponentContainerCard title="Dark Variant" description={<p className="text-muted fs-14 mb-0">
          Add <code>.carousel-dark</code> to the
          <code>.carousel</code> for darker controls, indicators, and captions. Controls are inverted compared to their default white fill with the
          <code>filter</code>
          CSS property. Captions and controls have additional Sass variables that customize the <code>color</code> and <code>background-color</code>.
        </p>}>
      <CarouselBootstrap className="carousel-dark">
        <CarouselItem interval={10000}>
          <img height={475} src={Img5} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
        <CarouselItem interval={2000}>
          <img src={Img6} height={475} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={Img7} height={475} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </CarouselItem>
      </CarouselBootstrap>
    </ComponentContainerCard>;
};
const Carousel = () => {
  return <>
      <PageTitle title="Carousel" />
      <Row>
        <Col lg={6}>
          <SlidesOnly />
        </Col>
        <Col lg={6}>
          <SlidesWithControls />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <SlidesWithIndicators />
        </Col>
        <Col lg={6}>
          <SlidesWithCaptions />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <CrossFade />
        </Col>
        <Col lg={6}>
          <IndividualInterval />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <DarkVariant />
        </Col>
      </Row>
    </>;
};
export default Carousel;
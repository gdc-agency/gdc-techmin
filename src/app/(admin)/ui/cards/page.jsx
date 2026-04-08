import { colorVariants } from '@/context/constants';
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import smallImg1 from '@/assets/images/small/small-1.jpg';
import smallImg2 from '@/assets/images/small/small-2.jpg';
import smallImg3 from '@/assets/images/small/small-3.jpg';
import smallImg4 from '@/assets/images/small/small-4.jpg';
import smallImg6 from '@/assets/images/small/small-6.jpg';
import PageTitle from '@/components/PageTitle';
const Card1 = () => {
  return <Card className="d-block">
      <img className="card-img-top w-100" src={smallImg1} height={246} alt="Card image cap" />
      <CardBody>
        <CardTitle as={'h4'}>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content. Some quick example text to build on the
          card title and make up.
        </CardText>
        <Link to="" className="btn btn-primary">
          Button
        </Link>
      </CardBody>
    </Card>;
};
const Card2 = () => {
  return <Card className="d-block">
      <img className="card-img-top w-100" src={smallImg2} height={246} alt="Card image cap" />
      <CardBody>
        <h4 className="card-title">Card title</h4>
        <CardText>Some quick example text to build on the card..</CardText>
      </CardBody>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
      </ul>
      <CardBody>
        <Link to="" className="card-link text-custom">
          Card link
        </Link>
        <Link to="" className="card-link text-custom">
          Another link
        </Link>
      </CardBody>
    </Card>;
};
const Card3 = () => {
  return <Card className="d-block">
      <img className="card-img-top w-100" src={smallImg3} height={246} alt="Card image cap" />
      <CardBody>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content. Some quick example text to build on the
          card title and make up.
        </CardText>
        <Link to="" className="btn btn-primary">
          Button
        </Link>
      </CardBody>
    </Card>;
};
const Card4 = () => {
  return <Card className="d-block">
      <CardBody>
        <CardTitle as={'h4'}>Card title</CardTitle>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </CardBody>
      <img className="img-fluid" src={smallImg4} alt="Card image cap" />
      <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
        <Link to="" className="card-link text-custom">
          Card link
        </Link>
        <Link to="" className="card-link text-custom">
          Another link
        </Link>
      </CardBody>
    </Card>;
};
const SpecialTitleCard = () => {
  return <Card className="card-body">
      <CardTitle as={'h4'}>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Link to="" className="btn btn-primary">
        Go somewhere
      </Link>
    </Card>;
};
const CardWithHeader = () => {
  return <Card>
      <CardHeader as={'h5'} className="bg-light-subtle">
        Featured
      </CardHeader>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to="" className="btn btn-primary">
          Go somewhere
        </Link>
      </CardBody>
    </Card>;
};
const CardWithHeaderAndQuote = () => {
  return <Card>
      <CardHeader className="bg-light-subtle">Quote</CardHeader>
      <CardBody>
        <blockquote className="card-bodyquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>;
};
const CardWithHeaderAndFooter = () => {
  return <Card>
      <CardHeader className="bg-light-subtle">Featured</CardHeader>
      <CardBody>
        <Link to="" className="btn btn-primary">
          Go somewhere
        </Link>
      </CardBody>
      <div className="card-footer border-top border-light text-muted">2 days ago</div>
    </Card>;
};
const ColorCards = () => {
  return <Row>
      <Col lg={4} sm={6}>
        <Card className="text-bg-secondary">
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Link to="" className="btn btn-primary btn-sm">
              Button
            </Link>
          </CardBody>
        </Card>
      </Col>
      {colorVariants.slice(0, 8).map((color, idx) => <Col lg={4} sm={6} key={idx}>
          <Card className={`text-bg-${color}`}>
            <CardBody>
              <blockquote className="card-bodyquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>)}
    </Row>;
};
const BorderedCards = () => {
  return <Row>
      {colorVariants.slice(0, 3).map((color, idx) => <Col md={4} key={idx}>
          <Card className={`border-${color} border`}>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Link to="" className={`btn btn-${color} btn-sm`}>
                Button
              </Link>
            </CardBody>
          </Card>
        </Col>)}
    </Row>;
};
const HorizontalCards = () => {
  return <Row>
      <Col lg={6}>
        <Card>
          <Row className="g-0 align-items-center">
            <Col md={4}>
              <img src={smallImg4} className="img-fluid rounded-start" alt="..." />
            </Col>
            <Col md={8}>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Row className="g-0 align-items-center">
            <Col md={8}>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Col>
            <Col md={4}>
              <img src={smallImg1} className="img-fluid rounded-end" alt="..." />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>;
};
const CardWithStretchedLink = () => {
  return <Row>
      <Col sm={6} lg={3}>
        <Card>
          <img src={smallImg2} height={246} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>Card with stretched link</CardTitle>
            <Link to="#" className="btn btn-primary mt-2 stretched-link">
              Go somewhere
            </Link>
          </CardBody>
        </Card>
      </Col>
      <Col sm={6} lg={3}>
        <Card>
          <img src={smallImg3} height={246} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>
              <Link to="" className="text-success stretched-link">
                Card with stretched link
              </Link>
            </CardTitle>
            <CardText>Some quick example text to build on the card up the bulk of the card&apos;s content.</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={6} lg={3}>
        <Card>
          <img src={smallImg4} height={246} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>Card with stretched link</CardTitle>
            <Link to="#" className="btn btn-info mt-2 stretched-link">
              Go somewhere
            </Link>
          </CardBody>
        </Card>
      </Col>
      <Col sm={6} lg={3}>
        <Card>
          <img src={smallImg1} height={246} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>
              <Link to="" className="stretched-link">
                Card with stretched link
              </Link>
            </CardTitle>
            <CardText>Some quick example text to build on the card up the bulk of the card&apos;s content.</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
const CardWithGroup = ({
  item
}) => {
  return <Card className="d-block">
      <img className="card-img-top" height={342} src={item.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.text}</CardText>
        <CardText>
          <small className="text-muted">{item.subtext}</small>
        </CardText>
      </CardBody>
    </Card>;
};
const Cards = () => {
  const CardGroupDetails = [{
    id: 1,
    image: smallImg1,
    title: 'Card title',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    subtext: 'Last updated 3 mins ago'
  }, {
    id: 2,
    image: smallImg4,
    title: 'Card title',
    text: 'This card has supporting text below as a natural lead-in to additional content.',
    subtext: 'Last updated 3 mins ago'
  }, {
    id: 3,
    image: smallImg6,
    title: 'Card title',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    subtext: 'Last updated 3 mins ago'
  }];
  return <>
      <PageTitle title="Cards" />
      <Row>
        <Col sm={6} lg={3}>
          <Card1 />
        </Col>
        <Col sm={6} lg={3}>
          <Card2 />
        </Col>
        <Col sm={6} lg={3}>
          <Card3 />
        </Col>
        <Col sm={6} lg={3}>
          <Card4 />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <SpecialTitleCard />
        </Col>
        <Col sm={6}>
          <SpecialTitleCard />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <CardWithHeader />
        </Col>
        <Col md={4}>
          <CardWithHeaderAndQuote />
        </Col>
        <Col md={4}>
          <CardWithHeaderAndFooter />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-2">Card Colored</h4>
        </Col>
      </Row>
      <ColorCards />
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-2">Card Bordered</h4>
        </Col>
      </Row>
      <BorderedCards />
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-2">Horizontal Card</h4>
        </Col>
      </Row>

      <HorizontalCards />
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-2">Stretched link</h4>
        </Col>
      </Row>
      <CardWithStretchedLink />
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-2">Card Group</h4>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12}>
          <div className="card-group">
            {CardGroupDetails.map((item, idx) => <CardWithGroup item={item} key={idx} />)}
          </div>
        </Col>
      </Row>
    </>;
};
export default Cards;
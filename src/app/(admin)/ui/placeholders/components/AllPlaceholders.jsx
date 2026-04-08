import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Placeholder, PlaceholderButton, Row } from 'react-bootstrap';
import small1 from '@/assets/images/small/small-1.jpg';
const BasicPlaceholders = () => {
  return <ComponentContainerCard title="Placeholders" description={<p className="text-muted mb-0">
          In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and
          proportions are the same between the two.
        </p>}>
      <Row>
        <Col md={6}>
          <Card className="border shadow-none">
            <CardImg variant="top" src={small1} alt="..." />
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
              <Button variant="primary" as="a" href="#">
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="border shadow-none mb-0" aria-hidden="true">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#20c997" />
            </svg>
            <CardBody>
              <Placeholder as={CardTitle} animation="glow" className="placeholder-glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <PlaceholderButton variant="primary" xs={6}></PlaceholderButton>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const PlaceholdersWithColor = () => {
  return <ComponentContainerCard title="Color" description={<p className="text-muted mb-0">
          By default, the <code>placeholder</code> uses <code>currentColor</code>. This can be overriden with a custom color or utility class.
        </p>}>
      <Placeholder xs={12} />
      <Placeholder xs={12} bg="primary" />
      <Placeholder xs={12} bg="secondary" />
      <Placeholder xs={12} bg="success" />
      <Placeholder xs={12} bg="danger" />
      <Placeholder xs={12} bg="warning" />
      <Placeholder xs={12} bg="info" />
      <Placeholder xs={12} bg="pink" />
      <Placeholder xs={12} bg="purple" />
      <Placeholder xs={12} bg="light" />
      <Placeholder xs={12} bg="dark" />
    </ComponentContainerCard>;
};
const PlaceholdersWidth = () => {
  return <ComponentContainerCard title="Width" description={<p className="text-muted mb-0">
          You can change the <code>width</code> through grid column classes, width utilities, or inline styles.
        </p>}>
      <Placeholder xs={6} />
      <Placeholder className="w-75" /> <br />
      <Placeholder style={{
      width: '25%'
    }} />
    </ComponentContainerCard>;
};
const PlaceholdersWithSizes = () => {
  return <ComponentContainerCard title="Sizing" description={<p className="text-muted mb-0">
          The size of <code>.placeholder</code>s are based on the typographic style of the parent element. Customize them with sizing modifiers:
          <code>.placeholder-lg</code>, <code>.placeholder-sm</code>, or <code>.placeholder-xs</code>.
        </p>}>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
    </ComponentContainerCard>;
};
const PlaceholdersConcept = () => {
  return <ComponentContainerCard title="How it works" description={<p className="text-muted mb-0">
          Create placeholders with the <code>.placeholder</code> class and a grid column class (e.g., <code>.col-6</code>) to set the
          <code>width</code>. They can replace the text inside an element or as be added as a modifier class to an existing component.
        </p>}>
      <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>

      <PlaceholderButton xs={4} aria-hidden="true" />
    </ComponentContainerCard>;
};
const PlaceholdersAnimation = () => {
  return <ComponentContainerCard title="Animation" description={<p className="text-muted mb-0">
          Animate placehodlers with <code>.placeholder-glow</code> or <code>.placeholder-wave</code> to better convey the perception of something
          being <em>actively</em> loaded.
        </p>}>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave" className="mb-0">
        <Placeholder xs={12} />
      </Placeholder>
    </ComponentContainerCard>;
};
const AllPlaceholders = () => {
  return <Row>
      <Col xl={6}>
        <BasicPlaceholders />
      </Col>
      <Col xl={6}>
        <PlaceholdersWithColor />
        <PlaceholdersWidth />
      </Col>
      <Col xl={6}>
        <PlaceholdersWithSizes />
      </Col>
      <Col xl={6}>
        <PlaceholdersConcept />
      </Col>
      <Col xl={6}>
        <PlaceholdersAnimation />
      </Col>
    </Row>;
};
export default AllPlaceholders;
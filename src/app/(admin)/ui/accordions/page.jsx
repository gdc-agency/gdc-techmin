import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Row } from 'react-bootstrap';
const accordionData = ['first', 'second', 'third'];
const BasicAccordion = () => {
  return <ComponentContainerCard title="Default Accordions" description="Click the accordions below to expand/collapse the accordion content.">
      <Accordion defaultActiveKey={'0'} id="accordionExample">
        {accordionData.map((item, idx) => <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader id="headingOne">Accordion Item #{idx + 1}</AccordionHeader>
            <AccordionBody>
              <strong>This is the {item}&nbsp; item&apos;s accordion body.</strong>
              It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It&apos;s also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>)}
      </Accordion>
    </ComponentContainerCard>;
};
const FlushAccordion = () => {
  return <ComponentContainerCard title="Flush Accordions" description={<p className="text-muted mb-0">
          Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render
          accordions edge-to-edge with their parent container.
        </p>}>
      <Accordion defaultActiveKey={'0'} flush id="accordionExample">
        {accordionData.map((item, idx) => <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader id="headingOne">Accordion Item #{idx + 1}</AccordionHeader>
            <AccordionBody>
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code>&nbsp; class. This is the {item}&nbsp; item&apos;s accordion body.
            </AccordionBody>
          </AccordionItem>)}
      </Accordion>
    </ComponentContainerCard>;
};
const AlwaysOpenAccordion = () => {
  return <ComponentContainerCard title="Always Open Accordion" description={<>
          <p className="text-muted mb-0">
            Omit the <code>data-bs-parent</code> attribute on each <code>.accordion-collapse</code> to make accordion items stay open when another
            item is opened.
          </p>
        </>}>
      <Accordion defaultActiveKey={'0'} alwaysOpen id="accordionExample">
        {accordionData.map((item, idx) => <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader id="headingOne">Accordion Item #{idx + 1}</AccordionHeader>
            <AccordionBody>
              <strong>This is the {item}&nbsp; item&apos;s accordion body.</strong>
              It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It&apos;s also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>)}
      </Accordion>
    </ComponentContainerCard>;
};
const Accordions = () => {
  return <>
      <PageTitle title="Accordions" />
      <Row>
        <Col xl={6}>
          <BasicAccordion />
        </Col>
        <Col xl={6}>
          <FlushAccordion />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <AlwaysOpenAccordion />
        </Col>
      </Row>
    </>;
};
export default Accordions;
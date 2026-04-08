import { splitArray } from '@/utils/array';
import { Accordion, AccordionCollapse, Card, CardBody, CardHeader, CardTitle, Col, Row, useAccordionButton } from 'react-bootstrap';
import { faqs } from '../data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const CustomToggle = ({
  children,
  eventKey,
  icon
}) => {
  return <CardHeader className="d-flex bg-light p-2">
      <div className="avatar-xs bg-primary-subtle text-center me-1 flex-centered">
        <IconifyIcon icon={icon} className="text-primary fs-20" />
      </div>
      <CardTitle className="mt-1">
        <span role="button" onClick={useAccordionButton(eventKey)} className="text-dark" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {children}
        </span>
      </CardTitle>
    </CardHeader>;
};
const FAQ = () => {
  const faqChunks = splitArray(faqs, 4);
  return <Row className="justify-content-center">
      {faqChunks.map((faqs, idx) => <Col xl={6} key={idx}>
          <div className="p-2">
            <Accordion defaultActiveKey={'0'} className="custom-accordion" id="accordionExample">
              {faqs.map((faq, idx) => <Card className="mb-2" key={idx}>
                  <CustomToggle eventKey={`${idx}`} icon={faq.icon}>
                    {faq.question}
                  </CustomToggle>
                  <AccordionCollapse eventKey={`${idx}`}>
                    <CardBody>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <p className="mb-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                    </CardBody>
                  </AccordionCollapse>
                </Card>)}
            </Accordion>
          </div>
        </Col>)}
    </Row>;
};
export default FAQ;
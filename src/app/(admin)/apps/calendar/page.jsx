import PageTitle from '@/components/PageTitle';
import { lazy, Suspense } from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const CalendarPage = lazy(() => import('./components/CalendarPage'));
const Calendar = () => {
  return <>
      <PageTitle title="Calendar" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Row>
                <Suspense>
                  <CalendarPage />
                </Suspense>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Calendar;
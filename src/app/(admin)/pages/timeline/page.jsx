import PageTitle from '@/components/PageTitle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getTimelineData } from '@/helpers/data';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import { useFetchData } from '@/hooks/useFetchData';
const Timeline1 = ({
  timeline
}) => {
  return <Card>
      <CardBody>
        <div className="timeline" dir="ltr">
          {Object.keys(timeline).map((day, idx) => {
          return <Fragment key={idx}>
                <article className="timeline-item alt">
                  <div className="text-end">
                    <div className="time-show first">
                      <Button variant="primary" className="w-lg">
                        {day}
                      </Button>
                    </div>
                  </div>
                </article>
                {timeline[day].map((item, idx) => {
              return idx % 2 === 0 ? <article className="timeline-item alt" key={idx}>
                      <div className="timeline-desk">
                        <div className="panel">
                          <div className="timeline-box">
                            <span className="arrow-alt" />
                            <span className={`timeline-icon flex-centered bg-${item.variant}`}>
                              <IconifyIcon icon="mdi:record-circle-outline" />
                            </span>
                            <h4 className={`fs-16 fw-semibold text-${item.variant}`}>{item.date}</h4>
                            <p className="timeline-date text-muted">
                              <small>{item.time}</small>
                            </p>
                            <p>{item.text}</p>
                            {item.images && <Fragment>
                                <div className="album">
                                  {item.images.map((img, idx) => {
                            return <Link to="" key={idx}>
                                        <img alt="avatar" src={img} />
                                      </Link>;
                          })}
                                </div>
                                <div className="clearfix" />
                              </Fragment>}
                          </div>
                        </div>
                      </div>
                    </article> : <article className="timeline-item" key={idx}>
                      <div className="timeline-desk">
                        <div className="panel">
                          <div className="timeline-box">
                            <span className="arrow" />
                            <span className={`timeline-icon flex-centered bg-${item.variant}`}>
                              <IconifyIcon icon="mdi:record-circle-outline" />
                            </span>
                            <h4 className={`fs-16 fw-semibold text-${item.variant}`}>{item.date}</h4>
                            <p className="timeline-date text-muted">
                              <small>{item.time}</small>
                            </p>
                            <p>{item.text}</p>
                            {item.images && <Fragment>
                                <div className="album">
                                  {item.images.map((img, idx) => {
                            return <Link to="" key={idx}>
                                        <img alt="avatar" src={img} />
                                      </Link>;
                          })}
                                </div>
                                <div className="clearfix" />
                              </Fragment>}
                          </div>
                        </div>
                      </div>
                    </article>;
            })}
              </Fragment>;
        })}
        </div>
      </CardBody>
    </Card>;
};
const Timeline2 = ({
  timeline
}) => {
  return <Card>
      <CardBody>
        <div className="timeline timeline-left">
          {Object.keys(timeline).slice(0, 1).map((day, idx) => {
          return <Fragment key={idx}>
                  <article className="timeline-item alt">
                    <div className="text-start">
                      <div className="time-show first">
                        <Button variant="primary" className="w-lg">
                          {day}
                        </Button>
                      </div>
                    </div>
                  </article>
                  {timeline[day].map((item, idx) => <article className="timeline-item" key={idx}>
                      <div className="timeline-desk">
                        <div className="panel">
                          <div className="timeline-box">
                            <span className="arrow" />
                            <span className={`timeline-icon flex-centered bg-${item.variant}`}>
                              <IconifyIcon icon="mdi:record-circle-outline" />
                            </span>
                            <h4 className={`fs-16 fw-semibold text-${item.variant}`}>{item.date}</h4>
                            <p className="timeline-date text-muted">
                              <small>{item.time}</small>
                            </p>
                            <p>{item.text}</p>
                            {item.images && <Fragment>
                                <div className="album">
                                  {item.images.map((img, idx) => {
                          return <Link to="" key={idx}>
                                        <img alt="avatar" src={img} />
                                      </Link>;
                        })}
                                </div>
                                <div className="clearfix" />
                              </Fragment>}
                          </div>
                        </div>
                      </div>
                    </article>)}
                </Fragment>;
        })}
        </div>
      </CardBody>
    </Card>;
};
const Timeline = () => {
  const timelineData = useFetchData(getTimelineData);
  return <>
      <PageTitle title="Timeline" />
      <Row>
        <Col xs={12}>
          {timelineData && <Timeline1 timeline={timelineData} />}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {timelineData && <Timeline2 timeline={timelineData} />}
        </Col>
      </Row>
    </>;
};
export default Timeline;
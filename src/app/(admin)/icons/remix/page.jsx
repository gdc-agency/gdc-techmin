import { remixIconsList } from '@/assets/data/icons';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import clsx from 'clsx';
import { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const RemixIcons = () => {
  return <Row>
      <Col xs={12}>
        {(remixIconsList || []).map((category, index) => {
        return <Card key={index}>
              <CardBody>
                <h4 className="card-title">{Object.keys(category)[0]}</h4>
                {Object.keys(category).includes('Editor') ? <>
                    <p className="card-title-desc mb-2">
                      Use <code>&lt;iconifyIcon icon=&quot;ri:bold&quot;&gt;&lt;/iconifyIcon&gt;</code>
                    </p>
                    <Row className="icons-list-demo">
                      {(Object.keys(category[Object.keys(category)[0]]) || []).map((icon, index) => {
                  return <Col xl={3} lg={4} sm={6} key={index}>
                            <IconifyIcon icon={clsx('ri:' + icon)}></IconifyIcon>
                            <span className="ms-3">ri:{icon}</span>
                          </Col>;
                })}
                    </Row>
                  </> : <>
                    <p className="card-title-desc mb-2">
                      Use <code>&lt;IconifyIcon icon=&quot;ri:home-line&quot;&gt;&lt;/IconifyIcon&gt;</code> or
                      <code>&lt;IconifyIcon icon=&quot;ri:home-fill&quot;&gt;&lt;/IconifyIcon&gt;</code>
                    </p>
                    <Row className="icons-list-demo">
                      {(Object.keys(category[Object.keys(category)[0]]) || []).map((icon, index) => {
                  return <Fragment key={icon + index}>
                            <Col xl={3} lg={4} sm={6}>
                              <IconifyIcon icon={clsx('ri:' + icon + '-line')}></IconifyIcon> <span className="ms-3">ri:{icon}-line</span>
                            </Col>
                            <Col xl={3} lg={4} sm={6}>
                              <IconifyIcon icon={clsx('ri:' + icon + '-fill')}></IconifyIcon> <span className="ms-3">ri:{icon}-fill</span>
                            </Col>
                          </Fragment>;
                })}
                    </Row>
                  </>}
              </CardBody>
            </Card>;
      })}
      </Col>
    </Row>;
};
export default RemixIcons;
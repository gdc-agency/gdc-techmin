import PageTitle from '@/components/PageTitle';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const Grid = () => {
  return <>
      <PageTitle title="Grid" />
      <Row>
        <Col xs={12}>
          <Card>
            <div className="card-header">
              <h4 className=".card-title">Grid options</h4>
              <p className="text-muted mb-0">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th />
                      <th className="text-center">
                        Extra small
                        <br />
                        <small>&lt;576px</small>
                      </th>
                      <th className="text-center">
                        Small
                        <br />
                        <small>≥576px</small>
                      </th>
                      <th className="text-center">
                        Medium
                        <br />
                        <small>≥768px</small>
                      </th>
                      <th className="text-center">
                        Large
                        <br />
                        <small>≥992px</small>
                      </th>
                      <th className="text-center">
                        Extra large
                        <br />
                        <small>≥1200px</small>
                      </th>
                      <th className="text-center">
                        Extra large
                        <br />
                        <small>≥1400px</small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Max container width
                      </th>
                      <td>None (auto)</td>
                      <td>540px</td>
                      <td>720px</td>
                      <td>960px</td>
                      <td>1140px</td>
                      <td>1320px</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Class prefix
                      </th>
                      <td>
                        <code>.col-</code>
                      </td>
                      <td>
                        <code>.col-sm-</code>
                      </td>
                      <td>
                        <code>.col-md-</code>
                      </td>
                      <td>
                        <code>.col-lg-</code>
                      </td>
                      <td>
                        <code>.col-xl-</code>
                      </td>
                      <td>
                        <code>.col-xxl-</code>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        # of columns
                      </th>
                      <td colSpan={6}>12</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Gutter width
                      </th>
                      <td colSpan={6}>1.25rem (0.625rem on each side of a column)</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Custom gutters
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Nestable
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Column ordering
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader>
              <CardTitle as="h4" className="mb-0">
                Grid Example
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="grid-structure">
                <Row>
                  <Col lg={12}>
                    <div className="grid-container">col-lg-12</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={11}>
                    <div className="grid-container">col-lg-11</div>
                  </Col>
                  <Col lg={1}>
                    <div className="grid-container">col-lg-1</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                    <div className="grid-container">col-lg-10</div>
                  </Col>
                  <Col lg={2}>
                    <div className="grid-container">col-lg-2</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9}>
                    <div className="grid-container">col-lg-9</div>
                  </Col>
                  <Col lg={3}>
                    <div className="grid-container">col-lg-3</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={8}>
                    <div className="grid-container">col-lg-8</div>
                  </Col>
                  <Col lg={4}>
                    <div className="grid-container">col-lg-4</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={7}>
                    <div className="grid-container">col-lg-7</div>
                  </Col>
                  <Col lg={5}>
                    <div className="grid-container">col-lg-5</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="grid-container">col-lg-6</div>
                  </Col>
                  <Col lg={6}>
                    <div className="grid-container">col-lg-6</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={5}>
                    <div className="grid-container">col-lg-5</div>
                  </Col>
                  <Col lg={7}>
                    <div className="grid-container">col-lg-7</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <div className="grid-container">col-lg-4</div>
                  </Col>
                  <Col lg={8}>
                    <div className="grid-container">col-lg-8</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <div className="grid-container">col-lg-3</div>
                  </Col>
                  <Col lg={9}>
                    <div className="grid-container">col-lg-9</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={2}>
                    <div className="grid-container">col-lg-2</div>
                  </Col>
                  <Col lg={10}>
                    <div className="grid-container">col-lg-10</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={1}>
                    <div className="grid-container">col-lg-1</div>
                  </Col>
                  <Col lg={11}>
                    <div className="grid-container">col-lg-11</div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={2}>
                    <div className="grid-container">col-lg-2</div>
                  </Col>
                  <Col lg={3}>
                    <div className="grid-container">col-lg-3</div>
                  </Col>
                  <Col lg={4}>
                    <div className="grid-container">col-lg-4</div>
                  </Col>
                  <Col lg={2}>
                    <div className="grid-container">col-lg-2</div>
                  </Col>
                  <Col lg={1}>
                    <div className="grid-container">col-lg-1</div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Grid;
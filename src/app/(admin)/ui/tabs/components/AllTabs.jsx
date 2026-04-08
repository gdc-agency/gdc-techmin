import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
const text1 = 'Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.';
const text2 = 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.';
const tabContents = [{
  id: '1',
  title: 'Home',
  text: text1,
  text2: text2
}, {
  id: '2',
  title: 'Profile',
  text: text2,
  text2: text1
}, {
  id: '3',
  title: 'Settings',
  text: text1,
  text2: text2
}];
const DefaultTabs = () => {
  return <ComponentContainerCard title="Default Tabs" description={<p className="text-muted mb-0">Simple widget of tabbable panes of local content.</p>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav variant="tabs" role="tablist" className="mb-3">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem as="li" role="presentation" key={idx}>
                <NavLink eventKey={tab.title}>
                  <span className="d-none d-md-block">{tab.title}</span>
                </NavLink>
              </NavItem>;
        })}
        </Nav>
        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">
                    <p>{tab.text}</p>
                    <p className="mb-0">{tab.text2}</p>
                  </Col>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const TabsJustified = () => {
  return <ComponentContainerCard title="Tabs Justified" description={<p className="text-muted mb-0">
          Using class <code>.nav-justified</code>, you can force your <code>tab menu items</code> to use the full available width.
        </p>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav variant="pills" justify className="bg-nav-pills mb-3">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem as="li" key={idx}>
                <NavLink eventKey={tab.title}>{tab.title}</NavLink>
              </NavItem>;
        })}
        </Nav>

        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">
                    <p>{tab.text}</p>
                    <p className="mb-0">{tab.text2}</p>
                  </Col>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const TabsVerticalLeft = () => {
  return <ComponentContainerCard title="Tabs Vertical Left" description={<p className="text-muted mb-0">
          You can stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.
        </p>}>
      <Row>
        <TabContainer defaultActiveKey="Profile">
          <Col sm={3} mb={2} className="mb-sm-0">
            <Nav variant="pills" className="flex-column">
              {(tabContents || []).map((tab, idx) => {
              return <NavItem as="li" key={idx}>
                    <NavLink eventKey={tab.title}>{tab.title}</NavLink>
                  </NavItem>;
            })}
            </Nav>
          </Col>

          <Col sm={9}>
            <TabContent>
              {(tabContents || []).map((tab, idx) => {
              return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                    <Row>
                      <Col sm="12">
                        <p className="mb-0">{tab.text}</p>
                      </Col>
                    </Row>
                  </TabPane>;
            })}
            </TabContent>
          </Col>
        </TabContainer>
      </Row>
    </ComponentContainerCard>;
};
const TabsVerticalRight = () => {
  return <ComponentContainerCard title="Tabs Vertical Right" description={<p className="text-muted mb-0">
          You can stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.
        </p>}>
      <Row>
        <TabContainer defaultActiveKey="Profile">
          <Col sm={9}>
            <TabContent>
              {(tabContents || []).map((tab, idx) => {
              return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                    <Row>
                      <Col sm="12">
                        <p className="mb-0">{tab.text2}</p>
                      </Col>
                    </Row>
                  </TabPane>;
            })}
            </TabContent>
          </Col>

          <Col sm={3} mb={2} className="mb-sm-0">
            <Nav variant="pills" className="flex-column">
              {(tabContents || []).map((tab, idx) => {
              return <NavItem as="li" key={idx}>
                    <NavLink eventKey={tab.title}>{tab.title}</NavLink>
                  </NavItem>;
            })}
            </Nav>
          </Col>
        </TabContainer>
      </Row>
    </ComponentContainerCard>;
};
const TabsBordered = () => {
  return <ComponentContainerCard title="Tabs Bordered" description={<p className="text-muted mb-0">
          The navigation item can have a simple bottom border as well. Just specify the class <code>.nav-bordered</code>.
        </p>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav variant="tabs" className="nav-bordered" as="ul">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem key={idx} as="li">
                <NavLink eventKey={tab.title}>
                  <span className="d-none d-md-block">{tab.title}</span>
                </NavLink>
              </NavItem>;
        })}
        </Nav>

        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <p className="mt-3">{tab.text}</p>
                  <p className="mb-0">{tab.text2}</p>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const TabsBorderedJustified = () => {
  return <ComponentContainerCard title="Tabs Bordered Justified" description={<p className="text-muted mb-0">The navigation item with a simple bottom border and justified</p>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav variant="tabs" justify className="nav-bordered" as="ul">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem key={idx} as="li">
                <NavLink eventKey={tab.title}>
                  <span className="d-none d-md-block">{tab.title}</span>
                </NavLink>
              </NavItem>;
        })}
        </Nav>

        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">
                    <p className="mt-3">{tab.text}</p>
                    <p className="mb-0">{tab.text2}</p>
                  </Col>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const AllTabs = () => {
  return <>
      <Row>
        <Col xl={6}>
          <DefaultTabs />
        </Col>
        <Col xl={6}>
          <TabsJustified />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <TabsVerticalLeft />
        </Col>
        <Col xl={6}>
          <TabsVerticalRight />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <TabsBordered />
        </Col>
        <Col xl={6}>
          <TabsBorderedJustified />
        </Col>
      </Row>
    </>;
};
export default AllTabs;
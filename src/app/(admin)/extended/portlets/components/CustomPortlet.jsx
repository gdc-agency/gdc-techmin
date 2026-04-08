import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useState } from 'react';
import { Card, CardBody, CardHeader, Collapse } from 'react-bootstrap';
const CustomPortlet = props => {
  const children = props['children'];
  const cardTitle = props['cardTitle'] || 'Card title';
  const [collapse, setCollapse] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);

  /**
   * Toggle the body
   */
  const toggleContent = () => {
    setCollapse(!collapse);
  };

  /**
   * Reload the content
   */
  const reloadContent = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500 + 300 * (Math.random() * 5));
  };

  /**
   * remove the portlet
   */
  const remove = () => {
    setHidden(true);
  };
  return <>
      {!hidden ? <Card>
          {loading && <div className="card-disabled">
              <div className="card-portlets-loader"></div>
            </div>}
          <CardHeader className={props.className}>
            <div className="card-widgets">
              <span role="button" onClick={reloadContent}>
                <IconifyIcon height={18} width={18} icon="mdi:autorenew" />
              </span>
              <span role="button" onClick={toggleContent}>
                <IconifyIcon height={18} width={18} className="mx-1" icon={`mdi:${collapse ? 'minus' : 'plus'}`} />
              </span>
              <span role="button" onClick={remove}>
                <IconifyIcon height={18} width={18} icon="mdi:window-close" />
              </span>
            </div>
            <h5 className="card-title mb-0">{cardTitle}</h5>
          </CardHeader>
          <Collapse in={collapse}>
            <div>
              <CardBody>
                <>{children}</>
              </CardBody>
            </div>
          </Collapse>
        </Card> : null}
    </>;
};
export default CustomPortlet;
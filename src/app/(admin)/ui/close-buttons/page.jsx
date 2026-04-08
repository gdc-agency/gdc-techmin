import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { Col, Row } from 'react-bootstrap';
const DefaultCloseButton = () => {
  return <ComponentContainerCard title="Default Close Button" description={<p className="text-muted mb-0">
          Provide an option to dismiss or close a component with .btn-close. Default styling is limited, but highly customizable. Modify the Sass
          variables to replace the default background-image. Be sure to include text for screen readers, as we’ve done with aria-label.
        </p>}>
      <button type="button" className="btn-close" aria-label="Close" />
    </ComponentContainerCard>;
};
const DisabledCloseButton = () => {
  return <ComponentContainerCard title="Disabled state" description={<p className="text-muted mb-0">
          Disabled close buttons change their opacity. We’ve also applied pointer-events: none and user-select: none to preventing hover and active
          states from triggering.
        </p>}>
      <button type="button" className="btn-close" disabled aria-label="Close" />
    </ComponentContainerCard>;
};
const DarkVariant = () => {
  return <ComponentContainerCard title="Dark variant" description={<p className="text-muted mb-0">
          Add data-bs-theme=&quot;dark&quot; to the .btn-close, or to its parent element, to invert the close button. This uses the filter property to
          invert the background-image without overriding its value.
        </p>}>
      <div data-bs-theme="bg-dark">
        <button type="button" className="btn-close" aria-label="Close" />
        <button type="button" className="btn-close" disabled aria-label="Close" />
      </div>
    </ComponentContainerCard>;
};
const CloseButtons = () => {
  return <>
      <PageTitle title="Close Button" />
      <Row>
        <Col xl={6}>
          <DefaultCloseButton />
        </Col>
        <Col xl={6}>
          <DisabledCloseButton />
        </Col>
        <Col xl={6}>
          <DarkVariant />
        </Col>
      </Row>
    </>;
};
export default CloseButtons;
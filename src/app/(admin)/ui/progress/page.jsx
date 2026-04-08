import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { Col, ProgressBar, Row } from 'react-bootstrap';
const Example = () => {
  return <ComponentContainerCard title="Examples" description={<p className="text-muted mb-0">A progress bar can be used to show a user how far along he/she is in a process.</p>}>
      <ProgressBar className="mb-2" now={0} />
      <ProgressBar className="mb-2" now={25} />
      <ProgressBar className="mb-2" now={50} />
      <ProgressBar className="mb-2" now={75} />
      <ProgressBar className="progress" now={100} />
    </ComponentContainerCard>;
};
const HeightProgressBar = () => {
  return <ComponentContainerCard title="Height" description={<p className="text-muted mb-0">
          We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will
          automatically resize accordingly. Use <code>.progress-sm</code>,<code>.progress-md</code>,<code>.progress-lg</code>,
          <code>.progress-xl</code> classes.
        </p>}>
      <ProgressBar now={25} variant="danger" className="mb-2" style={{
      height: 1
    }} />
      <ProgressBar now={25} variant="primary" className="mb-2" style={{
      height: 3
    }} />
      <ProgressBar now={25} variant="success" className="mb-2 progress-sm" />
      <ProgressBar now={50} variant="info" className="mb-2 progress-md" />
      <ProgressBar now={75} variant="warning" className="progress-lg mb-2" />
      <ProgressBar now={38} variant="success" className="progress-xl" />
    </ComponentContainerCard>;
};
const MultipleBars = () => {
  return <ComponentContainerCard title="Multiple bars" description={<p className="text-muted mb-0">Include multiple progress bars in a progress component if you need.</p>}>
      <ProgressBar className="progress">
        <ProgressBar now={15}></ProgressBar>
        <ProgressBar now={30} variant="success" className="bg-success" />
        <ProgressBar now={20} variant="info" className="bg-info" />
      </ProgressBar>
    </ComponentContainerCard>;
};
const AnimatedStripes = () => {
  return <ComponentContainerCard title="Animated stripes" description={<p className="text-muted mb-0">
          The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes
          right to left via CSS3 animations.
        </p>}>
      <ProgressBar now={75} animated className="progress" />
    </ComponentContainerCard>;
};
const LabelsBar = () => {
  return <ComponentContainerCard title="Labels" description={<p className="text-muted mb-0">
          Add labels to your progress bars by placing text within the <code>.progress-bar</code>.
        </p>}>
      <ProgressBar now={25} label="25%" />
    </ComponentContainerCard>;
};
const BackgroundBar = () => {
  return <ComponentContainerCard title="Backgrounds" description={<p className="text-muted mb-0">Use background utility classes to change the appearance of individual progress bars.</p>}>
      <ProgressBar now={25} variant="success" className="mb-2" />
      <ProgressBar now={50} variant="info" className="mb-2" />
      <ProgressBar now={75} variant="warning" className="mb-2" />
      <ProgressBar now={100} variant="danger" className="mb-2" />
      <ProgressBar now={85} variant="pink" className="mb-2" />
      <ProgressBar now={85} variant="purple" className="mb-2" />
      <ProgressBar now={65} variant="dark" className="mb-2" />
      <ProgressBar now={50} variant="secondary" />
    </ComponentContainerCard>;
};
const StripedBar = () => {
  return <ComponentContainerCard title="Striped" description={<p className="text-muted mb-0">
          Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s
          background color.
        </p>}>
      <ProgressBar now={10} striped className="mb-2" />
      <ProgressBar now={25} striped variant="success" className="mb-2" />
      <ProgressBar now={50} striped variant="info" className="mb-2" />
      <ProgressBar now={75} striped variant="warning" className="mb-2" />
      <ProgressBar now={100} striped variant="danger" className="mb-2" />
      <ProgressBar now={100} striped variant="pink" />
    </ComponentContainerCard>;
};
const Progress = () => {
  return <>
      <PageTitle title="Progress" />
      <Row>
        <Col xl={6}>
          <Example />
          <HeightProgressBar />
          <MultipleBars />
          <AnimatedStripes />
        </Col>
        <Col xl={6}>
          <LabelsBar />
          <BackgroundBar />
          <StripedBar />
        </Col>
      </Row>
    </>;
};
export default Progress;
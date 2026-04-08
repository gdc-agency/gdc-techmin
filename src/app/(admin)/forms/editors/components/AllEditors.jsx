import { Col, Row } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactQuill from 'react-quill';

// styles
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
let valueBubble = '';
let valueSnow = '';
valueSnow = valueBubble = `<h3><span class="ql-size-large">Hello World!</span></h3>
    <p><br/></p>
    <h3>This is a simple editable area.</h3>
    <p><br/></p>
    <ul>
      <li>Select a text to reveal the toolbar.</li>
      <li>Edit rich document on-the-fly, so elastic!</li>
    </ul>
<p><br/></p>
<p>End of simple area</p>`;
const SnowEditor = () => {
  const modules = {
    toolbar: [[{
      font: []
    }, {
      size: []
    }], ['bold', 'italic', 'underline', 'strike'], [{
      color: []
    }, {
      background: []
    }], [{
      script: 'super'
    }, {
      script: 'sub'
    }], [{
      header: [false, 1, 2, 3, 4, 5, 6]
    }, 'blockquote', 'code-block'], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }, {
      indent: '-1'
    }, {
      indent: '+1'
    }], ['direction', {
      align: []
    }], ['link', 'image', 'video'], ['clean']]
  };
  return <ComponentContainerCard className="m-0 p-0" title="Quill Editor" description={<p className="text-muted mb-0">Snow is a clean, flat toolbar theme.</p>}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="mb-2">
            <ReactQuill id="snow-editor" modules={modules} defaultValue={valueSnow} theme="snow" />
          </div>
        </li>
      </ul>
    </ComponentContainerCard>;
};
const BubbleEditor = () => {
  return <ComponentContainerCard className="m-0 p-0" title="Bubble Editor" description={<p className="text-muted mb-0">Bubble is a simple tooltip based theme.</p>}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="mb-2">
            <div id="snow-editor" style={{
            height: 300
          }}>
              <ReactQuill id="bubble-editor" defaultValue={valueBubble} theme="bubble" style={{
              height: 300
            }} />
            </div>
          </div>
        </li>
      </ul>
    </ComponentContainerCard>;
};
const AllEditors = () => {
  return <Row>
      <Col xs={12}>
        <SnowEditor />
        <BubbleEditor />
      </Col>
    </Row>;
};
export default AllEditors;
import ComponentContainerCard from '@/components/ComponentContainerCard';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { Col, FormControl, FormLabel, FormSelect, Row } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
import { useForm } from 'react-hook-form';
const InputTypes = () => {
  const {
    control
  } = useForm();
  return <ComponentContainerCard title="Input Types" description={<p className="text-muted mb-0">
          Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>,
          <code>datetime</code>,<code>datetime-local</code>, <code>date</code>, <code>month</code>,<code>time</code>, <code>week</code>,
          <code>number</code>, <code>email</code>,<code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
        </p>}>
      <Row>
        <Col lg={6}>
          <form>
            <TextFormInput name="text" label="Text" control={control} containerClassName="mb-3" />
            <TextFormInput name="email" type="email" label="Email" control={control} containerClassName="mb-3" placeholder="Email" />

            <PasswordFormInput name="password" label="Password" control={control} containerClassName="mb-3" placeholder="password" />
            <TextFormInput name="placeholder" label="Placeholder" control={control} containerClassName="mb-3" placeholder="placeholder" />
            <TextAreaFormInput name="textarea" label="Text area" rows={5} control={control} containerClassName="mb-3" />
            <TextFormInput name="readonly" label="Readonly" control={control} containerClassName="mb-3" readOnly placeholder="Readonly value" />
            <TextFormInput name="disable" label="Disabled" control={control} containerClassName="mb-3" disabled placeholder="Disabled value" />
            <div className="mb-3">
              <label htmlFor="example-static" className="form-label">
                Static control
              </label>
              <input type="text" readOnly className="form-control-plaintext" id="example-static" defaultValue="email@example.com" />
            </div>
            <div className="mb-0">
              <label htmlFor="example-helping" className="form-label">
                Helping text
              </label>
              <FormControl type="text" id="example-helping" placeholder="Helping text" />
              <span className="help-block">
                <small>A block of help text that breaks onto a new line and may extend beyond one line.</small>
              </span>
            </div>
          </form>
        </Col>
        <Col lg={6}>
          <form>
            <div className="mb-3">
              <label htmlFor="example-select" className="form-label">
                Input Select
              </label>
              <FormSelect id="example-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </FormSelect>
            </div>
            <div className="mb-3">
              <label htmlFor="example-multiselect" className="form-label">
                Multiple Select
              </label>
              <select id="example-multiselect" multiple className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="mb-3">
              <FormLabel htmlFor="example-fileinput">Default file input</FormLabel>
              <FormControl type="file" id="example-fileinput" />
            </div>
            <TextFormInput label="Date" type="date" name="date" containerClassName="mb-3" control={control} />
            <TextFormInput label="Month" type="month" name="month" containerClassName="mb-3" key="month" control={control} />

            <TextFormInput label="Time" type="time" name="time" containerClassName="mb-3" key="time" control={control} />

            <TextFormInput label="Week" type="week" name="week" containerClassName="mb-3" key="week" control={control} />

            <TextFormInput label="Number" type="number" name="number" placeholder="Number placeholder" containerClassName="mb-3" key="number" control={control} />

            <TextFormInput label="Color" type="color" name="color" className="w-100" value="#727cf5" placeholder="Color placeholder" containerClassName="mb-3" key="color" control={control} />
            <div className="mb-0">
              <FormLabel htmlFor="example-range">Range</FormLabel>
              <FormRange id="example-range" name="range" min={0} max={100} />
            </div>
          </form>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
export default InputTypes;
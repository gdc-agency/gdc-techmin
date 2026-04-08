import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody } from 'react-bootstrap';
import EasyEdit, { Types } from 'react-easy-edit';
const EditableForm = () => {
  const save = _value => {};
  const cancel = () => {};
  return <Card>
      <CardBody>
        <h4 className="header-title mb-4">Inline Examples</h4>
        <table className="table table-bordered table-striped mb-0">
          <tbody>
            <tr>
              <td style={{
              width: '35%'
            }}>Simple text field</td>
              <td style={{
              width: '65%'
            }}>
                <EasyEdit value={'superuser'} placeholder="superuser" type={Types.TEXT} onSave={save} onCancel={cancel} saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} attributes={{
                name: 'superuser',
                id: 1
              }} />
              </td>
            </tr>

            <tr>
              <td>Empty text field, required</td>
              <td>
                <EasyEdit placeholder="Empty" type={Types.TEXT} onSave={save} onCancel={cancel} saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<button type="button" className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </button>} attributes={{
                name: '',
                id: 1
              }} />
              </td>
            </tr>
            <tr>
              <td>Select, local array, custom display</td>
              <td>
                <EasyEdit type={Types.DATALIST} options={[{
                label: 'not selected',
                value: ''
              }, {
                label: 'Male',
                value: 'Male'
              }, {
                label: 'female',
                value: 'female'
              }]} onSave={save} onCancel={cancel} placeholder="not selected" saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} />
              </td>
            </tr>
            <tr>
              <td>Select, remote array, no buttons</td>
              <td>
                <EasyEdit type={Types.SELECT} options={[]} onSave={save} onCancel={cancel} value="Admin" saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} instructions="Error when loading list" />
              </td>
            </tr>
            <tr>
              <td>Select, error while loading</td>
              <td>
                <EasyEdit type={Types.SELECT} options={[]} onSave={save} onCancel={cancel} value="Active" saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} instructions="Error when loading list" />
              </td>
            </tr>
            <tr>
              <td>Combodate (date)</td>
              <td>
                <EasyEdit type={Types.DATE} placeholder={new Date().toISOString().substr(0, 11).replace('T', ' ')} onSave={save} onCancel={cancel} instructions="Select your date of birth" saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} />
              </td>
            </tr>
            <tr>
              <td>Combodate (datetime)</td>
              <td>
                <EasyEdit type={Types.DATETIME_LOCAL} placeholder="Empty" onSave={save} onCancel={cancel} saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} />
              </td>
            </tr>
            <tr>
              <td>
                Textarea, buttons below. Submit by <i>ctrl+enter</i>
              </td>
              <td>
                <EasyEdit type={Types.TEXTAREA} onSave={save} onCancel={cancel} placeholder="awesome user!" saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light ">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} />
              </td>
            </tr>
            <tr>
              <td>Checklist</td>
              <td>
                <EasyEdit type={Types.CHECKBOX} options={[{
                label: 'Banana',
                value: 'Banana'
              }, {
                label: 'Peach',
                value: 'Peach'
              }, {
                label: 'Apple',
                value: 'Apple'
              }, {
                label: 'Watermelon',
                value: 'Watermelon'
              }, {
                label: 'Orange',
                value: 'Orange'
              }]} onSave={save} onCancel={cancel} value={['Banana', 'Peach']} saveButtonLabel={<div className="btn btn-primary editable-submit btn-sm waves-effect waves-light">
                      <IconifyIcon icon="mdi:check" />
                    </div>} cancelButtonLabel={<div className="btn btn-danger editable-cancel btn-sm waves-effect">
                      <IconifyIcon icon="mdi:close" />
                    </div>} />
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>;
};
export default EditableForm;
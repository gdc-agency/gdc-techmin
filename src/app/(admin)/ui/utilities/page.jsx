import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { colorVariants } from '@/context/constants';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import small1 from '@/assets/images/small/small-1.jpg';
import small2 from '@/assets/images/small/small-2.jpg';
import { Link } from 'react-router-dom';
const BackgroundColors = () => {
  return <ComponentContainerCard title="Background Color" description={<p className="text-muted mb-0">
          Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities
          <strong>
            do not set <code>color</code>
          </strong>
          , so in some cases you’ll want to use <code>.text-*</code>color utilities.
        </p>}>
      <div className="bg-primary text-white p-2 mb-2">.bg-primary</div>
      <div className="bg-secondary text-white p-2 mb-2">.bg-secondary</div>
      <div className="bg-success text-white p-2 mb-2">.bg-success</div>
      <div className="bg-danger text-white p-2 mb-2">.bg-danger</div>
      <div className="bg-warning text-dark p-2 mb-2">.bg-warning</div>
      <div className="bg-info text-dark p-2 mb-2">.bg-info</div>
      <div className="bg-pink text-dark p-2 mb-2">.bg-pink</div>
      <div className="bg-purple text-dark p-2 mb-2">.bg-purple</div>
      <div className="bg-light text-dark p-2 mb-2">.bg-light</div>
      <div className="bg-dark p-2 mb-2">.bg-dark</div>
      <div className="bg-body text-dark p-2 mb-2">.bg-body</div>
      <div className="bg-body-secondary text-dark p-2 mb-2">.bg-body-secondary</div>
      <div className="bg-body-tertiary text-dark p-2 mb-2">.bg-body-tertiary</div>
      <div className="bg-white p-2 mb-2">.bg-white</div>
      <div className="bg-black text-white p-2 mb-2">.bg-black</div>
      <div className="bg-transparent text-dark p-2">.bg-transparent</div>
    </ComponentContainerCard>;
};
const BackgroundGradientColors = () => {
  return <ComponentContainerCard title="Background Gradient Color" description={<p className="text-muted mb-0">
          By adding a <code>.bg-gradient</code> class, a linear gradient is added as background image to the backgrounds. This gradient starts with a
          semi-transparent white which fades out to the bottom.
        </p>}>
      <div className="p-2 mb-2 bg-primary bg-gradient text-white">.bg-gradient.bg-primary</div>
      <div className="p-2 mb-2 bg-secondary bg-gradient text-white">.bg-secondary.bg-gradient</div>
      <div className="p-2 mb-2 bg-success bg-gradient text-white">.bg-success.bg-gradient</div>
      <div className="p-2 mb-2 bg-danger bg-gradient text-white">.bg-danger.bg-gradient</div>
      <div className="p-2 mb-2 bg-warning bg-gradient text-dark">.bg-warning.bg-gradient</div>
      <div className="p-2 mb-2 bg-info bg-gradient text-dark">.bg-info.bg-gradient</div>
      <div className="p-2 mb-2 bg-pink bg-gradient text-dark">.bg-pink.bg-gradient</div>
      <div className="p-2 mb-2 bg-purple bg-gradient text-dark">.bg-purple.bg-gradient</div>
      <div className="p-2 mb-2 bg-light bg-gradient text-dark">.bg-light.bg-gradient</div>
      <div className="p-2 mb-2 bg-dark bg-gradient text-white">.bg-dark.bg-gradient</div>
      <div className="p-2 mb-2 bg-black bg-gradient text-white">.bg-black.bg-gradient</div>
    </ComponentContainerCard>;
};
const SoftBackgroundColors = () => {
  return <ComponentContainerCard title="Soft background" description={<p className="text-muted mb-0">
          Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities do not set
          <code>color</code>, so in some cases you’ll want to use <code>.text-*</code>
          <a href="https://getbootstrap.com/docs/5.3/utilities/colors/">color utilities</a>
        </p>}>
      <Row>
        <div className="col-12">
          <div className="d-flex flex-column gap-2">
            <div className="bg-primary-subtle p-2">
              <code className="text-primary-emphasis">.text-primary-subtle</code>
            </div>
            <div className="bg-secondary-subtle p-2">
              <code className="text-secondary-emphasis">.bg-secondary-subtle </code>
            </div>
            <div className="bg-success-subtle p-2">
              <code className="text-success-emphasis">.bg-success-subtle</code>
            </div>
            <div className="bg-danger-subtle p-2">
              <code className="text-danger-emphasis">.bg-danger-subtle</code>
            </div>
            <div className="bg-warning-subtle p-2">
              <code className="text-warning-emphasis">.bg-warning-subtle</code>
            </div>
            <div className="bg-info-subtle p-2">
              <code className="text-info-emphasis">.bg-info-subtle</code>
            </div>
            <div className="bg-pink-subtle p-2">
              <code className="text-pink-emphasis">.bg-pink-subtle</code>
            </div>
            <div className="bg-purple-subtle p-2">
              <code className="text-purple-emphasis">.bg-purple-subtle</code>
            </div>
            <div className="bg-light-subtle p-2">
              <code className="text-light-emphasis">.bg-light-subtle</code>
            </div>
            <div className="bg-dark-subtle p-2">
              <code className="text-dark-emphasis">.bg-dark-subtle</code>
            </div>
          </div>
        </div>
      </Row>
    </ComponentContainerCard>;
};
const ColorAndBackground = () => {
  return <ComponentContainerCard title="Color & Background" description={<p className="text-muted mb-0">
          Color and background helpers combine the power of our
          <code>.text-*</code> utilities and <code>.bg-*</code> utilities in one class. Using our Sass <code>color-contrast()</code> function, we
          automatically determine a contrasting <code>color</code> for a particular
          <code>background-color</code>.
        </p>}>
      <div className="d-flex flex-column gap-2">
        <div className="text-bg-primary p-2">Primary with contrasting color (.text-bg-primary)</div>
        <div className="text-bg-secondary p-2">Secondary with contrasting color (.text-bg-secondary)</div>
        <div className="text-bg-success p-2">Success with contrasting color (.text-bg-success)</div>
        <div className="text-bg-danger p-2">Danger with contrasting color (.text-bg-danger)</div>
        <div className="text-bg-warning p-2">Warning with contrasting color (.text-bg-warning)</div>
        <div className="text-bg-info p-2">Info with contrasting color (.text-bg-info)</div>
        <div className="text-bg-light p-2">Light with contrasting color (.text-bg-light)</div>
        <div className="text-bg-dark p-2">Dark with contrasting color (.text-bg-dark)</div>
      </div>
    </ComponentContainerCard>;
};
const BackgroundOpacity = () => {
  return <ComponentContainerCard title="Background Opacity" description={<p className="text-muted mb-0">
          <code>background-color</code> utilities are generated with Sass using CSS variables. This allows for real-time color changes without
          compilation and dynamic alpha transparency changes.
        </p>}>
      <div className="text-bg-primary p-2">This is default primary background</div>
      <div className="text-bg-primary p-2 bg-opacity-75">This is 75% opacity primary background</div>
      <div className="bg-primary p-2 text-dark bg-opacity-50">This is 50% opacity primary background</div>
      <div className="bg-primary p-2 text-dark bg-opacity-25">This is 25% opacity primary background</div>
      <div className="bg-primary p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
    </ComponentContainerCard>;
};
const TextColors = () => {
  return <ComponentContainerCard title="Text Color" description={<p className="text-muted mb-0">
          Colorize text with color utilities. If you want to colorize links, you can use the <code>.link-*</code> helper classes which have
          <code>:hover</code>
          and <code>:focus</code> states.
        </p>}>
      <Row>
        <div className="col-md-6">
          <p className="text-primary">.text-primary</p>
          <p className="text-primary-emphasis">.text-primary-emphasis</p>
          <p className="text-secondary">.text-secondary</p>
          <p className="text-secondary-emphasis">.text-secondary-emphasis</p>
          <p className="text-success">.text-success</p>
          <p className="text-success-emphasis">.text-success-emphasis</p>
          <p className="text-danger">.text-danger</p>
          <p className="text-danger-emphasis">.text-danger-emphasis</p>
          <p className="text-info bg-dark">.text-info</p>
          <p className="text-info-emphasis">.text-info-emphasis</p>
          <p className="text-pink">.text-pink</p>
          <p className="text-pink-emphasis">.text-pink-emphasis</p>
          <p className="text-purple">.text-purple</p>
          <p className="text-purple-emphasis">.text-purple-emphasis</p>
          <p className="text-warning bg-dark">.text-warning</p>
          <p className="text-warning-emphasis">.text-warning-emphasis</p>
          <p className="text-light bg-dark">.text-light</p>
          <p className="text-light-emphasis">.text-light-emphasis</p>
        </div>
        <div className="col-md-6">
          <p className="text-dark">.text-dark</p>
          <p className="text-dark-emphasis">.text-dark-emphasis</p>
          <p className="text-muted">.text-muted</p>
          <p className="text-body">.text-body</p>
          <p className="text-body-emphasis">.text-body-emphasis</p>
          <p className="text-body-secondary">.text-body-secondary</p>
          <p className="text-body-tertiary">.text-body-tertiary</p>
          <p className="text-black">.text-black</p>
          <p className="text-white bg-dark">.text-white</p>
          <p className="text-black-50">.text-black-50</p>
          <p className="text-white-50 bg-dark">.text-white-50</p>
        </div>
      </Row>
    </ComponentContainerCard>;
};
const TextOpacity = () => {
  return <ComponentContainerCard title="Text Opacity Color" description={<p className="text-muted mb-0">
          text color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic
          alpha transparency changes.
        </p>}>
      <div className="text-primary">This is default primary text</div>
      <div className="text-primary text-opacity-75">This is 75% opacity primary text</div>
      <div className="text-primary text-opacity-50">This is 50% opacity primary text</div>
      <div className="text-primary text-opacity-25">This is 25% opacity primary text</div>
    </ComponentContainerCard>;
};
const OpacityVariant = () => {
  return <ComponentContainerCard title="Opacity" description={<p className="text-muted mb-0">
          The <code>opacity</code> property sets the opacity level for an element. The opacity level describes the transparency level, where
          <code>1</code> is not transparent at all, <code>.5</code> is 50% visible, and <code>0</code> is completely transparent. Set the
          <code>opacity</code> of an element using
          <code>
            .opacity-{'{'}value{'}'}
          </code>
          utilities.
        </p>}>
      <div className="d-flex flex-wrap gap-2">
        <div className="opacity-100 p-2 bg-primary text-light fw-bold rounded">100%</div>
        <div className="opacity-75 p-2 bg-primary text-light fw-bold rounded">75%</div>
        <div className="opacity-50 p-2 bg-primary text-light fw-bold rounded">50%</div>
        <div className="opacity-25 p-2 bg-primary text-light fw-bold rounded">25%</div>
      </div>
    </ComponentContainerCard>;
};
const AdditiveBorder = () => {
  return <ComponentContainerCard title="" description={<p className="text-muted mb-0">
          Use border utilities to <b>add</b> an element’s borders. Choose from all borders or one at a time.
        </p>}>
      <div className="d-flex align-items-start flex-wrap gap-4">
        <div className="text-center">
          <div className="border avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-top avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-end avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-bottom avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-start avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentContainerCard>;
};
const SubtractiveBorder = () => {
  return <ComponentContainerCard title="Subtractive(Remove) Border" description={<p className="text-muted mb-0">
          Use border utilities to <b>remove</b> an element’s borders. Choose from all borders or one at a time.
        </p>}>
      <div className="d-flex align-items-start flex-wrap gap-4">
        <div className="text-center">
          <div className="border border-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-top-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-end-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-bottom-0 avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-start-0 avatar-md bg-light bg-opacity-50"></div>
        </div>
      </div>
    </ComponentContainerCard>;
};
const BorderColors = () => {
  return <ComponentContainerCard title="Border Color" description={<p className="text-muted mb-0">Change the border color using utilities built on our theme colors.</p>}>
      <div className="d-flex align-items-start flex-wrap gap-2">
        {colorVariants.slice(0, 10).map((color, idx) => <div className="text-center" key={idx}>
            <div className={clsx(`border border-${color} avatar-md  bg-opacity-50`, {
          'bg-light': color != 'light'
        })}></div>
          </div>)}
      </div>
    </ComponentContainerCard>;
};
const BorderWidthSize = () => {
  return <ComponentContainerCard title="Border Width Size">
      <div className="d-flex align-items-start flex-wrap gap-2">
        {[1, 2, 3, 4, 5].map((size, idx) => <div className="text-center" key={idx}>
            <div className={`border border-${size} avatar-md bg-light bg-opacity-50`} />
          </div>)}
      </div>
    </ComponentContainerCard>;
};
const BorderOpacity = () => {
  return <ComponentContainerCard title="Border Opacity" description={<p className="text-muted mb-0">
          choose from any of the <code>.border-opacity</code>
          utilities:
        </p>}>
      <div className="border border-success p-2 mb-2">This is default success border</div>
      <div className="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
      <div className="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
      <div className="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
      <div className="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
    </ComponentContainerCard>;
};
const BorderSubtleColor = () => {
  return <ComponentContainerCard title="Border subtle Color" description={<p className="text-muted mb-0">Change the border color using utilities built on our theme colors.</p>}>
      <div className="d-flex align-items-start flex-wrap gap-2">
        {colorVariants.slice(0, 10).map((color, idx) => <div className="text-center" key={idx}>
            <div className={clsx(`border border-${color}-subtle avatar-md  bg-opacity-50`, {
          'bg-light': color != 'light'
        })}></div>
          </div>)}
      </div>
    </ComponentContainerCard>;
};
const BorderRadius = () => {
  return <ComponentContainerCard title="Border Radius" description={<p className="text-muted mb-0">Add classes to an element to easily round its corners.</p>}>
      <div className="d-flex align-items-start flex-wrap gap-2">
        <img src={avatar2} className="avatar-lg rounded" alt="rounded" />
        <img src={avatar2} className="avatar-lg rounded-top" alt="rounded-top" />
        <img src={avatar2} className="avatar-lg rounded-end" alt="rounded-end" />
        <img src={avatar2} className="avatar-lg rounded-bottom" alt="rounded-bottom" />
        <img src={avatar2} className="avatar-lg rounded-start" alt="rounded-start" />
        <img src={avatar2} className="avatar-lg rounded-circle" alt="rounded-circle" />
        <img src={small2} className="avatar-lg w-auto rounded-pill" alt="rounded-pill" />
      </div>
    </ComponentContainerCard>;
};
const BorderRadiusSize = () => {
  return <ComponentContainerCard title="Border Radius Size" description={<p className="text-muted mb-0">
          Use the scaling classes for larger or smaller rounded corners. Sizes range from <code>0</code> to <code>5</code>.
        </p>}>
      <div className="d-flex align-items-start flex-wrap gap-2">
        <img src={avatar4} className="avatar-lg rounded-0" alt="rounded-0" />
        <img src={avatar4} className="avatar-lg rounded-1" alt="rounded-1" />
        <img src={avatar4} className="avatar-lg rounded-2" alt="rounded-2" />
        <img src={avatar4} className="avatar-lg rounded-3" alt="rounded-3" />
        <img src={avatar4} className="avatar-lg rounded-4" alt="rounded-4" />
        <img src={avatar4} className="avatar-lg rounded-5" alt="rounded-5" />
      </div>
    </ComponentContainerCard>;
};
const TextSelection = () => {
  return <ComponentContainerCard title="Text Selection" description={<p className="text-muted mb-0">
          Use <code>user-select-all</code>,<code>user-select-auto</code>, or
          <code>user-select-none</code> class to the content which is selected when the user interacts with it.
        </p>}>
      <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
      <p className="user-select-auto">This paragraph has default select behavior.</p>
      <p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
    </ComponentContainerCard>;
};
const PointerEvents = () => {
  return <ComponentContainerCard title="Pointer Events" description={<p className="text-muted mb-0">
          Bootstrap provides <code>.pe-none</code> and
          <code>.pe-auto</code> classes to prevent or add element interactions.
        </p>}>
      <p>
        <Link to="" className="pe-none" tabIndex={-1} aria-disabled="true">
          This link
        </Link>
        can not be clicked.
      </p>
      <p>
        <Link to="" className="pe-auto">
          This link
        </Link>
        can be clicked (this is default behavior).
      </p>
      <p className="pe-none">
        <Link to="" tabIndex={-1} aria-disabled="true">
          This link
        </Link>
        can not be clicked because the
        <code>pointer-events</code> property is inherited from its parent. However,
        <Link to="" className="pe-auto">
          this link
        </Link>
        has a <code>pe-auto</code> class and can be clicked.
      </p>
    </ComponentContainerCard>;
};
const Overflow = () => {
  return <ComponentContainerCard title="Overflow" description={<p className="text-muted mb-0">
          Adjust the <code>overflow</code> property on the fly with four default values and classes. These classes are not responsive by default.
        </p>}>
      <div className="d-flex flex-wrap gap-4">
        <div className="overflow-auto p-3 bg-light" style={{
        maxWidth: 260,
        maxHeight: 100
      }}>
          This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will
          vertically scroll.
        </div>
        <div className="overflow-hidden p-3 bg-light" style={{
        maxWidth: 260,
        maxHeight: 100
      }}>
          This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
        </div>
        <div className="overflow-visible p-3 bg-light" style={{
        maxWidth: 260,
        maxHeight: 100
      }}>
          This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.
        </div>
        <div className="overflow-scroll p-3 bg-light" style={{
        maxWidth: 260,
        maxHeight: 100
      }}>
          This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
        </div>
      </div>
    </ComponentContainerCard>;
};
const PositionInArrange = () => {
  return <ComponentContainerCard title="Position in Arrange" description={<p className="text-muted mb-0">
          Arrange elements easily with the edge positioning utilities. The format is
          <code>
            {'{'}property{'}'}-{'{'}position{'}'}
          </code>
          .
        </p>}>
      <div className="position-relative p-5 bg-light bg-opacity-50 m-3 border rounded" style={{
      height: 180
    }}>
        <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
        <div className="position-absolute top-50 start-50 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentContainerCard>;
};
const PositionInCenter = () => {
  return <ComponentContainerCard title="Position in Center" description={<p className="text-muted mb-0">
          In addition, you can also center the elements with the transform utility class <code>.translate-middle</code>.
        </p>}>
      <div className="position-relative m-3 bg-light bg-opacity-50 border rounded" style={{
      height: 180
    }}>
        <div className="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentContainerCard>;
};
const PositionInAxis = () => {
  return <ComponentContainerCard title="Position in Axis" description={<p className="text-muted mb-0">
          By adding <code>.translate-middle-x</code> or
          <code>.translate-middle-y</code> classes, elements can be positioned only in horizontal or vertical direction.
        </p>}>
      <div className="position-relative m-3 bg-light border rounded" style={{
      height: 180
    }}>
        <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
        <div className="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
        <div className="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentContainerCard>;
};
const Shadows = () => {
  return <ComponentContainerCard title="Shadows" description={<p className="text-muted mb-0">
          While shadows on components are disabled by default in Bootstrap and can be enabled via
          <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our <code>box-shadow</code> utility classes. Includes support
          for <code>.shadow-none</code> and three default sizes (which have associated variables to match).
        </p>}>
      <div className="shadow-none p-2 mb-2 bg-light rounded">No shadow</div>
      <div className="shadow-sm p-2 mb-2 rounded">Small shadow</div>
      <div className="shadow p-2 mb-2 rounded">Regular shadow</div>
      <div className="shadow-lg p-2 mb-2 rounded">Larger shadow</div>
    </ComponentContainerCard>;
};
const Width = () => {
  return <ComponentContainerCard title="Width" description={<p className="text-muted mb-0">
          Width utilities are generated from the utility API in
          <code>_utilities.scss</code>. Includes support for
          <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and
          <code>auto</code> by default. Modify those values as you need to generate different utilities here.
        </p>}>
      <div className="w-25 p-2 bg-light">Width 25%</div>
      <div className="w-50 p-2 bg-light">Width 50%</div>
      <div className="w-75 p-2 bg-light">Width 75%</div>
      <div className="w-100 p-2 bg-light">Width 100%</div>
      <div className="w-auto p-2 bg-light">Width auto</div>
    </ComponentContainerCard>;
};
const Height = () => {
  return <ComponentContainerCard title="Height" description={<p className="text-muted mb-0">
          Height utilities are generated from the utility API in <code>_utilities.scss</code>. Includes support for
          <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and
          <code>auto</code> by default. Modify those values as you need to generate different utilities here.
        </p>}>
      <div className="d-flex flex-wrap gap-3 align-items-start" style={{
      height: 255
    }}>
        <div className="h-25 p-2 bg-light">Height25%</div>
        <div className="h-50 p-2 bg-light">Height50%</div>
        <div className="h-75 p-2 bg-light">Height75%</div>
        <div className="h-100 p-2 bg-light">Height100%</div>
        <div className="h-auto p-2 bg-light">Height auto</div>
      </div>
    </ComponentContainerCard>;
};
const ObjectFit = () => {
  return <ComponentContainerCard title="Object fit" description={<p className="text-muted mb-0">
          Change the value of the
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">
            <code>object-fit</code>
            property
          </a>
          with our responsive <code>object-fit</code> utility classes. This property tells the content to fill the parent container in a variety of
          ways, such as preserving the aspect ratio or stretching to take up as much space as possible.
        </p>}>
      <div className="d-flex align-items-start flex-wrap gap-3 text-center">
        <div>
          <img src={small1} className="object-fit-contain border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-contain</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-cover border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-cover</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-fill border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-fill</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-scale border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-scale</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-none border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-none</code>
          </p>
        </div>
      </div>
    </ComponentContainerCard>;
};
const ObjectFit2 = () => {
  return <ComponentContainerCard title="Object fit" description={<p className="text-muted mb-0">
          Change the value of the
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">
            <code>object-fit</code>
            property
          </a>
          with our responsive <code>object-fit</code> utility classes. This property tells the content to fill the parent container in a variety of
          ways, such as preserving the aspect ratio or stretching to take up as much space as possible.
        </p>}>
      <div className="position-relative" style={{
      height: 220,
      zIndex: 1
    }}>
        <div className="z-3 position-absolute p-5 rounded-3 bg-primary-subtle" />
        <div className="z-2 position-absolute p-5 m-2 rounded-3 bg-success-subtle"></div>
        <div className="z-1 position-absolute p-5 m-3 rounded-3 bg-secondary-subtle"></div>
        <div className="z-0 position-absolute p-5 m-4 rounded-3 bg-danger-subtle" />
        <div className="z-n1 position-absolute p-5 m-5 rounded-3 bg-info-subtle" />
      </div>
    </ComponentContainerCard>;
};
const Utilities = () => {
  return <>
      <PageTitle title="Utilities" />
      <Row>
        <Col xl={12}>
          <BackgroundColors />
        </Col>
        <Col xl={12}>
          <BackgroundGradientColors />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SoftBackgroundColors />
        </Col>
        <Col xl={12}>
          <ColorAndBackground />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <BackgroundOpacity />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <TextColors />
        </Col>
        <Row>
          <Col xl={12}>
            <TextOpacity />
          </Col>
          <Col xl={12}>
            <OpacityVariant />
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <AdditiveBorder />
          </Col>
        </Row>
        <Col xl={12}>
          <SubtractiveBorder />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <BorderColors />
          <BorderWidthSize />
        </Col>
        <Col xl={12}>
          <BorderOpacity />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <BorderSubtleColor />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <BorderRadius />
        </Col>
        <Col xl={12}>
          <BorderRadiusSize />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <TextSelection />
        </Col>
        <Col xl={12}>
          <PointerEvents />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <Overflow />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <PositionInArrange />
        </Col>
        <Col xl={12}>
          <PositionInCenter />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <PositionInAxis />
        </Col>
        <Col xl={12}>
          <Shadows />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <Width />
        </Col>
        <Col xl={12}>
          <Height />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <ObjectFit />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <ObjectFit2 />
        </Col>
      </Row>
    </>;
};
export default Utilities;
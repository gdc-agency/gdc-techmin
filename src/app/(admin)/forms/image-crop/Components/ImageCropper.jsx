import Cropper from 'react-cropper';
import { Card, CardBody, Col, FormControl, Row } from 'react-bootstrap';
import { useRef, useState } from 'react';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import smallImg1 from '@/assets/images/small/small-1.jpg';
import 'cropperjs/dist/cropper.css';
const ImageCropper = () => {
  const [getData, setGetData] = useState();
  const [cropX, setCropX] = useState(0);
  const [cropY, setCropY] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageRotate, setImageRotate] = useState(0);
  const [scaleX, setScaleX] = useState(0);
  const [scaleY, setScaleY] = useState(0);
  const cropperRef = useRef(null);
  const cropper = cropperRef.current?.cropper;
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    const ImageX = Math.ceil(cropper?.getData().x ?? 0);
    const ImageY = Math.ceil(cropper?.getData().y ?? 0);
    const ImageWidth = Math.ceil(cropper?.getImageData().width ?? 0);
    const ImageHeight = Math.ceil(cropper?.getImageData().height ?? 0);
    const ImageRotate = Math.ceil(cropper?.getImageData().rotate ?? 0);
    const ScaleX = Math.ceil(cropper?.getImageData().scaleX ?? 0);
    const ScaleY = Math.ceil(cropper?.getImageData().scaleY ?? 0);
    setCropX(ImageX);
    setCropY(ImageY);
    setImageWidth(ImageWidth);
    setImageHeight(ImageHeight);
    setImageRotate(ImageRotate);
    setScaleX(ScaleX);
    setScaleY(ScaleY);
  };
  return <>
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Row>
                <Col lg={9}>
                  <div className="img-container">
                    <Cropper src={smallImg1} style={{
                    height: 600,
                    width: '100%'
                  }} initialAspectRatio={16 / 9} dragMode="move" guides={false} crop={onCrop} preview=".img-preview" ref={cropperRef} rotatable />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="image-crop-preview clearfix">
                    <div className="img-preview preview-lg rounded" />
                    <div className="img-preview preview-md rounded" />
                    <div className="img-preview preview-sm rounded" />
                    <div className="img-preview preview-xs rounded" />
                  </div>
                  <div className="docs-data">
                    <div className="input-group mt-2">
                      <span className="input-group-text">X</span>
                      <input type="text" value={cropX} className="form-control" id="dataX" placeholder="x" readOnly />
                      <span className="input-group-text">px</span>
                    </div>
                    <div className="input-group mt-2">
                      <span className="input-group-text">Y</span>
                      <input type="text" className="form-control" value={cropY} id="dataY" placeholder="y" readOnly />
                      <span className="input-group-text">px</span>
                    </div>
                    <div className="input-group mt-2">
                      <span className="input-group-text">Width</span>
                      <input type="text" className="form-control" value={imageWidth} id="dataWidth" placeholder="width" readOnly />
                      <span className="input-group-text">px</span>
                    </div>
                    <div className="input-group mt-2">
                      <span className="input-group-text">Height</span>
                      <input type="text" className="form-control" value={imageHeight} id="dataHeight" placeholder="height" readOnly />
                      <span className="input-group-text">px</span>
                    </div>
                    <div className="input-group mt-2">
                      <span className="input-group-text">Rotate</span>
                      <input type="text" className="form-control" value={imageRotate} id="dataRotate" placeholder="rotate" readOnly />
                      <span className="input-group-text">deg</span>
                    </div>
                    <div className="input-group mt-2">
                      <span className="input-group-text">ScaleX</span>
                      <input type="text" className="form-control" value={scaleX} id="dataScaleX" placeholder="scaleX" readOnly />
                    </div>
                    <div className="input-group mt-2">
                      <span className="input-group-text">ScaleY</span>
                      <input type="text" className="form-control" value={scaleY} id="dataScaleY" placeholder="scaleY" readOnly />
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Row>
                <Col lg={9} className="img-crop-preview-btns docs-buttons">
                  <div className="btn-group">
                    <button type="button" className="btn btn-secondary btn-sm" data-method="setDragMode" data-option="move" title="Move">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("setDragMode", "move")'>
                        <IconifyIcon icon="mdi:cursor-move" />
                      </span>
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" data-method="setDragMode" data-option="crop" title="Crop">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("setDragMode", "crop")'>
                        <IconifyIcon icon="mdi:crop" />
                      </span>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => cropper.zoom(0.1)} title="Zoom In">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("zoom", 0.1)'>
                        <IconifyIcon icon="mdi:magnify-plus-outline" />
                      </span>
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => cropper.zoom(-0.1)} data-method="zoom" data-option="-0.1" title="Zoom Out">
                      <IconifyIcon icon="mdi:magnify-minus-outline" data-bs-toggle="tooltip" data-bs-animation="false" />
                    </button>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-secondary btn-sm" data-method="move" onClick={() => cropper.move(-10, 0)} data-option={-10} data-second-option={0} title="Move Left">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("move", -10, 0)'>
                        <IconifyIcon icon="mdi:arrow-left" />
                      </span>
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" data-method="move" data-option={10} onClick={() => cropper.move(10, 0)} data-second-option={0} title="Move Right">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("move", 10, 0)'>
                        <IconifyIcon icon="mdi:arrow-right" />
                      </span>
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" data-method="move" data-option={0} onClick={() => cropper.move(0, -10)} data-second-option={-10} title="Move Up">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("move", 0, -10)'>
                        <IconifyIcon icon="mdi:arrow-up" />
                      </span>
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" data-method="move" data-option={0} onClick={() => cropper.move(0, 10)} data-second-option={10} title="Move Down">
                      <IconifyIcon icon="mdi:arrow-down" data-bs-toggle="tooltip" data-bs-animation="false" />
                    </button>
                  </div>
                  <div className="btn-group">
                    <button type="button" onClick={() => cropper.rotate(-45)} className="btn btn-secondary btn-sm" data-method="rotate" data-option={-45} title="Rotate Left">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("rotate", -45)'>
                        <IconifyIcon icon="mdi:rotate-left" />
                      </span>
                    </button>
                    <button type="button" onClick={() => cropper.rotate(45)} className="btn btn-secondary btn-sm" data-method="rotate" data-option={45} title="Rotate Right">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("rotate", 45)'>
                        <IconifyIcon icon="mdi:rotate-right" />
                      </span>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button type="button" onClick={() => cropper.scaleX(-1)} className="btn btn-secondary btn-sm" data-method="scaleX" data-option={-1} title="Flip Horizontal">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("scaleX", -1)'>
                        <IconifyIcon icon="mdi:arrow-left-right" />
                      </span>
                    </button>
                    <button type="button" onClick={() => cropper.scaleY(-1)} className="btn btn-secondary btn-sm" data-method="scaleY" data-option={-1} title="Flip Vertical">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("scaleY", -1)'>
                        <IconifyIcon icon="mdi:arrow-up-down" />
                      </span>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button type="button" onClick={() => cropper.crop()} className="btn btn-secondary btn-sm" data-method="crop" title="Crop">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("crop")'>
                        <IconifyIcon icon="mdi:check" />
                      </span>
                    </button>
                    <button type="button" onClick={() => cropper.clear()} className="btn btn-secondary btn-sm" data-method="clear" title="Clear">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("clear")'>
                        <IconifyIcon icon="mdi:close" />
                      </span>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button type="button" onClick={() => cropper.disable()} className="btn btn-secondary btn-sm" data-method="disable" title="Disable">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("disable")'>
                        <IconifyIcon icon="mdi:lock-outline" />
                      </span>
                    </button>
                    <button type="button" onClick={() => cropper.enable()} className="btn btn-secondary btn-sm" data-method="enable" title="Enable">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("enable")'>
                        <IconifyIcon icon="mdi:lock-open-variant-outline" />
                      </span>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button type="button" onClick={() => cropper.reset()} className="btn btn-secondary btn-sm" data-method="reset" title="Reset">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("reset")'>
                        <IconifyIcon icon="mdi:sync" />
                      </span>
                    </button>
                    <label className="btn btn-secondary mb-0 btn-upload btn-sm" htmlFor="inputImage" title="Upload image file">
                      <input type="file" className="visually-hidden" id="inputImage" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" />
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title="Import image with Blob URLs">
                        <IconifyIcon icon="mdi:upload" />
                      </span>
                    </label>
                    <button type="button" onClick={() => cropper.destroy()} className="btn btn-danger btn-sm" data-method="destroy" title="Destroy">
                      <span className="docs-tooltip" data-bs-toggle="tooltip" data-bs-animation="false" title='$().cropper("destroy")'>
                        <IconifyIcon icon="mdi:power" />
                      </span>
                    </button>
                  </div>
                  <br />

                  <button type="button" className="btn btn-primary btn-sm" onClick={() => setGetData(cropper?.imageData)}>
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getData")'>
                      Get Data
                    </span>
                  </button>
                  <button type="button" onClick={() => setGetData(cropper?.containerData)} className="btn btn-primary btn-sm" data-method="getContainerData" data-option data-target="#putData">
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getContainerData")'>
                      Get Container Data
                    </span>
                  </button>
                  <button type="button" onClick={() => setGetData(cropper?.imageData)} className="btn btn-primary btn-sm" data-method="getImageData" data-option data-target="#putData">
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getImageData")'>
                      Get Image Data
                    </span>
                  </button>
                  <button type="button" onClick={() => setGetData(cropper?.canvasData)} className="btn btn-primary btn-sm" data-method="getCanvasData" data-option data-target="#putData">
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getCanvasData")'>
                      Get Canvas Data
                    </span>
                  </button>
                  <button type="button" onClick={() => setGetData(cropper?.cropBoxData)} className="btn btn-primary btn-sm" data-method="getCropBoxData" data-option data-target="#putData">
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getCropBoxData")'>
                      Get Crop Box Data
                    </span>
                  </button>
                  <button type="button" onClick={() => cropper.moveTo(0)} className="btn btn-primary btn-sm" data-method="moveTo" data-option={0}>
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title="cropper.moveTo(0)">
                      Move to [0,0]
                    </span>
                  </button>
                  <button type="button" onClick={() => cropper.zoomTo(1)} className="btn btn-primary btn-sm" data-method="zoomTo" data-option={1}>
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title="cropper.zoomTo(1)">
                      Zoom to 100%
                    </span>
                  </button>
                  <button type="button" onClick={() => cropper.rotate(180)} className="btn btn-primary btn-sm" data-method="rotateTo" data-option={180}>
                    <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title="cropper.rotateTo(180)">
                      Rotate 180°
                    </span>
                  </button>
                  <button type="button" onClick={() => cropper.scale(-2, -1)} className="btn btn-primary btn-sm" data-method="scale" data-option={-2} data-second-option={-1}>
                    <span className="docs-tooltip" data-bs-toggle="tooltip" title="cropper.scale(-2, -1)">
                      Scale (-2, -1)
                    </span>
                  </button>
                  <FormControl as="textarea" id="putData" rows={3} placeholder="Get data to here or set data with this value" value={JSON.stringify(getData)} />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default ImageCropper;
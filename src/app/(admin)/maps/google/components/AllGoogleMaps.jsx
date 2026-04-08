import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageTitle from '@/components/PageTitle';
import { GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Map, Marker, Polyline } from 'google-maps-react';
import { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
const BasicMap = ({
  google
}) => {
  return <ComponentContainerCard title="Basic Google Map">
      <div className="gmaps  position-relative">
        <Map google={google} zoom={14} initialCenter={{
        lat: 21.569874,
        lng: 71.5893798
      }} style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }} zoomControlOptions={{
        position: google.maps.ControlPosition.LEFT_TOP
      }} />
      </div>
    </ComponentContainerCard>;
};
const MapWithMarkers = ({
  google
}) => {
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  };

  // handles operation on marker click
  const onBasicMarkerClick = () => {
    alert('You clicked in this marker');
  };

  // handles operation on marker click
  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
    setShowingInfoWindow(true);
  };
  return <ComponentContainerCard title="Markers Google Map">
      <div id="gmaps-markers" className="gmaps  position-relative">
        <Map google={google} zoom={18} initialCenter={{
        lat: 21.569874,
        lng: 71.5893798
      }} style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }} zoomControlOptions={{
        position: google.maps.ControlPosition.LEFT_TOP
      }}>
          <Marker title={'This is sweet home.'} name={'Home sweet home!'} position={{
          lat: 21.569874,
          lng: 71.5893798
        }} onClick={onBasicMarkerClick}></Marker>

          <Marker name="Current location" title={'Marker with InfoWindow'} position={{
          lat: 21.56969,
          lng: 71.5893798
        }} onClick={onMarkerClick}></Marker>
          <InfoWindow marker={activeMarker} onClose={onInfoWindowClose} visible={showingInfoWindow}>
            <div>
              <p>{selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    </ComponentContainerCard>;
};
const StreetViewMap = ({
  google
}) => {
  let mapRef = useRef();

  /**
   * Activate the street view
   */
  const activateStreetView = position => {
    if (mapRef) {
      const mapObj = mapRef.map.getStreetView();
      mapObj.setPov({
        heading: 34,
        pitch: 10
      });
      mapObj.setPosition(position);
      mapObj.setVisible(true);
    }
  };
  return <ComponentContainerCard title="Street View Panoramas Google Map">
      <div id="panorama" className="gmaps position-relative">
        <Map google={google} ref={map => mapRef = map} zoom={14} initialCenter={{
        lat: 40.7295174,
        lng: -73.9986496
      }} style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }} streetViewControl={true} onReady={() => {
        activateStreetView({
          lat: 40.7295174,
          lng: -73.9986496
        });
      }} />
      </div>
    </ComponentContainerCard>;
};
const PolyLineMap = ({
  google
}) => {
  const polyline = [{
    lat: 37.789411,
    lng: -122.422116
  }, {
    lat: 37.785757,
    lng: -122.421333
  }, {
    lat: 37.789352,
    lng: -122.415346
  }];
  return <ComponentContainerCard title="Google Map Types">
      <div id="panorama" className="gmaps position-relative">
        <Map className="map" google={google} style={{
        height: '100%',
        position: 'relative',
        width: '100%'
      }} zoom={14} zoomControlOptions={{
        position: google.maps.ControlPosition.LEFT_TOP
      }}>
          <Polyline fillColor="#0000FF" fillOpacity={0.35} path={polyline} strokeColor="#0000FF" strokeOpacity={0.8} strokeWeight={2} />
        </Map>
      </div>
    </ComponentContainerCard>;
};
const LightStyledMap = ({
  google
}) => {
  const mapStyles = [{
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      color: '#e9e9e9'
    }, {
      lightness: 17
    }]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{
      color: '#f5f5f5'
    }, {
      lightness: 20
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#ffffff'
    }, {
      lightness: 17
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#ffffff'
    }, {
      lightness: 29
    }, {
      weight: 0.2
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      color: '#ffffff'
    }, {
      lightness: 18
    }]
  }, {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{
      color: '#ffffff'
    }, {
      lightness: 16
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
      color: '#f5f5f5'
    }, {
      lightness: 21
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#dedede'
    }, {
      lightness: 21
    }]
  }, {
    elementType: 'labels.text.stroke',
    stylers: [{
      visibility: 'on'
    }, {
      color: '#ffffff'
    }, {
      lightness: 16
    }]
  }, {
    elementType: 'labels.text.fill',
    stylers: [{
      saturation: 36
    }, {
      color: '#333333'
    }, {
      lightness: 40
    }]
  }, {
    elementType: 'labels.icon',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{
      color: '#f2f2f2'
    }, {
      lightness: 19
    }]
  }, {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#fefefe'
    }, {
      lightness: 20
    }]
  }, {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#fefefe'
    }, {
      lightness: 17
    }, {
      weight: 1.2
    }]
  }];
  return <ComponentContainerCard title="Ultra Light with Labels">
      <div id="panorama" className="gmaps position-relative">
        <Map google={google} initialCenter={{
        lat: -12.043333,
        lng: -77.028333
      }} style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }} styles={mapStyles} zoomControlOptions={{
        position: google.maps.ControlPosition.LEFT_TOP
      }} />
      </div>
    </ComponentContainerCard>;
};
const DarkStyledMap = ({
  google
}) => {
  const mapStyles = [{
    featureType: 'all',
    elementType: 'labels',
    stylers: [{
      visibility: 'on'
    }]
  }, {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{
      saturation: 36
    }, {
      color: '#000000'
    }, {
      lightness: 40
    }]
  }, {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{
      visibility: 'on'
    }, {
      color: '#000000'
    }, {
      lightness: 16
    }]
  }, {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 20
    }]
  }, {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 17
    }, {
      weight: 1.2
    }]
  }, {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#e5c163'
    }]
  }, {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#c4c4c4'
    }]
  }, {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#e5c163'
    }]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 20
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 21
    }, {
      visibility: 'on'
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'geometry',
    stylers: [{
      visibility: 'on'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#e5c163'
    }, {
      lightness: '0'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#ffffff'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#e5c163'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 18
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#575757'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#ffffff'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#2c2c2c'
    }]
  }, {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 16
    }]
  }, {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#999999'
    }]
  }, {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 19
    }]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      color: '#000000'
    }, {
      lightness: 17
    }]
  }];
  return <ComponentContainerCard title="Dark">
      <div id="panorama" className="gmaps position-relative">
        <Map google={google} initialCenter={{
        lat: -12.043333,
        lng: -77.028333
      }} style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }} styles={mapStyles} zoomControlOptions={{
        position: google.maps.ControlPosition.LEFT_TOP
      }} />
      </div>
    </ComponentContainerCard>;
};
const AllGoogleMaps = ({
  google
}) => {
  return <>
      <PageTitle title="Google Maps" />
      <Row>
        <Col xl={6}>
          <BasicMap google={google} />
        </Col>
        <Col xl={6}>
          <MapWithMarkers google={google} />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <StreetViewMap google={google} />
        </Col>
        <Col xl={6}>
          <PolyLineMap google={google} />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <LightStyledMap google={google} />
        </Col>
        <Col xl={6}>
          <DarkStyledMap google={google} />
        </Col>
      </Row>
    </>;
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA'
})(AllGoogleMaps);
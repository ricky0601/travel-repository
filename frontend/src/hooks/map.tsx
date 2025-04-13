import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
    const s_lat = 33.507233;
    const s_lng = 126.493416;

    return (
    <>
        <Map level={8} center={{ lat: s_lat, lng: s_lng }} style={{ width: '100%', height: '100vh' }}>
            <MapMarker position={{ lat: s_lat, lng: s_lng }}></MapMarker>
        </Map>
    </>
    );
};

export default KakaoMap;
import { PlaceBoxWrap, PlaceBoxTitle, PlaceBoxArea, PlaceList } from "./placeBox.style";
import { Place } from './util';

interface PlaceBoxProps {
    places: Place[];
}

const PlaceBox: React.FC<PlaceBoxProps> = ({ places }) => {
    return(
        <PlaceBoxWrap className="placeBox">
            <PlaceBoxTitle>장소보관함</PlaceBoxTitle>
            <PlaceBoxArea>
                {places.length > 0 ? (
                    <ul>
                        {places.map((place, index) => (
                            <PlaceList key={`${index}-${place.name}`}>
                                <img src={place.img} alt={place.name} width="50" />
                                <div>
                                    <p>{place.name}</p>
                                    <p style={{ fontSize: '0.8em', color: '#666' }}>{place.address}</p>
                                </div>
                                {/* 삭제 기능 추가해야함 */}
                            </PlaceList>
                        ))}
                    </ul>
                ) : (
                    <p style={{ textAlign: 'center', color: '#999', marginTop: '20px' }}>보관된 장소가 없습니다.</p>
                )}
            </PlaceBoxArea>
        </PlaceBoxWrap>
    )
}

export default PlaceBox;

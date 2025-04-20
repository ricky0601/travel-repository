import { PlaceBoxWrap, PlaceBoxTitle, PlaceBoxArea } from "./placeBox.style";

const PlaceBox = () => {
    return(
        <PlaceBoxWrap className="placeBox">
            <PlaceBoxTitle>장소보관함</PlaceBoxTitle>
            <PlaceBoxArea></PlaceBoxArea>
        </PlaceBoxWrap>
    )
}

export default PlaceBox;
import PlaceBox from "./placeBox";
import Schedules from "./schedules";
import Search from "./search";
import { UtilWrap } from "./util.style";

const Util = () => {
    return (
        <UtilWrap>
            <Search />
            <PlaceBox />
            <Schedules numberOfDays={3} />
        </UtilWrap>
    )
}

export default Util;
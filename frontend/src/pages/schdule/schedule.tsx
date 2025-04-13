import * as S from "./schedule.style.ts";
import Logo from "../../hooks/logo.tsx";
import KakaoMap from "../../hooks/map.tsx";
import Button from "../../hooks/button.tsx";
import Util from "../../hooks/util.tsx";
import { ButtonWrap } from "../../hooks/button.style.ts";

const Schedule = () => {

	return (
	<S.Container id="schedule">
		<S.Header>
			<Logo />
			<ButtonWrap>
				<Button value="닫기" />
				<Button value="편집" />
				<Button value="저장" className="submit" />
			</ButtonWrap>
		</S.Header>
		<main>
			<Util />
		</main>
		<KakaoMap />
	</S.Container>
	);
};
export default Schedule;

import { useState } from 'react';
import * as S from "./schedule.style.ts";
import Logo from "../../hooks/logo.tsx";
import KakaoMap from "../../hooks/map.tsx";
import Button from "../../hooks/button.tsx";
import Utils from "../../hooks/utils.tsx";
import { ButtonWrap } from "../../hooks/button.style.ts";

const Schedule = () => {
	const [isUtilsVisible, setIsUtilsVisible] = useState(true);

	const handleSaveButton = () => {
		if(confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')){
			window.location.href = '/login';
		}
	}

	const handleToggleUtils = () => {
		setIsUtilsVisible(prev => !prev);
	}

	return (
	<S.Container id="schedule">
		<S.Header>
			<Logo />
			<ButtonWrap>
				<Button
					value={isUtilsVisible ? "닫기" : "열기"}
					onClick={handleToggleUtils}
				/>
				<Button value="편집" />
				<Button value="저장" className="submit" onClick={handleSaveButton} />
			</ButtonWrap>
		</S.Header>
		<main>
			{isUtilsVisible && <Utils />}
		</main>
		<KakaoMap />
	</S.Container>
	);
};
export default Schedule;

// import React from 'react';
import * as S from "./schedule.style.ts";
import Logo from "../../components/logo.tsx";
import Button from "../../components/button";
import { UtilWrap } from "../../components/util.style.ts";
import { ButtonWrap } from "../../components/button.style.ts";


const Schedule = () => {

	const handleClick = () => {
		console.log("Button clicked!");
	};

	return (
	<S.Container id="schedule">
		<S.Header>
			<Logo />
			<ButtonWrap>
				<Button value="닫기" onClick={handleClick} />
				<Button value="편집"/>
				<Button value="저장" className="submit" />
			</ButtonWrap>
		</S.Header>
		<main>
			<UtilWrap>
				유틸
			</UtilWrap>
		</main>
	</S.Container>
	);
};
export default Schedule;

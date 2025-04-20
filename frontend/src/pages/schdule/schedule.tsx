// c:\github\travel-repository\frontend\src\pages\schdule\schedule.tsx
import { useState, useEffect, useRef } from 'react';
import * as S from "./schedule.style.ts";
import Logo from "../../hooks/logo.tsx";
import KakaoMap from "../../hooks/map.tsx";
import Button from "../../hooks/button.tsx";
import Utils from "../../hooks/utils.tsx";
import { ButtonWrap } from "../../hooks/button.style.ts";
import Schedules from '../../hooks/schedules.tsx';
import { DragBarStyle } from '../../hooks/utils.style'; // 경로 확인
import DragBar from '../../assets/dragBar.svg?react'; // 경로 확인

const Schedule = () => {
	const [isUtilsVisible, setIsUtilsVisible] = useState(true);
	const [utilsWidth, setUtilsWidth] = useState<number | string>(1400); // 초기 너비 설정
	const utilsContainerRef = useRef<HTMLDivElement>(null);
	const dragBarRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef<boolean>(false);

	const minWidth = 100;
	const maxWidth = 1900;
	const hideThresholdWidth = 324;

	useEffect(() => {
		// 드래그 관련 요소들이 있는지 확인
		const dragBarElement = dragBarRef.current;
		const containerElement = utilsContainerRef.current;

		// 요소가 없으면 로직 실행 중단
		if (!dragBarElement || !containerElement) return;

		const handleMouseMove = (e: MouseEvent) => {
			if (isDragging.current) {
				// getBoundingClientRect()를 사용하여 더 정확한 위치 계산
				let newWidth = e.clientX - containerElement.getBoundingClientRect().left;
				newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
				setUtilsWidth(newWidth);
			}
		};

		const handleMouseUp = () => {
			if (isDragging.current) {
				isDragging.current = false;
				document.body.style.cursor = 'default';
				window.removeEventListener("mousemove", handleMouseMove);
				window.removeEventListener("mouseup", handleMouseUp);
			}
		};

		const handleMouseDown = (e: MouseEvent) => {
			e.preventDefault();
			isDragging.current = true;
			document.body.style.cursor = 'col-resize';
			window.addEventListener("mousemove", handleMouseMove);
			window.addEventListener("mouseup", handleMouseUp);
		};

		// 드래그 바에 이벤트 리스너 추가
		dragBarElement.addEventListener("mousedown", handleMouseDown);

		// 클린업 함수: 컴포넌트 언마운트 시 리스너 제거
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
			// dragBarElement가 unmount될 수도 있으므로, 클린업 시점에도 확인
			if (dragBarElement) {
				dragBarElement.removeEventListener("mousedown", handleMouseDown);
			}
			// 드래그 중 언마운트될 경우 커서 복원
			if (isDragging.current) {
				document.body.style.cursor = 'default';
			}
		};
		// isUtilsVisible 의존성 제거: 드래그 바는 항상 존재하므로 토글 상태와 무관하게 리스너 관리
	}, [minWidth, maxWidth]); // containerElement, dragBarElement는 ref이므로 의존성 배열에 불필요

	const handleSaveButton = () => {
		if(confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')){
			window.location.href = '/login';
		}
	}

	const handleToggleUtils = () => {
		setIsUtilsVisible(prev => !prev);
		// 너비 복원 로직은 그대로 유지 (선택 사항)
		// if (!isUtilsVisible) {
		// 	setUtilsWidth(1400);
		// }
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
		<S.Main>
			{/* ResizableContainer와 DragBar는 항상 렌더링 */}
			<S.ResizableContainer ref={utilsContainerRef} style={{ width: typeof utilsWidth === 'number' ? `${utilsWidth}px` : utilsWidth }}>
				{/* isUtilsVisible 상태에 따라 Utils 컴포넌트만 조건부 렌더링 */}
				{isUtilsVisible && (
					<Utils currentWidth={utilsWidth} hideThresholdWidth={hideThresholdWidth} />
				)}
				{/* 드래그 바 */}
				<Schedules numberOfDays={3} />
				<DragBarStyle ref={dragBarRef}>
					<DragBar />
				</DragBarStyle>
			</S.ResizableContainer>
		</S.Main>
		<KakaoMap />
	</S.Container>
	);
};
export default Schedule;

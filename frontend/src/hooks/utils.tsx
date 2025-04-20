// c:\github\travel-repository\frontend\src\hooks\utils.tsx
// useEffect, useRef, useState 제거
import { UtilsWrap } from './utils.style'; // DragBarStyle 제거
// DragBar import 제거
import Title from "./title";
import Util from "./util";

interface UtilProps {
    // 드래그 관련 props 제거
    // hideThresholdWidth는 남겨두거나 Schedule에서 직접 계산해도 됨
    hideThresholdWidth?: number;
    // 부모로부터 현재 너비를 받음
    currentWidth: number | string;
}

// props에서 드래그 관련 항목 제거, currentWidth 추가
const Utils: React.FC<UtilProps> = ({
    hideThresholdWidth = 324, // 기본값 유지 또는 제거
    currentWidth
}) => {
    // 드래그 관련 state, ref, useEffect 모두 제거

    // 부모로부터 받은 currentWidth를 사용하여 콘텐츠 표시 여부 결정
    const showContent = typeof currentWidth === 'number'
        ? currentWidth > hideThresholdWidth
        : true; // 'max-content' 같은 문자열 너비일 경우 항상 표시 (이 로직은 이제 불필요할 수 있음)

    return (
        // UtilsWrap에서 ref와 style 제거 (너비는 부모 ResizableContainer가 제어)
        <UtilsWrap>
            {showContent && (
                <>
                    <Title />
                    <Util />
                </>
            )}
            {/* DragBarStyle 및 DragBar 제거 */}
        </UtilsWrap>
    );
};

export default Utils;

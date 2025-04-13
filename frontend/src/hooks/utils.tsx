import { useEffect, useRef, useState } from "react";
import { UtilsWrap, DragBarStyle } from './utils.style';
import DragBar from '../assets/dragBar.svg?react';
import Title from "./title";
import Util from "./util";

interface UtilProps {
    defaultWidth?: number;
    minWidth?: number;
    maxWidth?: number;
    hideThresholdWidth?: number;
}

const Utils: React.FC<UtilProps> = ({
    defaultWidth = 858,
    minWidth = 100,
    maxWidth = 1900,
    hideThresholdWidth = 324
}) => {
    const [utilWidth, setUtilWidth] = useState<number>(defaultWidth);
    const utilRef = useRef<HTMLDivElement>(null);
    // dragBarRef는 이제 DragBarStyle (div)를 직접 참조합니다.
    const dragBarRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef<boolean>(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging.current && utilRef.current) {
                let newWidth = e.clientX - utilRef.current.offsetLeft;
                newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
                setUtilWidth(newWidth);
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

        const dragBarElement = dragBarRef.current; // 이제 DragBarStyle 요소

        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            isDragging.current = true;
            document.body.style.cursor = 'col-resize';
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        };

        if (dragBarElement) {
            dragBarElement.addEventListener("mousedown", handleMouseDown);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            if (dragBarElement) {
                dragBarElement.removeEventListener("mousedown", handleMouseDown);
            }
            document.body.style.cursor = 'default';
        };
    }, [minWidth, maxWidth]);

    const showContent = utilWidth > hideThresholdWidth;

    return (
        <UtilsWrap ref={utilRef} style={{ width: `${utilWidth}px` }}>
            {showContent && (
                <>
                    <Title />
                    <Util />
                </>
            )}
            <DragBarStyle ref={dragBarRef}>
                <DragBar />
            </DragBarStyle>
        </UtilsWrap>
    );
};

export default Utils;

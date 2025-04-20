import { useEffect, useRef, useState } from "react";
import { UtilsWrap, DragBarStyle } from './utils.style';
import DragBar from '../assets/dragBar.svg?react';
import Title from "./title";
import Util from "./util";

interface UtilProps {
    defaultWidth?: string | number;
    minWidth?: number;
    maxWidth?: number;
    hideThresholdWidth?: number;
}

const Utils: React.FC<UtilProps> = ({
    defaultWidth = 1400,
    minWidth = 100,
    maxWidth = 1900,
    hideThresholdWidth = 324
}) => {
    const [utilWidth, setUtilWidth] = useState<string | number>(defaultWidth);
    const utilRef = useRef<HTMLDivElement>(null);
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

        const dragBarElement = dragBarRef.current;

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
            if (isDragging.current) {
                document.body.style.cursor = 'default';
            }
        };
    }, [minWidth, maxWidth]);

    const showContent = typeof utilWidth === 'number'
        ? utilWidth > hideThresholdWidth
        : true;

    return (
        <UtilsWrap ref={utilRef} style={{ width: typeof utilWidth === 'number' ? `${utilWidth}px` : utilWidth }}>
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

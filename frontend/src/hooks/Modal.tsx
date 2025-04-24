import { ModalBox, ModalWrap } from './Modal.style';
import Close from '../assets/close.svg?react';

export interface ModalProps {
    $view: boolean;
    onClose?: () => void;
    type?: string;
}

const Modal = ({ $view, onClose, type }: ModalProps) => {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <ModalWrap $view={$view}>
            <ModalBox>
                <Close onClick={handleClose} />
                {
                    type === "login" ?
                        <></>
                    :
                        <></>
                }
            </ModalBox>
        </ModalWrap>
    );
};

export default Modal;

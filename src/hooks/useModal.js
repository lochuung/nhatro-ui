import {useState} from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const openModal = (room = null) => {
        setSelectedRoom(room);
        setIsEditMode(!!room);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return {isOpen, isEditMode, selectedRoom, openModal, closeModal};
};

export default useModal;
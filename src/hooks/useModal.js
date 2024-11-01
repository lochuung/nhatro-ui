import {useState} from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const openModal = (data = null) => {
        setSelectedData(data);
        setIsEditMode(!!data);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return {isOpen, isEditMode, selectedData, openModal, closeModal};
};

export default useModal;
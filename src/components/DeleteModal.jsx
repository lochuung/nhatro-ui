import {Modal} from 'antd';
import {useState} from 'react';

const DeleteModal = ({visible, onConfirm, onCancel}) => {
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        try {
            setLoading(true);
            await onConfirm();
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Xác nhận xóa"
            visible={visible}
            onOk={handleConfirm}
            onCancel={onCancel}
            okText="Xóa"
            cancelText="Hủy"
            okButtonProps={{danger: true, loading: loading}}
            cancelButtonProps={{disabled: loading}}
            closable={!loading}
            maskClosable={!loading}
        >
            <p>Bạn có chắc chắn muốn xóa?</p>
        </Modal>
    );
};

export default DeleteModal;
import {Modal} from 'antd';

const DeleteModal = ({visible, onConfirm, onCancel}) => (
    <Modal
        title="Xác nhận xóa"
        visible={visible}
        onOk={onConfirm}
        onCancel={onCancel}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{danger: true}}
    >
        <p>Bạn có chắc chắn muốn xóa?</p>
    </Modal>
);

export default DeleteModal;
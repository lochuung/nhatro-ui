import './Loading.css';

export default function Loading() {
    return (
        <div class="page-loading active">
            <div class="page-loading-inner">
                <div class="page-spinner"></div><span>Đang tải...</span>
            </div>
        </div>
    )
}
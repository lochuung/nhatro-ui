

const PageHeader = ({ title }) => {
    return (
        <div className="d-flex align-items-baseline justify-content-between">
            <h1 className="h2">{title}</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default PageHeader;
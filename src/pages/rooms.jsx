

export default function Rooms() {
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex align-items-baseline justify-content-between">
                    {/* Title */}
                    <h1 className="h2">API Keys</h1>
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="javascript: void(0);">Pages</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                API Keys
                            </li>
                        </ol>
                    </nav>
                </div>
                <div
                    className="alert text-bg-info-soft d-flex align-items-center mb-6"
                    role="alert"
                >
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height={32}
                            width={32}
                            className="me-3"
                        >
                            <path
                                d="M23.39,10.53,13.46.6a2.07,2.07,0,0,0-2.92,0L.61,10.54a2.06,2.06,0,0,0,0,2.92h0l9.93,9.92A2,2,0,0,0,12,24a2.07,2.07,0,0,0,1.47-.61l9.92-9.92A2.08,2.08,0,0,0,23.39,10.53ZM11,6.42a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h0a1.54,1.54,0,0,1-1.52-1.47A1.47,1.47,0,0,1,12,14.93h0A1.53,1.53,0,0,1,13.5,16.4,1.48,1.48,0,0,1,12.05,17.93Z"
                                style={{ fill: "currentColor" }}
                            />
                        </svg>
                    </div>
                    <p className="mb-0">
                        A private key <strong>should not be shared</strong> with anyone. Do not
                        embed API keys directly in code. Do not store API keys in files inside
                        your application's source tree. If you store API keys in files, keep the
                        files outside your application's source tree to help ensure your keys do
                        not end up in your source code control system. Delete unneeded API keys.
                    </p>
                </div>
                <div className="row">
                    <div className="col d-flex">
                        {/* Card */}
                        <div
                            className="card border-0 flex-fill w-100"
                            data-list='{"valueNames": ["name", {"name": "key", "attr": "data-key"}, {"name": "status", "attr": "data-status"}, {"name": "created", "attr": "data-created"}], "page": 10}'
                            id="keysTable"
                        >
                            <div className="card-header border-0">
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
                                    {/* Title */}
                                    <h2 className="card-header-title h4 text-uppercase">API Keys</h2>
                                    <input
                                        className="form-control list-fuzzy-search mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                                        type="search"
                                        placeholder="Search in keys"
                                    />
                                    {/* Button */}
                                    <button
                                        type="button"
                                        className="btn btn-primary ms-md-4"
                                        data-bs-toggle="modal"
                                        data-bs-target="#createKeyModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            height={14}
                                            width={14}
                                            className="me-1"
                                        >
                                            <path
                                                d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                                                style={{ fill: "currentColor" }}
                                            />
                                        </svg>
                                        Create key
                                    </button>
                                </div>
                            </div>
                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table align-middle table-hover table-nowrap mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>
                                                <a
                                                    href="javascript: void(0);"
                                                    className="text-muted list-sort"
                                                    data-sort="name"
                                                >
                                                    Name
                                                </a>
                                            </th>
                                            <th>
                                                <a
                                                    href="javascript: void(0);"
                                                    className="text-muted list-sort"
                                                    data-sort="key"
                                                >
                                                    API Key
                                                </a>
                                            </th>
                                            <th>
                                                <a
                                                    href="javascript: void(0);"
                                                    className="text-muted list-sort"
                                                    data-sort="status"
                                                >
                                                    Status
                                                </a>
                                            </th>
                                            <th>
                                                <a
                                                    href="javascript: void(0);"
                                                    className="text-muted list-sort"
                                                    data-sort="created"
                                                >
                                                    Created
                                                </a>
                                            </th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="list">
                                        <tr>
                                            <td className="name">Augue Eu Incorporated</td>
                                            <td
                                                className="key"
                                                data-key="FC6F7D6B-BADD-0DD4-A7B0-EB34A1EFA527"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-01"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="FC6F7D6B-BADD-0DD4-A7B0-EB34A1EFA527"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-01"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1642550400}>
                                                01.19.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Feugiat Corp.</td>
                                            <td
                                                className="key"
                                                data-key="0EDCEC27-5682-AB3A-9C4C-59DB1C21EE3E"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-02"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="0EDCEC27-5682-AB3A-9C4C-59DB1C21EE3E"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-02"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1647216000}>
                                                03.14.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Arcu Eu PC</td>
                                            <td
                                                className="key"
                                                data-key="C8F7062C-5D0A-73E2-683B-0082DA2A2931"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-03"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="C8F7062C-5D0A-73E2-683B-0082DA2A2931"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-03"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1618963200}>
                                                11.04.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Malesuada Inc.</td>
                                            <td
                                                className="key"
                                                data-key="F45F2283-EF71-78D3-6266-A1A432CB68CA"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-04"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="F45F2283-EF71-78D3-6266-A1A432CB68CA"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-04"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1638230400}>
                                                11.30.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Erat Neque Inc.</td>
                                            <td
                                                className="key"
                                                data-key="DD16E1C1-4920-168B-9C03-AB89D2DC92E1"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-05"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="DD16E1C1-4920-168B-9C03-AB89D2DC92E1"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-05"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1650240000}>
                                                04.18.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Nec Eleifend Non LLC</td>
                                            <td
                                                className="key"
                                                data-key="DCB6881B-DB20-1ADA-7F33-E1D77E1E5515"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-06"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="DCB6881B-DB20-1ADA-7F33-E1D77E1E5515"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-06"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1648684800}>
                                                03.31.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Aliquam Eu PC</td>
                                            <td
                                                className="key"
                                                data-key="92625B9D-A5ED-2C3C-3321-3F79617FC4E5"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-07"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="92625B9D-A5ED-2C3C-3321-3F79617FC4E5"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-07"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1644537600}>
                                                02.11.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Eros Inc.</td>
                                            <td
                                                className="key"
                                                data-key="6AB6AB16-645C-03C9-EED1-C34EAF9F700A"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-08"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="6AB6AB16-645C-03C9-EED1-C34EAF9F700A"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-08"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1628294400}>
                                                08.07.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Dui Suspendisse Institute</td>
                                            <td
                                                className="key"
                                                data-key="CCBBE197-4FDC-23B1-D9BF-E5E306F25972"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-09"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="CCBBE197-4FDC-23B1-D9BF-E5E306F25972"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-09"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1658534400}>
                                                07.23.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Risus A Foundation</td>
                                            <td
                                                className="key"
                                                data-key="D09F3681-E6DF-4241-0EF5-C2CCE46498D4"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-10"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="D09F3681-E6DF-4241-0EF5-C2CCE46498D4"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-10"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1653436800}>
                                                05.25.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Nam Interdum Corp.</td>
                                            <td
                                                className="key"
                                                data-key="AF9ABB15-4CA5-A714-B673-D4A62A6D855E"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-11"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="AF9ABB15-4CA5-A714-B673-D4A62A6D855E"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-11"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1648857600}>
                                                04.02.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Viverra Institute</td>
                                            <td
                                                className="key"
                                                data-key="3BAF3B68-A425-ED34-982E-D57B3912B326"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-12"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="3BAF3B68-A425-ED34-982E-D57B3912B326"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-12"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1631404800}>
                                                09.12.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Hendrerit Neque Incorporated</td>
                                            <td
                                                className="key"
                                                data-key="394C9547-113E-EE50-9EB1-9C86B3AA05C2"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-13"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="394C9547-113E-EE50-9EB1-9C86B3AA05C2"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-13"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1650067200}>
                                                04.16.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Leo Industries</td>
                                            <td
                                                className="key"
                                                data-key="46A3284C-2C6D-1D1F-097A-82B67987C1E4"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-14"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="46A3284C-2C6D-1D1F-097A-82B67987C1E4"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-14"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1656201600}>
                                                06.26.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Orci Luctus Foundation</td>
                                            <td
                                                className="key"
                                                data-key="4329C289-13AC-4EB1-6571-DD693F474730"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-15"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="4329C289-13AC-4EB1-6571-DD693F474730"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-15"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1629763200}>
                                                08.24.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Nostra Per LLC</td>
                                            <td
                                                className="key"
                                                data-key="696B5CB-5D98-881A-7E4D-5367F5DA78DE"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-16"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="696B5CB-5D98-881A-7E4D-5367F5DA78DE"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-16"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1641945600}>
                                                01.12.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Dui Quis Limited</td>
                                            <td
                                                className="key"
                                                data-key="F1E63894-45F0-5D37-3EA9-D99B3DB1CAE8"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-17"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="F1E63894-45F0-5D37-3EA9-D99B3DB1CAE8"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-17"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1645833600}>
                                                02.26.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Et Tristique Pellentesque Institute</td>
                                            <td
                                                className="key"
                                                data-key="B0887A58-C385-D812-0C86-A18C7D6E3796"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-18"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="B0887A58-C385-D812-0C86-A18C7D6E3796"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-18"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1638921600}>
                                                12.08.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Nulla Facilisis Corp.</td>
                                            <td
                                                className="key"
                                                data-key="AC04A2D7-8CCB-D9B1-879E-C3803AE8E3D1"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-19"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="AC04A2D7-8CCB-D9B1-879E-C3803AE8E3D1"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-19"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1629676800}>
                                                08.23.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Euismod Inc.</td>
                                            <td
                                                className="key"
                                                data-key="59C32E44-17C4-88F9-6456-2EEC982EE5CE"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-20"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="59C32E44-17C4-88F9-6456-2EEC982EE5CE"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-20"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1628467200}>
                                                08.09.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Ornare Institute</td>
                                            <td
                                                className="key"
                                                data-key="D30D2527-6153-391D-F528-4F6827B2973E"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-21"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="0D30D2527-6153-391D-F528-4F6827B2973E"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-21"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1643760000}>
                                                02.02.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Lectus Pede Limited</td>
                                            <td
                                                className="key"
                                                data-key="504E63D5-C786-4995-CC33-26F80443FD2C"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-22"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="504E63D5-C786-4995-CC33-26F80443FD2C"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-22"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1640563200}>
                                                12.27.21
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Cubilia Company</td>
                                            <td
                                                className="key"
                                                data-key="9C374A9F-1D14-B8E2-355F-7C33E38A136E"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-23"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="C374A9F-1D14-B8E2-355F-7C33E38A136E"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-23"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1654732800}>
                                                06.09.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Sagittis Duis Gravida Corporation</td>
                                            <td
                                                className="key"
                                                data-key="0CB8B7A1-939A-C53F-A3E2-98EA54718F79"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-24"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="0CB8B7A1-939A-C53F-A3E2-98EA54718F79"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-24"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1647734400}>
                                                03.20.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Est Mauris Consulting</td>
                                            <td
                                                className="key"
                                                data-key="D03374FA-822E-5C5E-D52C-297CE8E44A54"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-25"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="D03374FA-822E-5C5E-D52C-297CE8E44A54"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-25"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Disabled">
                                                <span className="legend-circle bg-danger" />
                                                Disabled
                                            </td>
                                            <td className="created" data-created={1641081600}>
                                                01.02.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">A Limited</td>
                                            <td
                                                className="key"
                                                data-key="52ADE03F-56C7-5D43-41FE-7316A1F30D6C"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-26"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="52ADE03F-56C7-5D43-41FE-7316A1F30D6C"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-26"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Active">
                                                <span className="legend-circle bg-success" />
                                                Active
                                            </td>
                                            <td className="created" data-created={1644537600}>
                                                02.11.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Eu Euismod Industries</td>
                                            <td
                                                className="key"
                                                data-key="4EDE4EE8-C1AC-4AA7-0481-67CF981D4400"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-27"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="4EDE4EE8-C1AC-4AA7-0481-67CF981D4400"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-27"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1644019200}>
                                                02.05.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Pede Praesent Eu Institute</td>
                                            <td
                                                className="key"
                                                data-key="4E18F6B4-5947-A001-EA41-155D7C9A0491"
                                            >
                                                <div className="d-flex">
                                                    <input
                                                        id="key-28"
                                                        className="form-control w-350px me-3"
                                                        defaultValue="4E18F6B4-5947-A001-EA41-155D7C9A0491"
                                                    />
                                                    {/* Button */}
                                                    <button
                                                        className="clipboard btn btn-link px-0"
                                                        data-clipboard-target="#key-28"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="Copy to clipboard"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={18}
                                                            width={18}
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M13.4,4.73a.24.24,0,0,0,.2.26,1.09,1.09,0,0,1,.82,1.11V7.5a1.24,1.24,0,0,0,1.25,1.24h0A1.23,1.23,0,0,0,16.91,7.5V4a1.5,1.5,0,0,0-1.49-1.5H13.69a.29.29,0,0,0-.18.07.26.26,0,0,0-.07.18C13.44,3.2,13.44,4.22,13.4,4.73Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M9,21.26A1.23,1.23,0,0,0,7.71,20H3.48a1.07,1.07,0,0,1-1-1.14V6.1A1.08,1.08,0,0,1,3.33,5a.25.25,0,0,0,.2-.26c0-.77,0-1.6,0-2a.25.25,0,0,0-.25-.25H1.5A1.5,1.5,0,0,0,0,4V21a1.5,1.5,0,0,0,1.49,1.5H7.71A1.24,1.24,0,0,0,9,21.26Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M11.94,4.47v-2a.5.5,0,0,0-.5-.49h-.76a.26.26,0,0,1-.25-.22,2,2,0,0,0-3.95,0A.25.25,0,0,1,6.23,2H5.47A.49.49,0,0,0,5,2.48v2a.49.49,0,0,0,.49.5h6A.5.5,0,0,0,11.94,4.47Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M19,17.27H15a.75.75,0,0,0,0,1.5h4a.75.75,0,0,0,0-1.5Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M14.29,14.54a.76.76,0,0,0,.75.75h2.49a.75.75,0,0,0,0-1.5H15A.76.76,0,0,0,14.29,14.54Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <path
                                                                    d="M23.5,13.46a2,2,0,0,0-.58-1.41l-1.41-1.4a2,2,0,0,0-1.41-.59H12.49a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2Zm-11-.4a1,1,0,0,1,1-1h6.19a1,1,0,0,1,.71.29l.82.82a1,1,0,0,1,.29.7V21a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1Z"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="status" data-status="Inactive">
                                                <span className="legend-circle bg-warning" />
                                                Inactive
                                            </td>
                                            <td className="created" data-created={1646179200}>
                                                03.02.22
                                            </td>
                                            <td>
                                                {/* Dropdown */}
                                                <div className="dropdown float-end">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="dropdown-toggle no-arrow d-flex text-secondary"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            height={14}
                                                            width={14}
                                                        >
                                                            <g>
                                                                <circle
                                                                    cx={12}
                                                                    cy="3.25"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="20.75"
                                                                    r="3.25"
                                                                    style={{ fill: "currentColor" }}
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>{" "}
                            {/* / .table-responsive */}
                            <div className="card-footer">
                                {/* Pagination */}
                                <ul className="pagination justify-content-end list-pagination mb-0" />
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* / .row */}
            </div>
        </>
    );
}
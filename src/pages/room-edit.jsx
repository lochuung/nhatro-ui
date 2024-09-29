export default function RoomEdit() {
    return (
      <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="Webinning" name="author" />
      {/* Theme CSS */}
      <link
        rel="stylesheet"
        href="./assets/css/theme.bundle.css"
        id="stylesheetLTR"
      />
      <link
        rel="stylesheet"
        href="./assets/css/theme.rtl.bundle.css"
        id="stylesheetRTL"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
      />
      <link
        rel="stylesheet"
        media="print"
        onload="this.onload=null;this.removeAttribute('media');"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
      />
      {/* no-JS fallback */}
      <noscript>
        &lt;link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&amp;display=swap"&gt;
      </noscript>
      {/* Favicon */}
      <link rel="icon" href="./assets/favicon/favicon.ico" sizes="any" />
      {/* Demo script */}
      {/* Page Title */}
      <title>Wizard | Dashly</title>
      {/* THEME CONFIGURATION */}
      {/* MAIN CONTENT */}
      <main>
        {/* HEADER */}
        <div className="container-fluid">
          <div className="d-flex align-items-baseline justify-content-between"></div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9 col-xxl-7">
              <form className="needs-validation" noValidate="">
                <ul
                  className="nav nav-pills steps mb-7 mt-n3 w-75 w-xxl-50 mx-auto"
                  id="wizard-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item"
                    role="presentation"
                    data-bs-target="#wizardStepOne"
                  ></li>
                  <li
                    className="nav-item"
                    role="presentation"
                    data-bs-target="#wizardStepTwo"
                  ></li>
                  <li
                    className="nav-item"
                    role="presentation"
                    data-bs-target="#wizardStepThree"
                  ></li>
                </ul>
                <div className="tab-content" id="wizard-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="wizardStepOne"
                    role="tabpanel"
                    aria-labelledby="wizardTabOne"
                  >
                    {/* Card */}
                    <div className="card border-0 py-6 px-md-6">
                      <div className="card-body">
                        <h2 className="text-center mb-0">Chỉnh sửa</h2>
                        <p className="text-secondary text-center">
                          Chỉnh sửa và thêm mới phòng
                        </p>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-md">
                              <label htmlFor="projectName" className="form-label">
                                Tên phòng
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="projectName"
                                placeholder="Nhập tên phòng"
                                required=""
                              />
                              <div className="invalid-feedback">
                                Vui lòng nhập tên phòng
                              </div>
                            </div>
                            <div className="col-md">
                              <label htmlFor="owner" className="form-label">
                                Giá phòng
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="owner"
                                placeholder="Nhập giá phòng"
                                required=""
                              />
                              <div className="invalid-feedback">
                                Vui lòng nhập giá phòng
                              </div>
                            </div>
                          </div>{" "}
                          {/* / .row */}
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-md">
                              <label htmlFor="url" className="form-label">
                                Sức chứa
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="url"
                                  placeholder="Số lượng người ở tối đa"
                                />
                              </div>
                              <div className="invalid-feedback">
                                Vui lòng nhập số lượng người ở tối đa
                              </div>
                            </div>
                            <div className="col-md">
                              <label htmlFor="country" className="form-label">
                                Trạng thái
                              </label>
                              <select
                                className="form-select"
                                id="country"
                                required=""
                                autoComplete="off"
                                data-select='{
                                                                  "placeholder": "Choose..."
                                                              }'
                                data-option-template='<span class="d-flex align-items-center py-2"><span class="text-truncate ms-2">[[text]]</span></span>'
                                data-item-template='<span class="d-flex align-items-center"><span class="text-truncate ms-2">[[text]]</span></span>'
                              >
                                <option label="country placeholder" />
                                <option>Còn phòng</option>
                                <option>Hết phòng</option>
                                <option>Đang bảo trì</option>
                              </select>
                              <div className="invalid-feedback">
                                Vui lòng chọn trạng thái của phòng
                              </div>
                            </div>
                          </div>{" "}
                          {/* / .row */}
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col">
                              <label className="form-label">Mô tả</label>
                              <div
                                data-quill='{"placeholder" : "Chi tiết về phòng"}'
                                className="mb-3 h-150px"
                              />
                            </div>
                          </div>{" "}
                          {/* / .row */}
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex justify-content-between">
                          {/* Button */}
                          <button type="button" className="btn btn-light">
                            Hủy
                          </button>
                          {/* Button */}
                          <a
                            className="btn btn-primary"
                            data-toggle="wizard"
                            href="#wizardStepTwo"
                          >
                            Xác nhận
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="wizardStepTwo"
                    role="tabpanel"
                    aria-labelledby="wizardTabTwo"
                  ></div>
                  <div
                    className="tab-pane fade"
                    id="wizardStepThree"
                    role="tabpanel"
                    aria-labelledby="wizardTabThree"
                  ></div>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container-fluid */}
      </main>{" "}
      {/* / main */}
      {/* JAVASCRIPT*/}
      {/* Theme JS */}
    </>
    );
}
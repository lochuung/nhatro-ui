import { useState } from "react";

export default function Contracts() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      contractName: "Hợp đồng Est Mauris Consulting",
      deposit: "3000.000đ",
      numberOfPeople: "4",
      statusColor: "bg-danger",
      statusText: "Chưa ký",
    },
    {
      id: 2,
      contractName: "Hợp đồng A Limited",
      deposit: "2000.000đ",
      numberOfPeople: "3",
      statusColor: "bg-success",
      statusText: "Đã ký",
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContract, setCurrentContract] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);


  const handleAdd = () => {
    setCurrentContract({ contractName: "", deposit: "", statusColor: "", statusText: "", type: "" });
    setIsEditMode(false); 
    setIsModalOpen(true);
  };

  const handleEdit = (contract, action) => {
    if (action === "checkout") {
      setContracts(
        contracts.map((c) =>
          c.id === contract.id
            ? { ...c, statusColor: "bg-secondary", statusText: "Chờ xét duyệt" }
            : c
        )
      );
    } else {
      setCurrentContract(contract);
      setIsEditMode(true);
      setIsModalOpen(true);
    }
  };

  const handleView = (contract) => {
    setCurrentContract(contract);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentContract(null);
  };

  // const handleInputChange = (e) => {
  //   const { contractName, value } = e.target;
  //   setCurrentContract({ ...currentContract, [contractName]: value });
  // };

  const handleSaveOrUpdate = () => {
    if (isEditMode) {
      setContracts(
        contracts.map((contract) => (contract.id === currentContract.id ? currentContract : contract))
      );
    } else {
      setContracts([...contracts, { ...currentContract, id: contracts.length + 1 }]);
    }
    handleClose();
  };

  // Styles
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
  };

  const fullwidth = {
    width: "100%",
  }

  const modalContainerStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "6px",
    width: "800px",
    maxHeight: "90vh",
    position: "relative",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    overflowY: "auto",
  };
  

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer"
  };

  // const inputStyle = {
  //   width: "100%",
  //   padding: "8px",
  //   marginBottom: "10px",
  //   border: "1px solid #ccc",
  //   borderRadius: "4px",
  //   fontSize: "14px"
  // };

  const saveButtonStyle = {
    backgroundColor: "#00BAC7",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "50px", 
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    marginLeft: "auto"
  };

  const saveButtonHoverStyle = {
    backgroundColor: "#009EA9"
  };

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-baseline justify-content-between">
        <h1 className="h2">Danh sách hợp đồng</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="javascript: void(0);">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Danh sách hợp đồng
            </li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col d-flex">
          <div className="card border-0 flex-fill w-100" id="keysTable">
            <div className="card-header border-0">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
                <h2 className="card-header-title h4 text-uppercase">
                  Danh sách phòng
                </h2>
                <input
                  className="form-control list-fuzzy-search mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                  type="search"
                  placeholder="Tìm kiếm hợp đồng"
                />
                <button
                  type="button"
                  className="btn btn-primary ms-md-4"
                  onClick={handleAdd} 
                >
                  Thêm hợp đồng
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <table className="table align-middle table-hover table-nowrap mb-0">
                <thead style={fullwidth} className="thead-light">
                    <tr>
                        <th>Tên hợp đồng</th>
                        <th>Tiền cọc</th>
                        <th>Số người</th>
                        <th>Trạng thái</th>
                        <th className="text-end"></th>                        
                        <th className="text-end"></th>                        
                        <th className="text-end"></th>
                    </tr>
                </thead>
                <tbody>
                  {contracts.map((contract) => (
                    <tr key={contract.id}>
                      <td>{contract.contractName}</td>
                      <td>{contract.deposit}</td>
                      <td>{contract.numberOfPeople}</td>
                      <td>
                        <span className={`legend-circle ${contract.statusColor}`} />
                        {contract.statusText}
                      </td>
                      <td>{contract.created}</td>
                      <td>{contract.type}</td>
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
                            {/* Three dots */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={14} width={14}>
                              <g>
                                <circle cx={12} cy="3.25" r="3.25" style={{ fill: "currentColor" }} />
                                <circle cx={12} cy={12} r="3.25" style={{ fill: "currentColor" }} />
                                <circle cx={12} cy="20.75" r="3.25" style={{ fill: "currentColor" }} />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                                onClick={() => handleEdit(contract)}
                              >
                                Check-in
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                                onClick={() => handleEdit(contract, "checkout")}
                              >
                                Check-out
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                                onClick={() => handleView(contract.id)}
                              >
                                Thông tin hợp đồng
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
  
            </div>

            <div className="card-footer">
              <ul className="pagination justify-content-end list-pagination mb-0" />    
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Adding/Editing */}
      {isModalOpen && (
        <div style={modalOverlayStyle} onClick={handleClose}>
          <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
            <h3 style={{marginBottom: "0" }}>{isEditMode ? "" : ""}</h3>
            {currentContract && (
              <div style={{fontFamily: "Times New Roman, Times, serif"}}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24px", fontWeight: "bold"}}>HỢP ĐỒNG THUÊ PHÒNG</span>
                </div>
                <label style={{ fontStyle: "italic", marginTop: "15px" }}>
                  Hôm nay, ngày 
                <input type="text" placeholder="" style={{ width: "30px", marginLeft: "5px", marginRight: "5px" }} />
                  tháng
                <input type="text" placeholder="" style={{ width: "30px", marginLeft: "5px", marginRight: "5px" }} />
                  năm
                <input type="text" placeholder="" style={{ width: "50px", marginLeft: "5px" }} />.
                  Tại
                <input type="text" placeholder="" style={{ marginLeft: "5px", width: "413px" }} />.
                  Chúng tôi gồm có:
                </label>
                <label style={{ fontWeight: "bold" }}>BÊN CHO THUÊ (BÊN A):</label> 
                <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{ marginRight: "5px"}}>Ông/bà:</label>
                    <input type="text" style={{ width: "374px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "40%" }}>
                    <label style={{ marginLeft: "40px", marginRight: "5px" }}>Sinh ngày:</label>
                    <input type="text" style={{ width: "175px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                <label>
                <div style={{ display: "flex"}}>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <label style={{ marginRight: "5px" }}>CCCD số: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{marginRight: "10px" }}>Ngày cấp: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{marginRight: "10px" }}>Nơi cấp: </label>
                    <input type="text" style={{ width: "270px", marginBottom: "5px" }} />.
                  </div>
                </div>
                Hộ khẩu thường trú: 
                <input type="text" style={{ width: "595px", marginBottom: "5px", marginLeft: "10px" }} />.	 <br />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "30%" }}>
                    <label style={{ marginRight: "5px" }}>Điện thoại:</label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "70%" }}>
                    <label style={{ marginLeft: "5px", marginRight: "10px" }}>Là chủ sở hữu:</label>
                    <input type="text" style={{ width: "399px", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                </div>
                Địa chỉ: 
                <input type="text" style={{ width: "665px", marginBottom: "5px", marginLeft: "10px" }} />.	
                </label> <br />
                </div>
                <label style={{ fontWeight: "bold" }}>BÊN THUÊ (BÊN B):</label> 
                <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{ marginRight: "5px" }}>1. Ông/bà:</label>
                    <input type="text" style={{ width: "360px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "40%" }}>
                    <label style={{ marginLeft: "40px", marginRight: "10px" }}>Sinh ngày:</label>
                    <input type="text" style={{ width: "170px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                <div style={{ display: "flex"}}>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <label style={{ marginRight: "5px" }}>CCCD số: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{marginRight: "5px" }}>Ngày cấp: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{marginRight: "5px" }}>Nơi cấp: </label>
                    <input type="text" style={{ width: "270px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                Hộ khẩu thường trú: 
                <input type="text" style={{ width: "595px" , marginBottom: "15px", marginLeft: "10px"  }} />.	 <br />
                </div>
                <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{ marginRight: "5px" }}>2. Ông/bà:</label>
                    <input type="text" style={{ width: "360px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "40%" }}>
                    <label style={{ marginLeft: "40px", marginRight: "10px" }}>Sinh ngày:</label>
                    <input type="text" style={{ width: "170px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                <div style={{ display: "flex"}}>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <label style={{ marginRight: "5px" }}>CCCD số: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{marginRight: "5px" }}>Ngày cấp: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{marginRight: "5px" }}>Nơi cấp: </label>
                    <input type="text" style={{ width: "270px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                Hộ khẩu thường trú: 
                <input type="text" style={{ width: "595px" , marginBottom: "15px", marginLeft: "10px"  }} />.	 <br />
                </div>
                <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{ marginRight: "5px" }}>3. Ông/bà:</label>
                    <input type="text" style={{ width: "360px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "40%" }}>
                    <label style={{ marginLeft: "40px", marginRight: "10px" }}>Sinh ngày:</label>
                    <input type="text" style={{ width: "170px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                <div style={{ display: "flex"}}>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <label style={{ marginRight: "5px" }}>CCCD số: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{marginRight: "5px" }}>Ngày cấp: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{marginRight: "5px" }}>Nơi cấp: </label>
                    <input type="text" style={{ width: "270px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                Hộ khẩu thường trú: 
                <input type="text" style={{ width: "595px" , marginBottom: "15px", marginLeft: "10px"  }} />.	 <br />
                </div>
                <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{ marginRight: "5px" }}>4. Ông/bà:</label>
                    <input type="text" style={{ width: "360px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "40%" }}>
                    <label style={{ marginLeft: "40px", marginRight: "10px" }}>Sinh ngày:</label>
                    <input type="text" style={{ width: "170px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                <div style={{ display: "flex"}}>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <label style={{ marginRight: "5px" }}>CCCD số: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{marginRight: "5px" }}>Ngày cấp: </label>
                    <input type="text" style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{marginRight: "5px" }}>Nơi cấp: </label>
                    <input type="text" style={{ width: "270px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                Hộ khẩu thường trú: 
                <input type="text" style={{ width: "595px" , marginBottom: "5px", marginLeft: "10px"  }} />.	 <br />
                </div>
                <label style={{ fontStyle: "italic" }}>Hai bên cùng thỏa thuận ký hợp đồng với những nội dung sau:</label> <br />
                <label style={{ fontWeight: "bold" }}>ĐIỀU 1: NỘI DUNG CỦA HỢP ĐỒNG</label>
                <label>
                1.1.	Bên A cho bên B thuê: 
                <input type="text" style={{ width: "28px", marginRight: "4px", marginLeft: "4px" }} />
                 phòng tại 
                <input type="text" style={{ width: "476px", marginLeft: "4px", marginBottom: "5px" }} />.
                Địa chỉ 
                <input type="text" style={{ width: "669px", marginLeft: "10px", marginBottom: "5px"  }} />. <br />
                1.2. Thời hạn cho thuê phòng là 
                <input type="text" style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                năm (                 
                <input type="text" style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                tháng), kể từ ngày 
                <input type="text" style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                tháng 
                <input type="text" style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                năm
                <input type="text" style={{ width: "44px", marginLeft: "4px", marginBottom: "5px"  }} />. <br />
                1.3. Giá cho thuê là 
                <input type="text" style={{ width: "100px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                đồng Việt Nam/                
                <input type="text" style={{ width: "28px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px"  }} />
                tháng.
                (Bằng chữ: 
                  <input type="text" style={{ width: "271px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px"  }} />
                ). <br />
                1.4. Chi phí sử dụng điện tính theo công tơ điện, đơn giá                 
                <input type="text" style={{ width: "80px", marginLeft: "4px", marginRight: "2px" , marginBottom: "5px"}} />
                ĐVN/01 kWh. Số điện khi nhận phòng: 
                <input type="text" style={{ width: "87px", marginLeft: "4px" }} />. <br />
                1.5. Phương thức thanh toán: thanh toán bằng tiền Việt Nam thông qua hình thức tiền mặt hoặc chuyển khoản qua tài khoản thụ hưởng: 
                <input type="text" style={{ width: "350px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px" }} />
                số:
                </label>
                <ul>
                  <li> STK:
                    <input type="text" style={{ width: "150px", marginLeft: "4px", marginRight: "4px", marginBottom: "5px" }} />
                    Ngân hàng:                 
                    <input type="text" style={{ width: "80px", marginLeft: "4px", marginBottom: "5px" }} />. <br />
                  </li>
                  <li> STK:
                    <input type="text" style={{ width: "150px", marginLeft: "4px", marginRight: "4px", marginBottom: "-5px" }} />
                    Ngân hàng:                 
                    <input type="text" style={{ width: "80px", marginLeft: "4px", marginBottom: "-5px" }} />. <br />
                  </li>
                </ul>
                <label>
                1.6. Thời hạn thanh toán: ngày 
                <input type="text" style={{ width: "28px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px" }} />
                 hàng tháng.
                </label> <br />
                <label style={{ fontWeight: "bold" }}>
                ĐIỀU 2: TRÁCH NHIỆM CÁC BÊN
                </label> <br />
                <label style={{ fontWeight: "bold" }}>
                2.1. Trách nhiệm bên A:
                </label>
                <label>
                a) Giao phòng và trang thiết bị gắn liền với phòng (nếu có) cho bên B đúng thời gian quy định; <br />
                b) Đăng ký với chính quyền địa phương về thủ tục cho thuê, đăng ký tạm trú tạm vắng; <br />
                c) Bảo đảm cho bên B sử dụng ổn định phòng trong thời gian thuê; <br />
                d) Trả lại tiền cọc khi kết thúc hợp đồng; <br />
                e) Trả lại số tiền thuê phòng mà bên B đã trả trước trong trường hợp các bên thỏa thuận chấm dứt hợp đồng thuê phòng trước thời hạn; <br />
                f) Đơn phương chấm dứt thực hiện hợp đồng thuê phòng thì phải thông báo cho bên B biết trước ít nhất một tháng, trừ trường hợp các bên có thoả thuận khác. <br />
                </label>
                <label style={{ fontWeight: "bold" }}>
                2.2. Trách nhiệm bên B:
                </label>
                <label>
                a) Đảm bảo các thiết bị, nội thất và sửa chữa các hư hỏng trong phòng trong khi sử dụng. Nếu không sửa chữa thì khi trả phòng bên A sẽ trừ vào tiền cọc, giá trị cụ thể được tính theo giá thị trường; <br />
                b) Chấp hành các quy định về giữ gìn vệ sinh môi trường và an ninh trật tự trong khu vực cư trú; <br />
                c) Giao lại phòng và thanh toán đủ cho bên A số tiền thuê phòng còn thiếu trong trường hợp chấm dứt hợp đồng nêu tại các khoản ở Điều 3 của hợp đồng này. <br />
                d) Đơn phương chấm dứt thực hiện hợp đồng thuê thì phải thông báo cho bên A biết trước ít nhất một tháng, trừ trường hợp các bên có thoả thuận khác. <br />
                </label>
                <label style={{ fontWeight: "bold" }}>
                ĐIỀU 3: CHẤM DỨT HỢP ĐỒNG THUÊ NHÀ Ở
                </label>
                <label>
                Việc chấm dứt hợp đồng thuê nhà ở được thực hiện khi có một trong các trường hợp sau: <br />
                3.1. Hợp đồng thuê nhà ở hết hạn mà các bên không thỏa thuận ký tiếp; trường hợp trong hợp đồng không xác định thời hạn thì hợp đồng chấm dứt sau một (01) tháng, kể từ ngày bên A thông báo cho bên B biết việc chấm dứt hợp đồng. <br />
                3.2. Các bên thỏa thuận chấm dứt hợp đồng trước thời hạn; <br />
                3.3. Căn hộ cho thuê không còn; <br />
                3.4. Căn hộ cho thuê hư hỏng nặng có nguy cơ sập đổ hoặc nằm trong khu vực đã có quyết định thu hồi đất, giải phóng mặt bằng hoặc có quyết định phá dỡ của cơ quan nhà nước có thẩm quyền. <br />
                3.5. Khi một trong hai bên đơn phương chấm dứt hợp đồng theo quy định của pháp luật. <br />
                </label>
                <label style={{ fontWeight: "bold" }}>
                ĐIỀU 4: CAM KẾT CỦA CÁC BÊN
                </label>
                <label>
                4.1. Việc ký kết hợp đồng này giữa các bên là hoàn toàn tự nguyện, không bị ép buộc, lừa dối. Trong quá trình thực hiện hợp đồng, nếu cần thay đổi hoặc bổ sung nội dung của hợp đồng này thì các bên thỏa thuận lập thêm phụ lục hợp đồng có chữ ký của hai bên, phụ lục hợp đồng có giá trị pháp lý như hợp đồng này. <br />
                4.2. Các bên cùng cam kết thực hiện đúng và đầy đủ các nội dung đã thỏa thuận trong hợp đồng. <br />
                4.3. Trường hợp các bên có tranh chấp về nội dung của hợp đồng này thì hai bên cùng bàn bạc giải quyết thông qua thương lượng. Trong trường hợp các bên không thương lượng được thì có quyền yêu cầu Tòa án giải quyết theo quy định của pháp luật. <br />
                4.4. Hợp đồng này có hiệu lực kể từ ngày 01 tháng 06 năm 2024. <br />
                4.5. Hợp đồng này được lập thành 02 bản và có giá trị như nhau, mỗi bên giữ 01 bản. <br />
                </label> <br />
                <br />
                <table style={{width: "100%", textAlign: "center", margin: "auto"}}>
                  <tr>
                    <th>
                      BÊN CHO THUÊ
                    </th>
                    <th>
                      BÊN THUÊ
                    </th>
                  </tr>
                  <tr>
                    <th>
                    (Ký và ghi rõ họ tên)
                    </th>
                    <th>
                    (Ký và ghi rõ họ tên)
                    </th>
                  </tr>
                  <tr>
                    <th>
                    <input type="text" placeholder="" style={{ width: "300px",height: "200px", marginLeft: "5px", marginRight: "5px" }} />
                    </th>
                    <th>
                    <input type="text" placeholder="" style={{ width: "300px",height: "200px", marginLeft: "5px", marginRight: "5px" }} />
                    </th>
                  </tr>
                </table>
                <br />
                <br />
              </div>
            )}

            <button
              style={saveButtonStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = saveButtonHoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = saveButtonStyle.backgroundColor)}
              onClick={handleSaveOrUpdate}
            >
              {isEditMode ? "Cập nhật" : "Thêm mới"}
            </button>

            <button style={closeButtonStyle} onClick={handleClose}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


import { useState } from "react";

export default function Contracts() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      contractName: "Hợp đồng Est Mauris Consulting",
      deposit: "3000.000đ",
      numberOfPeople: "4",
      statusColor: "bg-secondary",
      statusText: "Đã thuê",
      date: "12",
      month: "4",
      year: "2020",
      location: "",
      owner: {
        name: "Nguyễn Văn A",
        birthDate: "9/9/1990",
        cccd: "091194007831",
        cccdIssueDate: "22/11/2021",
        cccdIssuePlace: "Cục Cảnh Sát QLHC Về Trật Tự Xã Hội",
        address: "Ấp Gành Dầu, xã Gành Dầu, Tp. Phú Quốc, Kiên Giang",
        phone: "0974908090",
        ownership: "Est Mauris Consulting",
        addressRoom: "Tổ 4, ấp Gành Dầu, xã Gành Dầu, Tp. Phú Quốc, tỉnh Kiên Giang"
      },
      tenants: [
        { name: "", birthDate: "", id: "", idDay: "", idPlace: "", address: "" }
      ],
      rentalDetails: {
        roomCount: "",
        roomName: "Est Mauris Consulting",
        address: "",
        durationYear: "", 
        durationMonth: "",
        startDateDay: "", 
        startDateMonth: "", 
        startDateYear: "" ,
        rentAmount: "",
        perMonth: "",
        rentInWords: "",
        electricityPrice: "",
        meterReading: "",
        accountName: "", 
        accountNumber: "", 
        bank: "MB",
        paymentDay: ""
      }
    },
    {
      id: 2,
      contractName: "Hợp đồng A Limited",
      deposit: "2000.000đ",
      numberOfPeople: "3",
      statusColor: "bg-success",
      statusText: "Phòng trống",
      date: "12",
      month: "4",
      year: "2020",
      location: "",
      owner: {
        name: "Nguyễn Văn A",
        birthDate: "9/9/1990",
        cccd: "091194007831",
        cccdIssueDate: "22/11/2021",
        cccdIssuePlace: "Cục Cảnh Sát Quản Lý Hành Chính Về Trật Tự Xã Hội",
        address: "",
        phone: "",
        ownership: "",
        addressRoom: ""
      },
      tenants: [
        { name: "", birthDate: "", id: "", idDay: "", idPlace: "", address: "" }
      ],
      rentalDetails: {
        roomCount: "",
        roomName: "A Limited",
        address: "",
        durationYear: "", 
        durationMonth: "",
        startDateDay: "", 
        startDateMonth: "", 
        startDateYear: "" ,
        rentAmount: "",
        perMonth: "",
        rentInWords: "",
        electricityPrice: "",
        meterReading: "",
        accountName: "", 
        accountNumber: "", 
        bank: "",
        paymentDay: ""
      }
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContract, setCurrentContract] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [tenants, setTenants] = useState([{ name: "", birthDate: "", id: "", phone: "" }]); 
  const [error, setError] = useState(""); 
  const handleAdd = () => {
    setCurrentContract({ contractName: "", deposit: "", statusColor: "", statusText: "",date: "",owner:[], tenants: [], rentalDetails: [] });
    setTenants([{ name: "", birthDate: "", id: "", phone: "" }]); 
    setIsEditMode(false); 
    setIsModalOpen(true);
  };

  
const handleContractChange = (field, value) => {
  setCurrentContract((prevContract) => ({
    ...prevContract,
    [field]: value, 
  }));
};
  
  const handleEditCheckOut = (contract, action) => {
    if (action === "checkout") {
      setContracts(
        contracts.map((c) =>
          c.id === contract.id
            ? { ...c, statusColor: "bg-success", statusText: "Phòng trống" }
            : c
        )
      );
    } else {
      setCurrentContract(contract);
      setTenants(contract.tenants); 
      setIsEditMode(true);
      setIsModalOpen(true);
    }
  };
  const handleEditCheckIn = (contract, action) => {
    if (action === "checkin") {
      setContracts(
        contracts.map((c) =>
          c.id === contract.id
            ? { ...c, statusColor: "bg-secondary", statusText: "Đã thuê" }
            : c
        )
      );
    } else {
      setCurrentContract(contract);
      setTenants(contract.tenants); // Load danh sách người thuê của hợp đồng đang chỉnh sửa
      setIsEditMode(true);
      setIsModalOpen(true);
    }
  };

  const fullwidth = {
    width: "100%",
  }

  const handleView = (contract) => {
    setCurrentContract(contract);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentContract(null);
  };

  const handleTenantChange = (index, field, value) => {
    const updatedTenants = tenants.map((tenant, i) => (i === index ? { ...tenant, [field]: value } : tenant));
    setTenants(updatedTenants);
  };

  const handleAddTenant = () => {
    setTenants([...tenants, { name: "", birthDate: "", id: "", idDay: "", idPlace: "", address: "" }]);
    setError(""); 
  };

  const handleRemoveTenant = (index) => {
    if (tenants.length > 1) {
      const updatedTenants = tenants.filter((_, i) => i !== index);
      setTenants(updatedTenants);
    } else {
      setError("Phải có ít nhất một người thuê.");
    }
  };

  const handleSaveOrUpdate = () => {
    if (isEditMode) {
      setContracts(
        contracts.map((contract) => (contract.id === currentContract.id ? { ...currentContract, tenants } : contract))
      );
    } else {
      setContracts([...contracts, { ...currentContract, id: contracts.length + 1, tenants }]);
    }
    handleClose();
  };

  const handleSetOwner = (index) => {
    const updatedTenants = tenants.map((tenant, i) => ({
      ...tenant,
      isOwner: i === index
    }));
    setTenants(updatedTenants);
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
                <thead style={fullwidth  } className="thead-light">
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
                                onClick={() => handleEditCheckIn(contract, "checkin")}
                              >
                                Check-in
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                                onClick={() => handleEditCheckOut(contract, "checkout")}
                              >
                                Check-out
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                                onClick={() => handleView(contract)} 
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
      <h3 style={{ marginBottom: "0" }}>{isEditMode ? "" : ""}</h3>
            {isEditMode ? (
        <p>
          <style>
           {`
              @media print {
                .contractContainer {
                  overflow: visible !important;
                  height: auto !important;
                  max-height: none !important;
                  page-break-inside: avoid !important;
                }

                body {
                  margin: 0;
                  padding: 0;
                }
                            .contractContainer * {
                  page-break-inside: avoid;
                  page-break-after: always;
                }
              }
            `}
          </style>
          <div className="contractContainer" style={{ fontFamily: "Times New Roman, Times, serif" }}>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>HỢP ĐỒNG THUÊ PHÒNG</span>
            </div>
            <label style={{ fontStyle: "italic", marginTop: "15px" }}>
              Hôm nay, ngày
              <span style={{ width: "30px", marginLeft: "5px", marginRight: "5px" }}>
                {currentContract.date}
              </span>
              tháng
              <span style={{ width: "30px", marginLeft: "5px", marginRight: "5px" }}>
                {currentContract.month}
              </span>
              năm
              <span style={{ width: "50px", marginLeft: "5px" }}>
                {currentContract.year}
              </span>.
                    Tại
                    <span style={{ marginLeft: "5px", width: "413px" }}>
                      {currentContract.location}
                    </span>.Chúng tôi gồm có:
                  </label> <br />
                  {/* BÊN A - BÊN CHO THUÊ */}
                  <label style={{ fontWeight: "bold" }}>BÊN CHO THUÊ (BÊN A):</label> 
                  <div>
                  <div style={{ display: "flex",  alignItems: "center"}}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label style={{ marginRight: "5px"}}>Ông/bà:</label>
                      <span style={{ maxWidth: "374px", marginBottom: "0px", marginLeft: "5px" }}>
                        {currentContract.owner.name}
                      </span>.
                    </div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                      <label style={{ marginLeft: "40px", marginRight: "5px" }}>Sinh ngày:</label>
                      <span style={{ maxWidth: "175px", marginBottom: "0px", marginLeft: "5px" }}>
                        {currentContract.owner.birthDate}
                      </span>.
                    </div>
                  </div>
                  <label>
                  <div>
                    <div>
                      <label style={{ marginRight: "5px" }}>CCCD số: </label>
                      <span style={{marginBottom: "0px", marginLeft: "5px" }}>
                        {currentContract.owner.cccd}
                      </span>.
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label style={{marginRight: "10px" }}>Ngày cấp: </label>
                      <span style={{marginBottom: "0px" }}>
                        {currentContract.owner.cccdIssueDate}
                      </span>.
                    </div>
                    <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                      <label style={{marginRight: "10px" }}>Nơi cấp: </label>
                      <span style={{ maxWidth: "270px", marginBottom: "0px" }}>
                        {currentContract.owner.cccdIssuePlace}
                      </span>.
                    </div>
                  </div>
                  Hộ khẩu thường trú: 
                  <span style={{ maxWidth: "595px", marginBottom: "0px", marginLeft: "10px" }}>
                    {currentContract.owner.address}
                  </span>.	
                  <br />
                  <div>
                    <div>
                      <label style={{ marginRight: "5px" }}>Điện thoại:</label>
                      <span style={{ maxWidth: "60%", marginBottom: "0", marginLeft: "5px" }}>
                        {currentContract.owner.phone}
                      </span>.
                    </div>
                    <div style={{ display: "flex", alignItems: "center", flexBasis: "70%" }}>
                      <label style={{marginRight: "10px" }}>Là chủ sở hữu:</label>
                      <span style={{ maxWidth: "399px", marginBottom: "0", marginLeft: "5px" }}>
                        {currentContract.owner.ownership}
                      </span>.
                    </div>
                  </div>
                  Địa chỉ: 
                  <span style={{ maxWidth: "665px", marginBottom: "0", marginLeft: "10px" }}>
                    {currentContract.owner.addressRoom}
                  </span>.
                  </label> <br />
                  </div>
                  {/* Danh sách người thuê */}
                  <label style={{ fontWeight: "bold", marginTop: "5px" }}>BÊN THUÊ (BÊN B):</label>
                  {tenants.map((tenant, index) => (
                    <div key={index}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label style={{ marginRight: "5px" }}>Ông/bà:</label>
                          <span style={{ maxWidth: "375px", marginBottom: "0", marginLeft: "5px" }}>
                            {tenant.name}
                          </span>.
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label style={{ marginLeft: "0", marginRight: "5px" }}>Sinh ngày:</label>
                          <span style={{ maxWidth: "175px", marginBottom: "0", marginLeft: "5px" }}>
                            {tenant.birthDate}
                          </span>.
                        </div>
                      </div>
  
                      <div>
                        <div style={{ display: "flex", alignItems: "center"}}>
                          <label style={{ marginRight: "5px" }}>CCCD số: </label>
                          <span style={{ maxWidth: "60%", marginBottom: "0", marginLeft: "5px" }}>
                            {tenant.id}
                          </span>.
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label style={{marginRight: "10px" }}>Ngày cấp: </label>
                          <span style={{ maxWidth: "60%", marginBottom: "0" }}>
                            {tenant.idDay}
                          </span>.
                        </div>
                        <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                          <label style={{marginRight: "5px" }}>Nơi cấp: </label>
                          <span style={{ maxWidth: "275px", marginBottom: "0" }}>
                            {tenant.idPlace}
                          </span>.
                        </div>
                      </div>
                        Hộ khẩu thường trú: 
                        <span style={{ maxWidth: "595px", marginBottom: "0", marginLeft: "10px" }}>
                          {tenant.address}
                        </span>.
                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                        <label style={{ marginRight: "10px" }}>Chủ phòng:</label>
                        <input
                          type="radio"
                          name="owner"
                          checked={tenant.isOwner}
                          onChange={() => handleSetOwner(index)}
                          style={{ marginRight: "5px" }}
                        />
                      </div>
                      <br />
                    </div>
                  ))}
                  
                  <label style={{ fontStyle: "italic" }}>Hai bên cùng thỏa thuận ký hợp đồng với những nội dung sau:</label> <br />
                  <label style={{ fontWeight: "bold" }}>ĐIỀU 1: NỘI DUNG CỦA HỢP ĐỒNG</label>
                  <label>
                  1.1.	Bên A cho bên B thuê: 
                  <span style={{ maxWidth: "28px", marginRight: "4px", marginLeft: "4px" }}>
                    {currentContract.rentalDetails.roomCount}
                  </span>
                   phòng tại 
                   <span style={{ maxWidth: "476px", marginLeft: "4px", marginBottom: "0" }}>
  {currentContract.rentalDetails.roomName}
</span>.
                  Địa chỉ 
                  <span style={{ maxWidth: "669px", marginLeft: "10px", marginBottom: "0" }}>
  {currentContract.rentalDetails.address}
</span>. <br />
                  1.2. Thời hạn cho thuê phòng là 
                  <span style={{ maxWidth: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "0" }}>
  {currentContract.rentalDetails.durationYear}
</span>
                  năm (                 
                    <span style={{ maxWidth: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "0" }}>
  {currentContract.rentalDetails.durationMonth}
</span>
                  tháng), kể từ ngày 
                  <span style={{ maxWidth: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "0" }}>
  {currentContract.rentalDetails.startDateDay}
</span>
                  tháng 
                  <span style={{ maxWidth: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "0" }}>
  {currentContract.rentalDetails.startDateMonth}
</span>
                  năm
                  <span style={{ maxWidth: "44px", marginLeft: "4px", marginBottom: "0" }}>
  {currentContract.rentalDetails.startDateYear}
</span>. <br />
                  1.3. Giá cho thuê là 
                  <span style={{ maxWidth: "100px", marginRight: "4px", marginLeft: "4px", marginBottom: "0" }}>
  {currentContract.rentalDetails.rentAmount}
</span>
                  đồng Việt Nam/                
                  <span style={{ maxWidth: "28px", marginRight: "2px", marginLeft: "2px", marginBottom: "0" }}>
  {currentContract.rentalDetails.perMonth}
</span>
                  tháng.
                  (Bằng chữ: 
                    <span style={{ maxWidth: "271px", marginRight: "2px", marginLeft: "2px", marginBottom: "0" }}>
  {currentContract.rentalDetails.rentInWords}
</span>
                  ). <br />
                  1.4. Chi phí sử dụng điện tính theo công tơ điện, đơn giá                 
                  <span style={{ maxWidth: "80px", marginLeft: "4px", marginRight: "2px", marginBottom: "0"}}>
  {currentContract.rentalDetails.electricityPrice}
</span>
                  ĐVN/01 kWh. Số điện khi nhận phòng: 
                  <span style={{ maxWidth: "87px", marginLeft: "4px" }}>
  {currentContract.rentalDetails.meterReading}
</span>. <br />
                  1.5. Phương thức thanh toán: thanh toán bằng tiền Việt Nam thông qua hình thức tiền mặt hoặc chuyển khoản qua tài khoản thụ hưởng: 
                  <span style={{ maxWidth: "350px", marginRight: "2px", marginLeft: "2px", marginBottom: "0" }}>
  {currentContract.rentalDetails.accountName}
</span>
                  số:
                  </label>
                  <ul style={{ listStyle: "none" }}>
                    <li> STK:
                    <span style={{ maxWidth: "200px", marginLeft: "4px", marginRight: "4px", marginBottom: "0"}}>
      {currentContract.rentalDetails.accountNumber}
    </span>
                      Ngân hàng:                 
                      <span style={{ maxWidth: "180px", marginLeft: "4px", marginBottom: "0" }}>
      {currentContract.rentalDetails.bank}
    </span>. <br />
                    </li>
                  </ul>
                  <label>
                  1.6. Thời hạn thanh toán: ngày 
                  <span style={{ maxWidth: "28px", marginRight: "2px", marginLeft: "2px", marginBottom: "0" }}>
  {currentContract.rentalDetails.paymentDay}
</span>
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
                  <button style={printButtonStyle}>
                    In hợp đồng
                  </button>

                </div>
          </p>
      ) : (
        currentContract && (
        <div style={{ fontFamily: "Times New Roman, Times, serif" }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>HỢP ĐỒNG THUÊ PHÒNG</span>
          </div>
          <label style={{ fontStyle: "italic", marginTop: "15px" }}>
            Hôm nay, ngày
            <input
              type="text"
              value={currentContract.date}
              onChange={(e) => handleContractChange("date", e.target.value)}
              style={{ width: "30px", marginLeft: "5px", marginRight: "5px" }}
              
            />
            tháng
            <input
              type="text"
              value={currentContract.month}
              onChange={(e) => handleContractChange("month", e.target.value)}
              style={{ width: "30px", marginLeft: "5px", marginRight: "5px" }}
            />
            năm
            <input
              type="text"
              value={currentContract.year}
              onChange={(e) => handleContractChange("year", e.target.value)}
              style={{ width: "50px", marginLeft: "5px" }}
            />.
                  Tại
                <input 
                  type="text" 
                  value={currentContract.location}
                  onChange={(e) => handleContractChange("location", e.target.value)}
                  style={{ marginLeft: "5px", width: "413px" }} />.
                  Chúng tôi gồm có:
                </label>
                {/* BÊN A - BÊN CHO THUÊ */}
                <label style={{ fontWeight: "bold" }}>BÊN CHO THUÊ (BÊN A):</label> 
                <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{ marginRight: "5px"}}>Ông/bà:</label>
                    <input
                    type="text"
                    value={currentContract.owner.name}
                    onChange={(e) => handleContractChange("name", e.target.value)} 
                    style={{ width: "374px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "40%" }}>
                    <label style={{ marginLeft: "40px", marginRight: "5px" }}>Sinh ngày:</label>
                    <input 
                    type="text"
                    value={currentContract.owner.birthDate}
                    onChange={(e) => handleContractChange("birthDate", e.target.value)} 
                    style={{ width: "175px", marginBottom: "5px", marginLeft: "5px"  }} />.
                  </div>
                </div>
                <label>
                <div style={{ display: "flex"}}>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <label style={{ marginRight: "5px" }}>CCCD số: </label>
                    <input 
                    type="text"
                    value={currentContract.owner.cccd}
                    onChange={(e) => handleContractChange("cccd", e.target.value)} 
                    style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{marginRight: "10px" }}>Ngày cấp: </label>
                    <input 
                    type="text"
                    value={currentContract.owner.cccdIssueDate}
                    onChange={(e) => handleContractChange("cccdIssueDate", e.target.value)} 
                    style={{ width: "60%", marginBottom: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                    <label style={{marginRight: "10px" }}>Nơi cấp: </label>
                    <input 
                    type="text"
                    value={currentContract.owner.cccdIssuePlace}
                    onChange={(e) => handleContractChange("cccdIssuePlace", e.target.value)} 
                    style={{ width: "270px", marginBottom: "5px" }} />.
                  </div>
                </div>
                Hộ khẩu thường trú: 
                <input 
                    type="text"
                    value={currentContract.owner.address}
                    onChange={(e) => handleContractChange("address", e.target.value)} 
                    style={{ width: "595px", marginBottom: "5px", marginLeft: "10px" }} />.	 <br />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "30%" }}>
                    <label style={{ marginRight: "5px" }}>Điện thoại:</label>
                    <input
                    type="text"
                    value={currentContract.owner.phone}
                    onChange={(e) => handleContractChange("phone", e.target.value)} 
                    style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexBasis: "70%" }}>
                    <label style={{ marginLeft: "5px", marginRight: "10px" }}>Là chủ sở hữu:</label>
                    <input
                    type="text"
                    value={currentContract.owner.ownership}
                    onChange={(e) => handleContractChange("ownership", e.target.value)} 
                    style={{ width: "399px", marginBottom: "5px", marginLeft: "5px" }} />.
                  </div>
                </div>
                Địa chỉ: 
                <input 
                    type="text"
                    value={currentContract.owner.addressRoom}
                    onChange={(e) => handleContractChange("addressRoom", e.target.value)} 
                    style={{ width: "665px", marginBottom: "5px", marginLeft: "10px" }} />.	
                </label> <br />
                </div>
                {/* Danh sách người thuê */}
                <label style={{ fontWeight: "bold", marginTop: "20px" }}>BÊN THUÊ (BÊN B):</label>
                {tenants.map((tenant, index) => (
                  <div key={index}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <label style={{ marginRight: "5px" }}>Ông/bà:</label>
                        <input
                          type="text"
                          value={tenant.name}
                          onChange={(e) => handleTenantChange(index, "name", e.target.value)}
                          style={{ width: "375px", marginBottom: "5px", marginLeft: "5px"  }}
                        />
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <label style={{ marginLeft: "40px", marginRight: "5px" }}>Sinh ngày:</label>
                        <input
                          type="text"
                          value={tenant.birthDate}
                          onChange={(e) => handleTenantChange(index, "birthDate", e.target.value)}
                          style={{ width: "175px", marginBottom: "5px", marginLeft: "5px"  }}
                        />.
                      </div>
                    </div>

                    <div style={{ display: "flex"}}>
                      <div style={{ display: "flex", alignItems: "center"}}>
                        <label style={{ marginRight: "5px" }}>CCCD số: </label>
                        <input
                          type="text"
                          value={tenant.id}
                          onChange={(e) => handleTenantChange(index, "id", e.target.value)}
                          style={{ width: "60%", marginBottom: "5px", marginLeft: "5px" }}
                        />.
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <label style={{marginRight: "10px" }}>Ngày cấp: </label>
                        <input
                          type="text"
                          value={tenant.idDay}
                          onChange={(e) => handleTenantChange(index, "idDay", e.target.value)}
                          style={{ width: "60%", marginBottom: "5px" }}
                        />.
                      </div>
                      <div style={{ display: "flex", alignItems: "center", flexBasis: "60%" }}>
                        <label style={{marginRight: "5px" }}>Nơi cấp: </label>
                        <input
                          type="text"
                          value={tenant.idPlace}
                          onChange={(e) => handleTenantChange(index, "idPlace", e.target.value)}
                          style={{ width: "275px", marginBottom: "5px" }}
                        />.
                      </div>
                    </div>
                      Hộ khẩu thường trú: 
                      <input
                          type="text"
                          value={tenant.address}
                          onChange={(e) => handleTenantChange(index, "address", e.target.value)}
                          style={{ width: "595px", marginBottom: "5px", marginLeft: "10px" }} 
                        />.
                    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                      <label style={{ marginRight: "10px" }}>Chủ phòng:</label>
                      <input
                        type="radio"
                        name="owner"
                        checked={tenant.isOwner}
                        onChange={() => handleSetOwner(index)}
                        style={{ marginRight: "5px" }}
                      />
                    </div>

                    {tenants.length > 1 && (
                      <div style={{ position: "relative", marginBottom: "12px"}}>
                        <button onClick={() => handleRemoveTenant(index)} style={deleteTenant}>
                        Xóa
                      </button>
                      </div>
                    )}
                    <br />
                  </div>
                ))}
                {error && <p style={{ color: "red" }}>{error}</p>}
                  <div style={{ position: "relative"}}>
                    <button onClick={handleAddTenant} style={addTenant}>
                      Thêm
                    </button>
                  </div>
                <br />
                <label style={{ fontStyle: "italic" }}>Hai bên cùng thỏa thuận ký hợp đồng với những nội dung sau:</label> <br />
                <label style={{ fontWeight: "bold" }}>ĐIỀU 1: NỘI DUNG CỦA HỢP ĐỒNG</label>
                <label>
                1.1.	Bên A cho bên B thuê: 
                <input 
                    type="text"
                    value={currentContract.rentalDetails.roomCount}
                    onChange={(e) => handleContractChange("roomCount", e.target.value)} 
                    style={{ width: "28px", marginRight: "4px", marginLeft: "4px" }} />
                 phòng tại 
                <input  
                    type="text"
                    value={currentContract.rentalDetails.roomName}
                    onChange={(e) => handleContractChange("roomName", e.target.value)} 
                    style={{ width: "476px", marginLeft: "4px", marginBottom: "5px" }} />.
                Địa chỉ 
                <input  
                    type="text"
                    value={currentContract.rentalDetails.address}
                    onChange={(e) => handleContractChange("address", e.target.value)} 
                    style={{ width: "669px", marginLeft: "10px", marginBottom: "5px"  }} />. <br />
                1.2. Thời hạn cho thuê phòng là 
                <input 
                    type="text"
                    value={currentContract.rentalDetails.durationYear}
                    onChange={(e) => handleContractChange("year", e.target.value)} 
                    style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                năm (                 
                <input 
                    type="text"
                    value={currentContract.rentalDetails.durationMonth}
                    onChange={(e) => handleContractChange("month", e.target.value)} 
                    style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                tháng), kể từ ngày 
                <input  
                    type="text"
                    value={currentContract.rentalDetails.startDateDay}
                    onChange={(e) => handleContractChange("day", e.target.value)} 
                    style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                tháng 
                <input 
                    type="text"
                    value={currentContract.rentalDetails.startDateMonth}
                    onChange={(e) => handleContractChange("month", e.target.value)} 
                    style={{ width: "28px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                năm
                <input  
                    type="text"
                    value={currentContract.rentalDetails.startDateYear}
                    onChange={(e) => handleContractChange("year", e.target.value)} 
                    style={{ width: "44px", marginLeft: "4px", marginBottom: "5px"  }} />. <br />
                1.3. Giá cho thuê là 
                <input  
                    type="text"
                    value={currentContract.rentalDetails.rentAmount}
                    onChange={(e) => handleContractChange("rentAmount", e.target.value)} 
                    style={{ width: "100px", marginRight: "4px", marginLeft: "4px", marginBottom: "5px"  }} />
                đồng Việt Nam/                
                <input  
                    type="text"
                    value={currentContract.rentalDetails.perMonth}
                    onChange={(e) => handleContractChange("perMonth", e.target.value)} 
                    style={{ width: "28px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px"  }} />
                tháng.
                (Bằng chữ: 
                  <input 
                    type="text"
                    value={currentContract.rentalDetails.rentInWords}
                    onChange={(e) => handleContractChange("rentInWords", e.target.value)} 
                    style={{ width: "271px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px"  }} />
                ). <br />
                1.4. Chi phí sử dụng điện tính theo công tơ điện, đơn giá                 
                <input 
                    type="text"
                    value={currentContract.rentalDetails.electricityPrice}
                    onChange={(e) => handleContractChange("electricityPrice", e.target.value)} 
                    style={{ width: "80px", marginLeft: "4px", marginRight: "2px" , marginBottom: "5px"}} />
                ĐVN/01 kWh. Số điện khi nhận phòng: 
                <input 
                    type="text"
                    value={currentContract.rentalDetails.meterReading}
                    onChange={(e) => handleContractChange("meterReading", e.target.value)} 
                    style={{ width: "87px", marginLeft: "4px" }} />. <br />
                1.5. Phương thức thanh toán: thanh toán bằng tiền Việt Nam thông qua hình thức tiền mặt hoặc chuyển khoản qua tài khoản thụ hưởng: 
                <input  
                    type="text"
                    value={currentContract.rentalDetails.accountName}
                    onChange={(e) => handleContractChange("paymentAccount", e.target.value)} 
                    style={{ width: "350px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px" }} />
                số:
                </label>
                <ul style={{ listStyle: "none" }}>
                  <li> STK:
                    <input  
                    type="text"
                    value={currentContract.rentalDetails.accountNumber}
                    onChange={(e) => handleContractChange("accountNumber", e.target.value)} 
                    style={{ width: "200px", marginLeft: "4px", marginRight: "4px", marginBottom: "5px"}} />
                    Ngân hàng:                 
                    <input  
                    type="text"
                    value={currentContract.rentalDetails.bank}
                    onChange={(e) => handleContractChange("bank", e.target.value)} 
                    style={{ width: "180px", marginLeft: "4px", marginBottom: "5px" }} />. <br />
                  </li>
                </ul>
                <label>
                1.6. Thời hạn thanh toán: ngày 
                <input  
                    type="text"
                    value={currentContract.rentalDetails.paymentDay}
                    onChange={(e) => handleContractChange("paymentDay", e.target.value)} 
                    style={{ width: "28px", marginRight: "2px", marginLeft: "2px", marginBottom: "5px" }} />
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
        )
            )}
            <button
              style={saveButtonStyle}
              onClick={handleSaveOrUpdate}
            >
              {isEditMode ? "Đóng" : "Thêm mới"}
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

const printButtonStyle = {
  backgroundColor: "#ccc",
  color: "#767676", 
  padding: "5px 15px", 
  fontSize: "14px", 
  border: "none", 
  borderRadius: "5px",
  cursor: "pointer", 
  marginTop: "-20px",
  position: "absolute",
  left: "40px",
};

printButtonStyle[':hover'] = {
  backgroundColor: "#45a049"
};

const deleteTenant = {
  backgroundColor: "#fff",
  color: "red",
  padding: "2px 10px",
  borderRadius: "5px",
  border: "1.5px solid",
  cursor: "pointer",
  position: "absolute",
  right: "10px",
  
};

const addTenant = {
  backgroundColor: "#fff",
  color: "#31CF80",
  padding: "2px 5px",
  borderRadius: "5px",
  border: "1.5px solid",
  cursor: "pointer",
  position: "absolute",
  right: "10px",
}

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
  zIndex: 1000,
};

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

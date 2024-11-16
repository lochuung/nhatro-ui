<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quản lý khách hàng</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    table {\n      width: 100%;\n      border-collapse: collapse;\n     margin-bottom: 20px;\n    }\n\n    table, th, td {\n      border: 1px solid #ddd;\n    }\n\n    th, td {\n      padding: 10px;\n      text-align: left;\n    }\n\n    th {\n      background-color: #f4f4f4;\n    }\n\n    button {\n      margin: 5px;\n      padding: 8px 12px;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n      background-color: #00BAC7; /* Màu button */\n      color: white;\n    }\n\n    button:hover {\n      background-color: #007a82; /* Màu button khi hover */\n    }\n\n    /* Modal styles */\n    .modal {\n      display: none;\n      position: fixed;\n      z-index: 1;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n      background-color: rgba(0, 0, 0, 0.4);\n    }\n\n    .modal-content {\n      background-color: #fefefe;\n      margin: 10% auto;\n      padding: 20px;\n      border: 1px solid #888;\n      border-radius: 5px;\n      width: 50%;\n      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .close {\n      color: #aaa;\n      float: right;\n      font-size: 28px;\n      font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n      color: black;\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    label {\n      display: block;\n      margin-bottom: 5px;\n      font-weight: bold;\n    }\n\n    input, textarea, select {\n      width: 100%;\n      padding: 8px;\n      margin-bottom: 15px;\n      border: 1px solid #ddd;\n      border-radius: 3px;\n    }\n\n    .modal-button {\n      margin: 5px;\n      padding: 10px 15px;\n      background-color: #00BAC7; /* Màu button */\n      color: white;\n      border: none;\n      border-radius: 3px;\n      cursor: pointer;\n    }\n\n    .modal-button:hover {\n      background-color: #007a82; /* Màu button khi hover */\n    }\n  "
    }}
  />
  <h1 style={{ textAlign: "center" }}>Quản lý khách hàng</h1>

  <button onClick="openModal()">Thêm khách hàng</button>
  
  <table id="customerTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Tên</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th>Địa chỉ</th>
        <th>Ngày sinh</th>
        <th>Trạng thái</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <div id="customerModal" className="modal">
    <div className="modal-content">
      <span className="close" onClick="closeModal()">
        ×
      </span>
      <h2 id="formTitle">Thêm khách hàng</h2>
      <form id="customerForm">
        <input type="hidden" id="customerId" />
        <label htmlFor="name">Tên</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nhập tên"
          required=""
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Nhập email" />
        <label htmlFor="phone_number">Số điện thoại</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          placeholder="Nhập số điện thoại"
          required=""
        />
        <label htmlFor="address">Địa chỉ</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Nhập địa chỉ"
        />
        <label htmlFor="birthday">Ngày sinh</label>
        <input type="date" id="birthday" name="birthday" />
        <label htmlFor="enabled">Trạng thái</label>
        <select id="enabled" name="enabled">
          <option value={1}>Active</option>
          <option value={0}>Inactive</option>
        </select>
        <button type="submit" className="modal-button">
          Lưu
        </button>
      </form>
    </div>
  </div>
</>

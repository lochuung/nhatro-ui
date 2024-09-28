

export default function RoomEdit() {
    return (<>
        <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
                {/* Title */}
                <h1 className="h2">Wizard</h1>
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <a href="javascript: void(0);">Pages</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Wizard
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-9 col-xxl-7">
                    <form className="needs-validation" noValidate="">
                        <ul
                            className="nav nav-pills steps mb-7 mt-n3 w-75 w-xxl-50 mx-auto"
                            id="wizard-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="wizardTabOne"
                                    data-bs-toggle="pill"
                                    data-bs-target="#wizardStepOne"
                                    type="button"
                                    role="tab"
                                    aria-controls="wizardStepOne"
                                    aria-selected="true"
                                >
                                    1
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="wizardTabTwo"
                                    data-bs-toggle="pill"
                                    data-bs-target="#wizardStepTwo"
                                    type="button"
                                    role="tab"
                                    aria-controls="wizardStepTwo"
                                    aria-selected="false"
                                >
                                    2
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="wizardTabThree"
                                    data-bs-toggle="pill"
                                    data-bs-target="#wizardStepThree"
                                    type="button"
                                    role="tab"
                                    aria-controls="wizardStepThree"
                                    aria-selected="false"
                                >
                                    3
                                </button>
                            </li>
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
                                        <h2 className="text-center mb-0">Project settings</h2>
                                        <p className="text-secondary text-center">
                                            General information about your project
                                        </p>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md">
                                                    <label htmlFor="projectName" className="form-label">
                                                        Project Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="projectName"
                                                        placeholder="Your project name"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please add your project name
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <label htmlFor="owner" className="form-label">
                                                        Owner
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="owner"
                                                        placeholder="Owner's name"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please add a name
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md">
                                                    <label htmlFor="url" className="form-label">
                                                        Site Url
                                                    </label>
                                                    <div className="input-group">
                                                        <span
                                                            className="input-group-text text-muted"
                                                            aria-describedby="url"
                                                        >
                                                            https://
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="url"
                                                            placeholder="Url address"
                                                        />
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please add a url address
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <label htmlFor="country" className="form-label">
                                                        Country
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="country"
                                                        required=""
                                                        autoComplete="off"
                                                        data-select='{
                                                                    "placeholder": "Choose..."
                                                                }'
                                                        data-option-template='<span class="d-flex align-items-center py-2"><span class="avatar avatar-circle avatar-xxs"><img class="avatar-img shadow-sm" src="./assets/images/flags/1x1/[[value]].svg" /></span><span class="text-truncate ms-2">[[text]]</span></span>'
                                                        data-item-template='<span class="d-flex align-items-center"><span class="avatar avatar-circle avatar-xxs"><img class="avatar-img shadow-sm" src="./assets/images/flags/1x1/[[value]].svg" /></span><span class="text-truncate ms-2">[[text]]</span></span>'
                                                    >
                                                        <option value="" label="country placeholder" />
                                                        <option value="af">Afghanistan</option>
                                                        <option value="ax">Aland Islands</option>
                                                        <option value="al">Albania</option>
                                                        <option value="dz">Algeria</option>
                                                        <option value="as">American Samoa</option>
                                                        <option value="ad">Andorra</option>
                                                        <option value="ao">Angola</option>
                                                        <option value="ai">Anguilla</option>
                                                        <option value="aq">Antarctica</option>
                                                        <option value="ag">Antigua and Barbuda</option>
                                                        <option value="ar">Argentina</option>
                                                        <option value="am">Armenia</option>
                                                        <option value="aw">Aruba</option>
                                                        <option value="au">Australia</option>
                                                        <option value="at">Austria</option>
                                                        <option value="az">Azerbaijian</option>
                                                        <option value="bs">Bahamas</option>
                                                        <option value="bh">Bahrain</option>
                                                        <option value="bd">Bangladesh</option>
                                                        <option value="bb">Barbados</option>
                                                        <option value="by">Belarus</option>
                                                        <option value="be">Belgium</option>
                                                        <option value="bz">Belize</option>
                                                        <option value="bj">Benin</option>
                                                        <option value="bm">Bermuda</option>
                                                        <option value="bt">Bhutan</option>
                                                        <option value="bo">
                                                            Bolivia (Plurinational State of)
                                                        </option>
                                                        <option value="bq">
                                                            Bonaire, Sint Eustatius and Saba
                                                        </option>
                                                        <option value="ba">Bosnia and Herzegovina</option>
                                                        <option value="bw">Botswana</option>
                                                        <option value="br">Brazil</option>
                                                        <option value="io">
                                                            British Indian Ocean Territory
                                                        </option>
                                                        <option value="bn">Brunei Darussalam</option>
                                                        <option value="bg">Bulgaria</option>
                                                        <option value="bf">Burkina Faso</option>
                                                        <option value="bi">Burundi</option>
                                                        <option value="cv">Cabo Verde</option>
                                                        <option value="kh">Cambodia</option>
                                                        <option value="cm">Cameroon</option>
                                                        <option value="ca">Canada</option>
                                                        <option value="ky">Cayman Islands</option>
                                                        <option value="cf">Central African Republic</option>
                                                        <option value="td">Chad</option>
                                                        <option value="cl">Chile</option>
                                                        <option value="cn">China</option>
                                                        <option value="cx">Christmas Island</option>
                                                        <option value="cc">Cocos (Keeling) Islands</option>
                                                        <option value="co">Colombia</option>
                                                        <option value="km">Comoros</option>
                                                        <option value="cg">Congo</option>
                                                        <option value="cd">
                                                            Congo (the Democratic Republic of the)
                                                        </option>
                                                        <option value="ck">Cook Islands</option>
                                                        <option value="cr">Costa Rica</option>
                                                        <option value="ci">Cote D'ivoire</option>
                                                        <option value="hr">Croatia</option>
                                                        <option value="cu">Cuba</option>
                                                        <option value="cw">Curacao</option>
                                                        <option value="cy">Cyprus</option>
                                                        <option value="cz">Czechia</option>
                                                        <option value="dk">Denmark</option>
                                                        <option value="dj">Djibouti</option>
                                                        <option value="dm">Dominica</option>
                                                        <option value="do">Dominican Republic</option>
                                                        <option value="ec">Ecuador</option>
                                                        <option value="eg">Egypt</option>
                                                        <option value="sv">El Salvador</option>
                                                        <option value="gq">Equatorial Guinea</option>
                                                        <option value="er">Eritrea</option>
                                                        <option value="ee">Estonia</option>
                                                        <option value="et">Ethiopia</option>
                                                        <option value="fk">
                                                            Falkland Islands (Malvinas)
                                                        </option>
                                                        <option value="fo">Faroe Islands</option>
                                                        <option value="fj">Fiji</option>
                                                        <option value="fi">Finland</option>
                                                        <option value="fr">France</option>
                                                        <option value="gf">French Guiana</option>
                                                        <option value="pf">French Polynesia</option>
                                                        <option value="tf">
                                                            French Southern Territories
                                                        </option>
                                                        <option value="ga">Gabon</option>
                                                        <option value="gm">Gambia</option>
                                                        <option value="ge">Georgia</option>
                                                        <option value="de">Germany</option>
                                                        <option value="gh">Ghana</option>
                                                        <option value="gi">Gibraltar</option>
                                                        <option value="gr">Greece</option>
                                                        <option value="gl">Greenland</option>
                                                        <option value="gd">Grenada</option>
                                                        <option value="gp">Guadeloupe</option>
                                                        <option value="gu">Guam</option>
                                                        <option value="gt">Guatemala</option>
                                                        <option value="gg">Guernsey</option>
                                                        <option value="gn">Guinea</option>
                                                        <option value="gw">Guinea-Bissau</option>
                                                        <option value="gy">Guyana</option>
                                                        <option value="ht">Haiti</option>
                                                        <option value="va">Holy See</option>
                                                        <option value="hn">Honduras</option>
                                                        <option value="hk">Hong Kong</option>
                                                        <option value="hu">Hungary</option>
                                                        <option value="is">Iceland</option>
                                                        <option value="in">India</option>
                                                        <option value="id">Indonesia</option>
                                                        <option value="ir">Iran (Islamic Republic of)</option>
                                                        <option value="iq">Iraq</option>
                                                        <option value="ie">Ireland</option>
                                                        <option value="im">Isle of Man</option>
                                                        <option value="il">Israel</option>
                                                        <option value="it">Italy</option>
                                                        <option value="jm">Jamaica</option>
                                                        <option value="jp">Japan</option>
                                                        <option value="je">Jersey</option>
                                                        <option value="jo">Jordan</option>
                                                        <option value="kz">Kazakhstan</option>
                                                        <option value="ke">Kenya</option>
                                                        <option value="ki">Kiribati</option>
                                                        <option value="kp">
                                                            Korea (the Democratic People's Republic of)
                                                        </option>
                                                        <option value="kr">Korea (the Republic of)</option>
                                                        <option value="kw">Kuwait</option>
                                                        <option value="kg">Kyrgyzstan</option>
                                                        <option value="la">
                                                            Lao People's Democratic Republic
                                                        </option>
                                                        <option value="lv">Latvia</option>
                                                        <option value="lb">Lebanon</option>
                                                        <option value="ls">Lesotho</option>
                                                        <option value="lr">Liberia</option>
                                                        <option value="ly">Libya</option>
                                                        <option value="li">Liechtenstein</option>
                                                        <option value="lt">Lithuania</option>
                                                        <option value="lu">Luxembourg</option>
                                                        <option value="mo">Macao</option>
                                                        <option value="mk">North Macedonia</option>
                                                        <option value="mg">Madagascar</option>
                                                        <option value="mw">Malawi</option>
                                                        <option value="my">Malaysia</option>
                                                        <option value="mv">Maldives</option>
                                                        <option value="ml">Mali</option>
                                                        <option value="mt">Malta</option>
                                                        <option value="mh">Marshall Islands</option>
                                                        <option value="mq">Martinique</option>
                                                        <option value="mr">Mauritania</option>
                                                        <option value="mu">Mauritius</option>
                                                        <option value="yt">Mayotte</option>
                                                        <option value="mx">Mexico</option>
                                                        <option value="fm">
                                                            Micronesia (Federated States of)
                                                        </option>
                                                        <option value="md">Moldova (the Republic of)</option>
                                                        <option value="mc">Monaco</option>
                                                        <option value="mn">Mongolia</option>
                                                        <option value="me">Montenegro</option>
                                                        <option value="ms">Montserrat</option>
                                                        <option value="ma">Morocco</option>
                                                        <option value="mz">Mozambique</option>
                                                        <option value="mm">Myanmar</option>
                                                        <option value="na">Namibia</option>
                                                        <option value="nr">Nauru</option>
                                                        <option value="np">Nepal</option>
                                                        <option value="nl">Netherlands</option>
                                                        <option value="nc">New Caledonia</option>
                                                        <option value="nz">New Zealand</option>
                                                        <option value="ni">Nicaragua</option>
                                                        <option value="ne">Niger</option>
                                                        <option value="ng">Nigeria</option>
                                                        <option value="nu">Niue</option>
                                                        <option value="nf">Norfolk Island</option>
                                                        <option value="mp">Northern Mariana Islands</option>
                                                        <option value="no">Norway</option>
                                                        <option value="om">Oman</option>
                                                        <option value="pk">Pakistan</option>
                                                        <option value="pw">Palau</option>
                                                        <option value="ps">Palestine, State of</option>
                                                        <option value="pa">Panama</option>
                                                        <option value="pg">Papua New Guinea</option>
                                                        <option value="py">Paraguay</option>
                                                        <option value="pe">Peru</option>
                                                        <option value="ph">Philippines</option>
                                                        <option value="pn">Pitcairn</option>
                                                        <option value="pl">Poland</option>
                                                        <option value="pt">Portugal</option>
                                                        <option value="pr">Puerto Rico</option>
                                                        <option value="qa">Qatar</option>
                                                        <option value="re">Reunion</option>
                                                        <option value="ro">Romania</option>
                                                        <option value="ru">Russian Federation</option>
                                                        <option value="rw">Rwanda</option>
                                                        <option value="bl">Saint Barthelemy</option>
                                                        <option value="sh">
                                                            Saint Helena, Ascension and Tristan Da Cunha
                                                        </option>
                                                        <option value="kn">Saint Kitts and Nevis</option>
                                                        <option value="lc">Saint Lucia</option>
                                                        <option value="mf">Saint Martin (French Part)</option>
                                                        <option value="pm">Saint Pierre and Miquelon</option>
                                                        <option value="vc">
                                                            Saint Vincent and The Grenadines
                                                        </option>
                                                        <option value="ws">Samoa</option>
                                                        <option value="sm">San Marino</option>
                                                        <option value="st">Sao Tome and Principe</option>
                                                        <option value="sa">Saudi Arabia</option>
                                                        <option value="sn">Senegal</option>
                                                        <option value="rs">Serbia</option>
                                                        <option value="sc">Seychelles</option>
                                                        <option value="sl">Sierra Leone</option>
                                                        <option value="sg">Singapore</option>
                                                        <option value="sx">Sint Maarten (Dutch Part)</option>
                                                        <option value="sk">Slovakia</option>
                                                        <option value="si">Slovenia</option>
                                                        <option value="sb">Solomon Islands</option>
                                                        <option value="so">Somalia</option>
                                                        <option value="za">South Africa</option>
                                                        <option value="gs">
                                                            South Georgia and The South Sandwich Islands
                                                        </option>
                                                        <option value="ss">South Sudan</option>
                                                        <option value="es">Spain</option>
                                                        <option value="lk">Sri Lanka</option>
                                                        <option value="sd">Sudan</option>
                                                        <option value="sr">Suriname</option>
                                                        <option value="sj">Svalbard and Jan Mayen</option>
                                                        <option value="sz">Eswatini</option>
                                                        <option value="se">Sweden</option>
                                                        <option value="ch">Switzerland</option>
                                                        <option value="sy">Syrian Arab Republic</option>
                                                        <option value="tw">Taiwan (Province of China)</option>
                                                        <option value="tj">Tajikistan</option>
                                                        <option value="tz">
                                                            Tanzania, United Republic of
                                                        </option>
                                                        <option value="th">Thailand</option>
                                                        <option value="tl">Timor-Leste</option>
                                                        <option value="tg">Togo</option>
                                                        <option value="tk">Tokelau</option>
                                                        <option value="to">Tonga</option>
                                                        <option value="tt">Trinidad and Tobago</option>
                                                        <option value="tn">Tunisia</option>
                                                        <option value="tr">Turkey</option>
                                                        <option value="tm">Turkmenistan</option>
                                                        <option value="tc">Turks and Caicos Islands</option>
                                                        <option value="tv">Tuvalu</option>
                                                        <option value="ug">Uganda</option>
                                                        <option value="ua">Ukraine</option>
                                                        <option value="ae">United Arab Emirates</option>
                                                        <option value="gb">
                                                            United Kingdom of Great Britain and Northern Ireland
                                                        </option>
                                                        <option value="us">United States of America</option>
                                                        <option value="um">
                                                            United States Minor Outlying Islands
                                                        </option>
                                                        <option value="uy">Uruguay</option>
                                                        <option value="uz">Uzbekistan</option>
                                                        <option value="vu">Vanuatu</option>
                                                        <option value="ve">
                                                            Venezuela (Bolivarian Republic of)
                                                        </option>
                                                        <option value="vn">Viet Nam</option>
                                                        <option value="vg">Virgin Islands (British)</option>
                                                        <option value="vi">Virgin Islands (U.S.)</option>
                                                        <option value="wf">Wallis and Futuna</option>
                                                        <option value="eh">Western Sahara</option>
                                                        <option value="ye">Yemen</option>
                                                        <option value="zm">Zambia</option>
                                                        <option value="zw">Zimbabwe</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select a country
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col">
                                                    <label className="form-label">
                                                        Project Description
                                                    </label>
                                                    <div
                                                        data-quill='{"placeholder" : "Details about your project"}'
                                                        className="mb-3 h-150px"
                                                    />
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="private"
                                                />
                                                <label className="form-check-label" htmlFor="private">
                                                    Private project
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-between">
                                            {/* Button */}
                                            <button type="button" className="btn btn-light">
                                                Cancel
                                            </button>
                                            {/* Button */}
                                            <a
                                                className="btn btn-primary"
                                                data-toggle="wizard"
                                                href="#wizardStepTwo"
                                            >
                                                Next
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
                            >
                                {/* Card */}
                                <div className="card border-0 py-6 px-md-6">
                                    <div className="card-body">
                                        <h2 className="text-center mb-0">Team settings</h2>
                                        <p className="text-secondary text-center">
                                            Just some details about the team
                                        </p>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md">
                                                    <label htmlFor="teamLeader" className="form-label">
                                                        Team Leader
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="teamLeader"
                                                        placeholder="Team leader's name"
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please add a name
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <label htmlFor="teamLeaderEmail" className="form-label">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="teamLeaderEmail"
                                                        placeholder="Team leader's email address"
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please add an email address
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="teamMembers" className="form-label">
                                                        Team Members
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="teamMembers"
                                                        required=""
                                                        data-select='{
                                                                "placeholder": "Choose..."
                                                            }'
                                                        multiple=""
                                                    >
                                                        <option value="" label="name placeholder" />
                                                        <option value="Norma Peck">Norma Peck</option>
                                                        <option value="Perry Hart">Perry Hart</option>
                                                        <option value="Jimmy Riley">Jimmy Riley</option>
                                                        <option value="Martin Edwards">Martin Edwards</option>
                                                        <option value="Katie Fowler">Katie Fowler</option>
                                                        <option value="Zachary Ortiz">Zachary Ortiz</option>
                                                        <option value="Dylan Sutton">Dylan Sutton</option>
                                                        <option value="Melissa Stewart">
                                                            Melissa Stewart
                                                        </option>
                                                        <option value="Lester William">Lester William</option>
                                                        <option value="Chloe Brewer">Chloe Brewer</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select your team members
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Project cover</label>
                                            <div
                                                className="dropzone text-center px-4 py-6"
                                                data-dropzone=""
                                            >
                                                <div className="dz-message">
                                                    <img
                                                        className="avatar avatar-xxl mb-3"
                                                        src="https://d33wubrfki0l68.cloudfront.net/dab0efca2a3dfb58288f0abf1251e668b2f56229/96c61/assets/images/illustrations/upload-illustration.svg"
                                                        alt="..."
                                                    />
                                                    <h5 className="mb-4">Drag and drop your file here</h5>
                                                    <p className="mb-4">or</p>
                                                    {/* Button */}
                                                    <span className="btn btn-sm btn-gray-300">
                                                        Browse files
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="form-text">
                                                Please use an image at least 800px x 600px
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-between">
                                            {/* Button */}
                                            <a
                                                className="btn btn-light"
                                                data-toggle="wizard"
                                                href="#wizardStepOne"
                                            >
                                                Previous
                                            </a>
                                            {/* Button */}
                                            <a
                                                className="btn btn-primary"
                                                data-toggle="wizard"
                                                href="#wizardStepThree"
                                            >
                                                Next
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="wizardStepThree"
                                role="tabpanel"
                                aria-labelledby="wizardTabThree"
                            >
                                {/* Card */}
                                <div className="card border-0 py-6 px-md-6">
                                    <div className="card-body">
                                        <h2 className="text-center mb-0">
                                            Notification and alert settings
                                        </h2>
                                        <p className="text-secondary text-center">
                                            Set up notifications and alers frequency
                                        </p>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md">
                                                    <label htmlFor="recipientEmail" className="form-label">
                                                        Recipient's email adress
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="recipientEmail"
                                                        placeholder="email@domain.com"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please add an email address
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <label
                                                        htmlFor="notificationAmount"
                                                        className="form-label"
                                                    >
                                                        Amount of notification
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="notificationAmount"
                                                        placeholder="Notification number"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please select a number
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                        <div className="mb-7">
                                            <div className="row">
                                                <div className="col-md">
                                                    <label
                                                        htmlFor="notificationFrequency"
                                                        className="form-label"
                                                    >
                                                        Notifications frequency
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="notificationFrequency"
                                                        required=""
                                                        data-select='{
                                                                "placeholder": "Choose..."
                                                            }'
                                                    >
                                                        <option value="" label="date placeholder" />
                                                        <option value="bg-success">once a day</option>
                                                        <option value="bg-info">twice a day</option>
                                                        <option value="bg-warning">once an hour</option>
                                                        <option value="bg-danger">every 30 minutes</option>
                                                        <option value="bg-danger">every 5 minutes</option>
                                                        <option value="bg-danger">every minutes</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select a frequency
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <label
                                                        htmlFor="notificationHour"
                                                        className="form-label"
                                                    >
                                                        Hour (CET)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="notificationHour"
                                                        placeholder="HH:mm"
                                                        required=""
                                                        data-flatpickr='{
                                                            "enableTime": "true",
                                                            "noCalendar": "true",
                                                            "dateFormat": "H:i",
                                                            "time_24hr": "true"
                                                        }'
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please select time
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="sendAlerts"
                                                />
                                                <label className="form-check-label" htmlFor="sendAlerts">
                                                    Send alerts
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md">
                                                    <label htmlFor="mentionValue" className="form-label">
                                                        Change in mention value
                                                    </label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="mentionValue"
                                                        />
                                                        <span
                                                            className="input-group-text"
                                                            aria-describedby="mentionValue"
                                                        >
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                height={12}
                                                                width={12}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M2.25,21.75l19.5-19.5Z"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                />
                                                                <path
                                                                    d="M15.750 18.750 A3.000 3.000 0 1 0 21.750 18.750 A3.000 3.000 0 1 0 15.750 18.750 Z"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                />
                                                                <path
                                                                    d="M2.250 5.250 A3.000 3.000 0 1 0 8.250 5.250 A3.000 3.000 0 1 0 2.250 5.250 Z"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md">
                                                    <label htmlFor="mediaReach" className="form-label">
                                                        Change in social media reach
                                                    </label>
                                                    <div className="input-group input-group-merge">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="mediaReach"
                                                        />
                                                        <span
                                                            className="input-group-text"
                                                            aria-describedby="mentionValue"
                                                        >
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                height={12}
                                                                width={12}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M2.25,21.75l19.5-19.5Z"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                />
                                                                <path
                                                                    d="M15.750 18.750 A3.000 3.000 0 1 0 21.750 18.750 A3.000 3.000 0 1 0 15.750 18.750 Z"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                />
                                                                <path
                                                                    d="M2.250 5.250 A3.000 3.000 0 1 0 8.250 5.250 A3.000 3.000 0 1 0 2.250 5.250 Z"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            {/* / .row */}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-between">
                                            {/* Button */}
                                            <a
                                                className="btn btn-light"
                                                data-toggle="wizard"
                                                href="#wizardStepTwo"
                                            >
                                                Previous
                                            </a>
                                            {/* Button */}
                                            <button type="button" className="btn btn-primary">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>{" "}
            {/* / .row */}
        </div>{" "}
        {/* / .container-fluid */}
    </>
    );
}
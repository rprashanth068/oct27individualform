import React, { Component } from 'react';
import './App.css'
import save_ico from './icons/NRD-00001_02013_ICO_Save ff6600_001.svg'
import delete_ico from './icons/NRD-00001_02013_ICO_Delete ff6600_001.svg'
import edit_ico from './icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg'
import plus_ico from './icons/NRD-00001_02013_ICO_New ff6600_001.svg'
import toggle_ico from './icons/NRD-00001_02013_ICO_ToggleLeft cccccc_001.svg'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      states: ['Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District Of Columbia',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'],
      countries: ['Canada',
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antigua & Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas, The',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia & Herzegovina',
        'Botswana',
        'Brazil',
        'British Virgin Is.',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burma',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Cape Verde',
        'Cayman Islands',
        'Central African Rep.',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo, Dem. Rep.',
        'Congo, Repub. of the',
        'Cook Islands',
        'Costa Rica',
        'Cote d Ivoire',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'East Timor',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'Gabon',
        'Gambia, The',
        'Gaza Strip',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Korea, North',
        'Korea, South',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macau',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia, Fed. St.',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'N. Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Helena',
        'Saint Kitts & Nevis',
        'Saint Lucia',
        'St Pierre & Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome & Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Togo',
        'Tonga',
        'Trinidad & Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks & Caicos Is',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Virgin Islands',
        'Wallis and Futuna',
        'West Bank',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe']

    }
  }


  render() {
    return (

      <div className="container main-container ">
        <h5 className="contact-header">Contact</h5>
        <div className="contact-toolbar">


          &nbsp;
          &nbsp;

          <img src={save_ico}
            height="20px"
            width="20px"
            className="saveicons"
            alt="saveicon"
          />
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;

          <img src={delete_ico}
            height="20px"
            width="20px"
            className="deleteicons"
            alt="deleteicon"
          />

          &nbsp;
          &nbsp;
          &nbsp;


          <div className="togglecontrol">
            <div className="row toggleupperspace">
              <div className="col4">
                <span className="togglespan">Individuals</span>
              </div>
              &nbsp;
              &nbsp;
         <div className="col4">
                <img src={toggle_ico}
                  height="25px"
                  width="25px"
                  className="toggleicon"
                  alt="toggleicon"
                />
              </div>
              &nbsp;
              &nbsp;
            <div className="col4">
                <span className="togglespan">Entities</span>
              </div>
            </div>
          </div>

          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;

        </div>

        <div className="container myform">
          <h5>Name</h5>
          <div className="row">
            <div className="col-2">
              <div class="form-group">
                <label for="formGroupExampleInput">First Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-2">
              <div class="form-group">
                <label for="formGroupExampleInput">Middle Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-2">
              <div class="form-group">
                <label for="formGroupExampleInput">Last Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-3">
              <div class="form-group">
                <label for="formGroupExampleInput">Preferred Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-2">
              <div class="form-group">
                <div class="form-check">
                  <span>
                    <label class="form-check-box" className="labelposition" for="gridCheck">
                      Deceased
                </label>
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                  </span>
                </div>

              </div>

            </div>

          </div>

          <hr />

          <div className="row">
            <div className="col-12">
              <h5>Contact</h5>
              <div className="row ">
                <div className="col-2">
                  <div class="homephn" >
                    <label for="formGroupExampleInput">Home Phone</label>
                    <input type="text" class="form-control" maxlength="12" id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-2">
                  <div class="mobileno">
                    <label for="formGroupExampleInput">Mobile Number</label>
                    <input type="text" class="form-control" maxlength="12" id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-2">
                  <div class="businessphn">
                    <label for="formGroupExampleInput">Business Phone</label>
                    <input type="text" class="form-control" maxlength="12" id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-1">
                  <div class="extension">
                    <label for="formGroupExampleInput">Ext</label>
                    <input type="text" class="form-control" maxlength="8" id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-2">
                  <div class="faxno">
                    <label for="formGroupExampleInput">Fax Number</label>
                    <input type="text" class="form-control" maxlength="12" id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <div class="email">
                    <label for="formGroupExampleInput">Email Address</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <hr />

          <h5>Address</h5>
          <div className="row">
            <div className="col-4">
              <div class="form-group">
                <label for="formGroupExampleInput">Address</label>
                <textarea rows="5" type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>

            <div className="col-4">

              <div>

                <div class="city">

                  <label for="formGroupExampleInput">City/Municipality</label>

                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />

                </div>

              </div>

              <div>


                <div class="province">
                  <label for="formGroupExampleInput">Province/State</label>
                  <select className="form-control" selected="1">
                    {
                      this.state.states.map((v, i) => {
                        return (
                          <option key={i} value="i">{v}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div class="contry">
                  <label for="formGroupExampleInput">Country</label>
                  <select className="form-control" selected="1">
                    {
                      this.state.countries.map((v, i) => {
                        return (
                          <option key={i} value="i">{v}</option>
                        )
                      })
                    }

                  </select>
                </div>
              </div>
              <div>
                <div class="postalcode">
                  <label for="formGroupExampleInput">Postal/Zipcode</label>
                  <input type="text" class="form-control" maxlength="7" id="formGroupExampleInput" placeholder=" " />
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-4">
              <div class="form-group">
                <label for="formGroupExampleInput">Home Quarter</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-4">
              <div class="form-group align-residence">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-residence" for="gridCheck">
                    Residence is the same as listed address
                </label>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <h5>Tax Number </h5>
          <div className="row">
            <div className="col-3">
              <div class="form-group">
                <label for="formGroupExampleInput">GST#</label>
                <input type="text" class="form-control" maxlength="17" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-3">
              <div class="form-group">
                <label for="formGroupExampleInput">HST#</label>
                <input type="text" class="form-control" maxlength="17" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-3">
              <div class="form-group">
                <label for="formGroupExampleInput">PST#</label>
                <input type="text" class="form-control" maxlength="8" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-3">
              <div class="form-group">
                <label for="formGroupExampleInput">QST#</label>
                <input type="text" class="form-control" maxlength="15" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
          </div>
          <hr />

          <h5>Parent (Individual or Entity)</h5>
          <div className="row">
            <div className="col-6">
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-1 usericon-align">
              <i class="fas fa-user"></i>

            </div>
          </div>
          <hr />

          <h5>Comments</h5>

          <div>

            <img src={edit_ico}
              height="18px"
              width="18px"
              className="icons"
              alt="editicon"
            />





            &nbsp;
            &nbsp;
            &nbsp;
  
  
          <img src={delete_ico}
              height="18px"
              width="18px"
              className="deleteicon"
              alt="deleteicon"
            />

          </div>



          <div className="row">



            <div className="col-11">



              <div class="form-group custom-form-input">



                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />



              </div>



            </div>



            <div className="col-1 icons-align">

              <img src={plus_ico}
                height="20px"
                width="20px"
                className="plusicon"
                alt="plusicon"
              />



            </div>



          </div>



          <div className="row">



            <div className="col-12 scroll-table">



              <table class="table table-bordered table-striped">



                <thead>



                  <tr>



                    <th scope="row" >



                      <div class="form-check form-checkbox-align">



                        <input class="form-check-input" type="checkbox" id="gridCheck" />



                      </div>



                    </th>





                    <th scope="col">General comment regarding Individual</th>



                    <th scope="col">Date</th>



                    <th scope="col">Who</th>



                  </tr>



                </thead>



                <tbody>



                  <tr>



                    <th scope="row">



                      <div class="form-check">



                        <input class="form-check-input" type="checkbox" id="gridCheck" />



                      </div>



                    </th>



                    <td>Comment about person</td>



                    <td>July 25 2019</td>



                    <td>Michelle Garnett</td>



                  </tr>



                  <tr>



                    <th scope="row">



                      <div class="form-check">



                        <input class="form-check-input" type="checkbox" id="gridCheck" />



                      </div>



                    </th>



                    <td>Comment about person</td>



                    <td>July 25 2019</td>



                    <td>Michelle Garnett</td>



                  </tr>



                  <tr>



                    <th scope="row">



                      <div class="form-check">



                        <input class="form-check-input" type="checkbox" id="gridCheck" />



                      </div>



                    </th>



                    <td>Comment about person</td>



                    <td>July 25 2019</td>



                    <td>Michelle Garnett</td>



                  </tr>



                  <tr>



                    <th scope="row">



                      <div class="form-check">



                        <input class="form-check-input" type="checkbox" id="gridCheck" />     */}
  
  
  
                  </div>



                    </th>



                    <td>Comment about person</td>



                    <td>July 25 2019</td>



                    <td>Michelle Garnett</td>



                  </tr>



                  <tr>



                    <th scope="row">



                      <div class="form-check">



                        <input class="form-check-input" type="checkbox" id="gridCheck" />



                      </div>



                    </th>



                    <td>Comment about person</td>



                    <td>July 25 2019</td>



                    <td>Michelle Garnett</td>



                  </tr>



                </tbody>



              </table>



            </div>



          </div>







          <hr />

          <h5>Documents</h5>

          <div>

            {/* <span><i class="far fa-edit"></i></span> */}
            <img src={edit_ico}
              height="18px"
              width="18px"
              className="icons"
              alt="editicon"
            />

            &nbsp;
            &nbsp;
            &nbsp;
  
         {/*  <span><i class="far fa-trash-alt"></i></span> */}

            <img src={delete_ico}
              height="18px"
              width="18px"
              className="icons"
              alt="deleteicon"
            />

          </div>

          <div className="row">

            <div className="col-11">

              <div class="form-group custom-form-input">


                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" " />

              </div>

            </div>

            <div className="col-1 icons-align">

              <i class="far fa-2x fa-folder"></i>

            </div>

          </div>

          <div className="row">

            <div className="col-12 scroll-table">

              <table class="table table-bordered table-striped">

                <thead>

                  <tr>

                    <th scope="col">

                      <div class="form-check form-check-align">

                        <input class="form-check-input" type="checkbox" id="gridCheck" />

                      </div>

                    </th>


                    <th scope="col">Document Name</th>

                    <th scope="col">Date</th>

                    <th scope="col">Who uploaded</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <th scope="row">

                      <div class="form-check form-check-align">

                        <input class="form-check-input" type="checkbox" id="gridCheck" />

                      </div>

                    </th>

                    <td>abc.docx</td>

                    <td>June 25 2019</td>

                    <td>Dave king</td>

                  </tr>

                  <tr>

                    <th scope="row">

                      <div class="form-check">

                        <input class="form-check-input" type="checkbox" id="gridCheck" />

                      </div>

                    </th>

                    <td>xyz.xlsx</td>

                    <td>June 25 2019</td>

                    <td>Dave king</td>

                  </tr>

                  <tr>

                    <th scope="row">

                      <div class="form-check">

                        <input class="form-check-input" type="checkbox" id="gridCheck" />

                      </div>

                    </th>

                    <td>pqr.pdf</td>

                    <td>June 25 2019</td>

                    <td>Dave king</td>

                  </tr>

                  <tr>

                    <th scope="row">

                      <div class="form-check">

                        <input class="form-check-input" type="checkbox" id="gridCheck" />

                      </div>

                    </th>

                    <td>mnl.docx</td>

                    <td>June 25 2019</td>

                    <td>Dave king</td>

                  </tr>

                  <tr>

                    <th scope="row">

                      <div class="form-check">

                        <input class="form-check-input" type="checkbox" id="gridCheck" />

                      </div>

                    </th>

                    <td>jkl.txt</td>

                    <td>June 25 2019</td>

                    <td>Dave king</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>



        </div>

      </div>


    )

  }


}
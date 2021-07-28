<template>
  <div class="lato-font clr-000000">
    <div class="headorder">
      <div class="padd-8-16 clr-282828">
        <label class="fsize16 marg-0 fw-600 clr-000000"
          >Document Review -
        </label>
      </div>

      <div class="marg-r-8 padd-l-16 w-100">
        <button
          class="
            bttnalign
            marg-l-16
            headBtns
            active
            clr-000000
            mar-right8
            showSingle
          "
          target="1"
          @click="getPanCard()"
        >
          PAN CARD
        </button>
        <!-- <button class="bttnalign marg-l-16 headBtns clr-000000 mar-right8">
          Basic Info
        </button> -->
        <button
          class="bttnalign headBtns clr-000000 mar-right8 showSingle"
          @click="getaddress()"
          target="2"
        >
          Address
        </button>
        <button
          class="bttnalign headBtns clr-000000 mar-right8 showSingle"
          target="3"
          @click="permanentaddress()"
        >
          Perm.Address
        </button>
        <button
          class="bttnalign headBtns clr-000000 mar-right8 showSingle"
          target="4"
          @click="bankdetails()"
        >
          Bank Details
        </button>
        <button
          class="bttnalign headBtns clr-000000 mar-right8 showSingle"
          target="5"
          @click="additionaldetail()"
        >
          Additional Details
        </button>
        <span class="img" style="float: right">
          <span class="search-box">
            <span class="searchwhole">
              <span
                ><img
                  class="h-16 w-16 marg-l-5 marg-b-2"
                  src="@/assets/Search.svg"
                  alt=""
              /></span>
              <span class="searchinput">
                <input
                  class="placeholdsearch outline-none"
                  type="search"
                  placeholder="Search"
                  autocorrect="off"
                  oninput="this.value = this.value.toUpperCase()"
                />
              </span>
            </span>
          </span>
          <!-- <span class="vl"></span> -->
          <span class="downlo" id="btnExport"
            ><img
              class="marg0-3-8 h-20 w-20"
              src="@/assets/downloadIcon.svg"
              alt=""
          /></span>

          <!-- <span class="vl"></span> -->

          <span class="search"
            ><img
              class="h-16 w-16 marg0-2-8"
              src="@/assets/refreshIcon.svg"
              alt=""
          /></span>
        </span>
      </div>
      <hr class="solid2" />
    </div>
    <div class="row m-0 targetDiv" id="div1">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0 padd-0">
        <div class="h-64 ml-4 mt-6">
          <span class="">
            <div class="">
              <select
                class="
                  custom-select
                  border-radius
                  borderclr-cbcb
                  w-280
                  h-40
                  fsize14
                  pl-2
                  lato-font
                  outline-none
                  clr-e1e1e1
                "
              >
                <option class="fsize12" value="null" role.selected hidden>
                  PAN CARD
                </option>
                <option class="fsize12" value="Address Proof Document">
                  Address Proof Document
                </option>
                <option class="fsize12" value=">Aadhaar Card">
                  Aadhaar Card
                </option>
                <option class="fsize12" value="Bank Proof">Bank Proof</option>
                <option value="40" class="Income Proof">Income Proof</option>
                <option value="40" class="Signature">Signature</option>
                <option value="40" class="Photo Proof">Photo Proof</option>
                <option value="40" class="Photo Proof">
                  Signed ekyc Document
                </option>
                <option value="40" class="Photo Proof">IVR</option>
              </select>
            </div>
          </span>
        </div>

        <div class="w-426 h-268 bdrclr-2e3031 ml-4 mt-6"></div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 padd-0 mt-6">
        <div class="fsize12 clr-56585a">Name</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.applicateName }}
          </label>
        </div>
        <div class="mt-4 fsize12 clr-56585a">PAN No</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.panNo }}
          </label>
        </div>
        <div class="mt-4 fsize12 clr-56585a">DOB</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14"> {{ this.dOb }} </label>
        </div>
      </div>
    </div>

    <div class="row m-0 targetDiv" id="div2" style="display: none">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0 padd-0">
        <div class="h-64 ml-4 mt-6">
          <span class="">
            <div class="">
              <select
                class="
                  custom-select
                  border-radius
                  borderclr-cbcb
                  w-280
                  h-40
                  fsize14
                  pl-2
                  lato-font
                  outline-none
                  clr-e1e1e1
                "
              >
                <option class="fsize12" value="null" role.selected hidden>
                  PAN CARD
                </option>
                <option class="fsize12" value="Address Proof Document">
                  Address Proof Document
                </option>
                <option class="fsize12" value=">Aadhaar Card">
                  Aadhaar Card
                </option>
                <option class="fsize12" value="Bank Proof">Bank Proof</option>
                <option value="40" class="Income Proof">Income Proof</option>
                <option value="40" class="Signature">Signature</option>
                <option value="40" class="Photo Proof">Photo Proof</option>
                <option value="40" class="Photo Proof">
                  Signed ekyc Document
                </option>
                <option value="40" class="Photo Proof">IVR</option>
              </select>
            </div>
          </span>
        </div>

        <div class="w-426 h-268 bdrclr-2e3031 ml-4 mt-6"></div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 padd-0 mt-6">
        <div class="fsize12 clr-56585a">AddressLine1</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.addressline1 }}
          </label>
        </div>
        <div class="mt-4 fsize12 clr-56585a">Pin Code</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.pincode }}
          </label>
        </div>

        <div class="mt-4 fsize12 clr-56585a">City</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.city }}
          </label>
        </div>

        <div class="mt-4 fsize12 clr-56585a">State</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.State }}
          </label>
        </div>
      </div>
    </div>

    <div class="row m-0 targetDiv" id="div3" style="display: none">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0 padd-0">
        <div class="h-64 ml-4 mt-6">
          <span class="">
            <div class="">
              <select
                class="
                  custom-select
                  border-radius
                  borderclr-cbcb
                  w-280
                  h-40
                  fsize14
                  pl-2
                  lato-font
                  outline-none
                  clr-e1e1e1
                "
              >
                <option class="fsize12" value="null" role.selected hidden>
                  PAN CARD
                </option>
                <option class="fsize12" value="Address Proof Document">
                  Address Proof Document
                </option>
                <option class="fsize12" value=">Aadhaar Card">
                  Aadhaar Card
                </option>
                <option class="fsize12" value="Bank Proof">Bank Proof</option>
                <option value="40" class="Income Proof">Income Proof</option>
                <option value="40" class="Signature">Signature</option>
                <option value="40" class="Photo Proof">Photo Proof</option>
                <option value="40" class="Photo Proof">
                  Signed ekyc Document
                </option>
                <option value="40" class="Photo Proof">IVR</option>
              </select>
            </div>
          </span>
        </div>

        <div class="w-426 h-268 bdrclr-2e3031 ml-4 mt-6"></div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 padd-0 mt-6">
        <div class="fsize12 clr-56585a">AddressLine1</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.permanentAddress }}
          </label>
        </div>
        <div class="mt-4 fsize12 clr-56585a">Pin Code</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.perpin }}
          </label>
        </div>

        <div class="mt-4 fsize12 clr-56585a">City</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.percity }}
          </label>
        </div>

        <div class="mt-4 fsize12 clr-56585a">State</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.perstate }}
          </label>
        </div>
      </div>
    </div>

    <div class="row m-0 targetDiv" id="div4" style="display: none">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0 padd-0">
        <div class="h-64 ml-4 mt-6">
          <span class="">
            <div class="">
              <select
                class="
                  custom-select
                  border-radius
                  borderclr-cbcb
                  w-280
                  h-40
                  fsize14
                  pl-2
                  lato-font
                  outline-none
                  clr-e1e1e1
                "
              >
                <option class="fsize12" value="null" role.selected hidden>
                  PAN CARD
                </option>
                <option class="fsize12" value="Address Proof Document">
                  Address Proof Document
                </option>
                <option class="fsize12" value=">Aadhaar Card">
                  Aadhaar Card
                </option>
                <option class="fsize12" value="Bank Proof">Bank Proof</option>
                <option value="40" class="Income Proof">Income Proof</option>
                <option value="40" class="Signature">Signature</option>
                <option value="40" class="Photo Proof">Photo Proof</option>
                <option value="40" class="Photo Proof">
                  Signed ekyc Document
                </option>
                <option value="40" class="Photo Proof">IVR</option>
              </select>
            </div>
          </span>
        </div>

        <div class="w-426 h-268 bdrclr-2e3031 ml-4 mt-6"></div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 padd-0 mt-6">
        <div class="fsize12 clr-56585a">IFSC Code</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.iffccode }}
          </label>
        </div>
        <div class="mt-4 fsize12 clr-56585a">Bank Name</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.bankname }}
          </label>
        </div>

        <div class="mt-4 fsize12 clr-56585a">Bank Address</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.bankaddress }}
          </label>
        </div>

        <div class="mt-4 fsize12 clr-56585a">MICR Code</div>
        <div class="clr-000000 fsize12 mt-1">
          <input
            class="w-16 h-16 marg-t-2"
            type="checkbox"
            name="c2"
            value="c2"
            id="corporatebanking"
          />

          <label class="marg-0 pl-2 valign-top fsize14">
            {{ this.micrcode }}
          </label>
        </div>
      </div>
    </div>
    <div class="row m-0 targetDiv" id="div5" style="display: none">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 p-0 padd-0">
        <div class="h-64 ml-4 mt-6">
          <span class="">
            <div class="">
              <select
                class="
                  custom-select
                  border-radius
                  borderclr-cbcb
                  w-280
                  h-40
                  fsize14
                  pl-2
                  lato-font
                  outline-none
                  clr-e1e1e1
                "
              >
                <option class="fsize12" value="null" role.selected hidden>
                  PAN CARD
                </option>
                <option class="fsize12" value="Address Proof Document">
                  Address Proof Document
                </option>
                <option class="fsize12" value=">Aadhaar Card">
                  Aadhaar Card
                </option>
                <option class="fsize12" value="Bank Proof">Bank Proof</option>
                <option value="40" class="Income Proof">Income Proof</option>
                <option value="40" class="Signature">Signature</option>
                <option value="40" class="Photo Proof">Photo Proof</option>
                <option value="40" class="Photo Proof">
                  Signed ekyc Document
                </option>
                <option value="40" class="Photo Proof">IVR</option>
              </select>
            </div>
          </span>
        </div>

        <div class="w-426 h-268 bdrclr-2e3031 ml-4 mt-6"></div>
      </div>
      <div
        class="
          row
          marg-0
          col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5
          padd-0
          mt-6
        "
      >
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 padd-0 mt-6">
          <div class="fsize12 clr-56585a">Occupation Type</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.oCcupation }}
            </label>
          </div>
          <div class="mt-4 fsize12 clr-56585a">Work Profile</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.workprofile }}
            </label>
          </div>

          <div class="mt-4 fsize12 clr-56585a">Name Of Company/Business</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.companyname }}
            </label>
          </div>

          <div class="mt-4 fsize12 clr-56585a">Address Of Occupation</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.occupationaddress }}
            </label>
          </div>
          <div class="mt-4 fsize12 clr-56585a">No Of Years Of Experience</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id=""
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.workexperience }}
            </label>
          </div>

          <div class="mt-4 fsize12 clr-56585a">Source Of Income</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id=""
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.sourceincome }}
            </label>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 padd-0 mt-6">
          <div class="fsize12 clr-56585a">Who Will Place The Order</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.placeorder }}
            </label>
          </div>
          <div class="mt-4 fsize12 clr-56585a">Income Range</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.incomerange }}
            </label>
          </div>

          <div class="mt-4 fsize12 clr-56585a">Net Worth</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.networth }}
            </label>
          </div>

          <div class="mt-4 fsize12 clr-56585a">Educational Qualification</div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id="corporatebanking"
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.eduqualification }}
            </label>
          </div>
          <div class="mt-4 fsize12 clr-56585a">
            Trading/ Investment Experience
          </div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id=""
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.tradingexperience }}
            </label>
          </div>

          <div class="mt-4 fsize12 clr-56585a">
            Dealing With Any Other Broker
          </div>
          <div class="clr-000000 fsize12 mt-1">
            <input
              class="w-16 h-16 marg-t-2"
              type="checkbox"
              name="c2"
              value="c2"
              id=""
            />

            <label class="marg-0 pl-2 valign-top fsize14">
              {{ this.otherbroker }}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 f-right mt-12 mb-4">
      <span class="fsize14"
        ><button
          type="button"
          class="
            padd-0-16
            h-40
            bgclr-fff
            clr-2E3031
            border-radius
            bdrclr-2e3031
            minwidth-96
            mr-4
          "
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Reject
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content model-width model-height">
              <div class="modal-header model-header-align bdr-none">
                <span
                  class="modal-title fsize18 clr-000000"
                  id="exampleModalLabel"
                >
                  Are you sure you want to reject this user?
                </span>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="padd-16-40">
                <div class="modal-body p-0 l-height32">
                  Add the reason for rejecting the Aashil Patel.
                </div>
                <div>
                  <form>
                    <textarea
                      class="
                        padd-12-16-20-16
                        w-100
                        bdr-cbcbcb
                        mt-2
                        border-radius
                        h-80
                        outline-none
                      "
                      placeholder="Type here"
                    >
                    </textarea>
                  </form>
                </div>
              </div>
              <div class="modal-footer bdr-none">
                <button
                  type="button"
                  class="
                    h-40
                    w-128
                    clr-2E3031
                    bgclr-fff
                    bdrclr-2e3031
                    border-radius
                  "
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="
                    w-128
                    h-40
                    bgrclr-007AFF
                    border-radius
                    bdrclr-007aff
                    clr-fff
                    ml-4
                  "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
      <span class="fsize14 pr-16"
        ><button
          class="
            padd-0-16
            h-40
            bgrclr-007AFF
            border-radius
            bdrclr-007aff
            clr-fff
            minwidth-96
          "
        >
          Approve
        </button></span
      >
    </div>
    <div></div>
  </div>
</template>

<script>
import httpService from "../js/http-common-service";
export default {
  data() {
    return {
      apllicationId: "",
      applicateName: "",
      dOb: "",
      panNo: "",
      addressline1: "",
      pincode: "",
      city: "",
      State: "",
      permanentAddress: "",
      percity: "",
      perpin: "",
      perstate: "",
      iffccode: "",
      bankname: "",
      bankaddress: "",
      micrcode: "",
      oCcupation: "",
      workprofile: "",
      companyname: "",
      occupationaddress: "",
      workexperience: "",
      sourceincome: "",
      placeorder: "",
      incomerange: "",
      networth: "",
      eduqualification: "",
      tradingexperience: "",
      otherbroker: "",
    };
  },
  methods: {
    getPanCard() {
      let panCard = {
        applicationId: this.apllicationId,
      };
      httpService.gETPanCardDetails(panCard).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            this.panNo = response.data.result.pan_card;
            this.dOb = response.data.result.dob;
            this.applicateName = response.data.result.applicant_name;
            this.console.log(response);
            // localStorage.setItem(
            //   "applicateName",
            //   JSON.stringify(response.data["result"])
            // );
          } else {
            // console.log("user cannot add");
          }
        }
      });
    },
    getaddress() {
      let getAdDress = {
        applicationId: this.apllicationId,
      };
      httpService.gETAddress(getAdDress).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            this.addressline1 = response.data.result.address_line_1;
            this.pincode = response.data.result.pin;
            this.city = response.data.result.city;
            this.State = response.data.result.state;
            console.log(response);
            // localStorage.setItem(
            //   "geTAddress",
            //   JSON.stringify(response.data["result"])
            // );
          } else {
            // console.log("user cannot add");
          }
        }
      });
    },
    permanentaddress() {
      let permanentAdDress = {
        applicationId: this.apllicationId,
      };
      httpService.pERmanentADdress(permanentAdDress).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            console.log(response);
            this.permanentAddress = response.data.result.address_line_1;
            this.perpin = response.data.result.pin;
            this.percity = response.data.result.city;
            this.perstate = response.data.result.state;
          } else {
            // console.log("user cannot add");
          }
        }
      });
    },
    bankdetails() {
      let bank = {
        applicationId: this.apllicationId,
      };
      httpService.baNkDetails(bank).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            this.iffccode = response.data.result.ifsc_code;
            this.bankname = response.data.result.bankName;
            this.bankaddress = response.data.result.bankAddress;
            this.micrcode = response.data.result.micrCode;

            console.log(response);
          } else {
          }
        }
      });
    },
    additionaldetail() {
      let additional = {
        applicationId: this.apllicationId,
      };
      httpService.aDDitionalDetails(additional).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            console.log(response);
            this.oCcupation = response.data.result.occupation;
            this.workprofile = response.data.result.work_profile;
            this.companyname = response.data.result.company_name;
            this.occupationaddress = response.data.result.occupation_address;
            this.workexperience = response.data.result.work_experience;
            this.sourceincome = response.data.result.source_income;
            this.placeorder = response.data.result.place_order;
            this.incomerange = response.data.result.annual_income;
            this.networth = response.data.result.net_worth;
            this.eduqualification = response.data.result.edu_qualification;
            this.tradingexperience = response.data.result.trading_experience;
            this.otherbroker = response.data.result.other_broker;
          } else {
          }
        }
      });
    },


    getUploadFiles() {
      let attachFile = {
        applicationId: JSON.parse(localStorage.getItem("applicateid")),
      };
      httpService.uploadFiles(attachFile).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            console.log(response);
          } else {
            console.log("user cannot add");
          }
        }
      });
    },
  },
  computed: {},

  mounted() {
    if (
      localStorage.getItem("applicatioNid") != undefined ||
      localStorage.getItem("applicatioNid") != null
    ) {
      this.apllicationId = JSON.parse(localStorage.getItem("app_Id"));
    }

    this.getPanCard();

    jQuery(function () {
      jQuery("#showSingle").click(function () {
        jQuery(".targetDiv").show();
      });
      jQuery(".showSingle").click(function () {
        jQuery(".targetDiv").hide();
        jQuery("#div" + $(this).attr("target")).show();
      });
    });
    $(document).ready(function () {
      $(".headBtns").on("click", function () {
        $(".headBtns").removeClass("active");
        $(this).addClass("active");
      });
    });
  },
};
</script>

<style>
.solid1,
.solid2 {
  border: 0;
  border-top: 1px solid #a2a2a2;
  margin: 7px 16px 0 !important;
}
.padd-0-16 {
  padding: 0px 16px;
}
.searchwhole {
  margin: 0;
  position: relative;
  padding: 4px 0 6px;
  border: 1px solid #ededed !important;
  border-radius: 4px;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
}
/* search */
.h-16 {
  height: 16px;
}
.w-16 {
  width: 16px;
}
.w-280 {
  width: 280px !important;
}
.marg-l-5 {
  margin-left: 5px;
}
.search-box input {
  transition-duration: 0.3s;
}
.search-box input:focus {
  width: 200px;
}
.search-box {
  margin: 0 8px;
}
.placeholdsearch {
  font-size: 13px;
  height: 24px;
  margin-left: 5px;
  width: 100px;
  color: #56585a;
}
.search {
  color: #0075e1 !important;
  font-size: 12px !important;
  cursor: pointer;
  margin-right: 16px !important;
}

.h-20 {
  height: 20px;
}
.w-20 {
  width: 20px;
}
.clr-56585a {
  color: #56585a;
}
.w-426 {
  width: 426px;
}
.h-268 {
  height: 268px;
}
.bgrclr-007AFF {
  background-color: #007aff;
}
.bdrclr-007aff {
  border: 1px solid #007aff;
}
.bgclr-fff {
  background-color: #fff;
}
.bdrclr-2e3031 {
  border: 1px solid #2e3031;
}
.model-header-align {
  width: 600px !important;
  height: 56px !important;
  padding: 8px 16px 0 24px !important;
  display: flex !important;
  align-items: center !important;
}
.bdr-none {
  border: none !important;
}
.padd-12-16-20-16 {
  padding: 12px 16px 20px !important;
}
.model-width {
  width: 600px !important;
}
.model-height {
  height: 312px;
}
.padd-16-40 {
  padding: 16px 40px !important;
}
.w-128 {
  width: 128px;
}
.marg-t-2 {
  margin-top: 2px !important;
}
.minwidth-96 {
  min-width: 96px !important;
}
</style>
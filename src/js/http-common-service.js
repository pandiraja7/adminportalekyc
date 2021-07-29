import axios from "axios";
import { post } from "jquery";

const AXIOS = axios.create({
    // baseURL: "https://rest.irongates.in/PCEKycAdminService/",

    baseURL: "https://adminuatekyc.phillipcapital.in/rest/PCEKycAdminService/",
    //   timeout: 1000
});

export default {
    data() {
        return {
            headers: {
                "Content-Type": "application/json",
            },
            post: "POST",
            get: "GET",
            loader: null,
            loading: false,
        };
    },

    userLogin(jsonObj) {
        return AXIOS.post(`/admin/adminLogin`, jsonObj, {
            headers: this.headers,
        });
    },
    // progress(jsonObj) {
    //     return AXIOS.post(`/admin/getUserReportList`, jsonObj, {
    //         headers: this.headers,
    //     });
    // },
    review(jsonObj) {
        return AXIOS.post(`/admin/getRecordsDetails`, jsonObj, {
            headers: this.headers,
        });
    },
    reports(jsonObj) {
        return AXIOS.post(`/admin/getUserReportList`, jsonObj, {
            headers: this.headers,
        });
    },
    newuser(jsonObj) {
        return AXIOS.post(`/admin/getAdminDetails`, jsonObj, {
            headers: this.headers,
        });
    },
    newadmin(jsonObj) {
        return AXIOS.post('/admin/addNewUser', jsonObj, {
            headers: this.headers,
        });
    },
    progress(jsonObj) {
        return AXIOS.post('/admin/getRecordsDetails', jsonObj, {
            headers: this.headers,
        });
    },
    rectify(jsonObj) {
        return AXIOS.post('/admin/getRecordsDetails', jsonObj, {
            headers: this.headers,
        });
    },
    assign(jsonObj) {
        return AXIOS.post('/admin/adminAssignApplication', jsonObj, {
            headers: this.headers,
        });
    },
    uploadFiles(jsonObj) {
        return AXIOS.post('/admin/getAttachedFileDetails', jsonObj, {
            headers: this.headers,
        });
    },
    gETPanCardDetails(jsonObj) {
        return AXIOS.post('/admin/getPanCardDetails', jsonObj, {
            headers: this.headers,
        });
    },
    // applicationstarted(jsonObj) {
    //     return AXIOS.post('/admin/startApplication', jsonObj, {
    //         headers: this.headers,
    //     });
    // },

    gETAddress(jsonObj) {
        return AXIOS.post('/admin/getCommunicationAddress', jsonObj, {
            headers: this.headers,
        });
    },
    pERmanentADdress(jsonObj) {
        return AXIOS.post('/admin/getPermanentAddress', jsonObj, {
            headers: this.headers,
        });
    },
    baNkDetails(jsonObj) {
        return AXIOS.post('/admin/getBankDetails', jsonObj, {
            headers: this.headers,
        });
    },
    aDDitionalDetails(jsonObj) {
        return AXIOS.post('/admin/getaddtionDetails', jsonObj, {
            headers: this.headers,
        });
    },
    panApproveOrReject(jsonObj) {
        return AXIOS.post('/admin/respondPanCard', jsonObj, {
            headers: this.headers,
        });
    },

    addressApproveOrReject(jsonObj) {
        return AXIOS.post('/admin/respondCommunicationAddress', jsonObj, {
            headers: this.headers,
        });
    },
    permanentApproveOrReject(jsonObj) {
        return AXIOS.post('/admin/respondPermanentAddress', jsonObj, {
            headers: this.headers,
        });
    },
    bankDetailsApproveOrReject(jsonObj) {
        return AXIOS.post('/admin/respondBankAccountDetails', jsonObj, {
            headers: this.headers,
        });
    },
    additionalDetailApproveOrReject(jsonObj) {
        return AXIOS.post('/admin/respondAdditionalDetails', jsonObj, {
            headers: this.headers,
        });
    }

};
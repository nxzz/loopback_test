"use strict";

export default class sendPostController {
    constructor($location, $http, $state, $stateParams) {
        "ngInject";
        this.$http = $http;
        this.$stateParams = $stateParams;
        console.log(this.$stateParams);
    }

    sendEmail() {
        console.log(`Email successfully sent to  ${this.email}`);
    }
}

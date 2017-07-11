import angular from 'angular';
import sendEmail from './sendEmail';

export default angular.module('app.Directive', [])
    .directive('sendEmail', sendEmail.activate);

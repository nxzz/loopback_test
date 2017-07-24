"use strict";
import Controller from './Controller/module';
import Directive from './Directive/module';
import Router from './router';
// 依存関係
import angular from 'angular';
import ngAdmin from 'ng-admin';
import ngStorage from 'ngStorage';

// スタイル
import './Stylesheet/main.scss';

// モジュール
import Admin from './Admin';
console.log(ngStorage);
// 
const app = angular
    .module('myApp', [
        ngAdmin,
        ngStorage.name,
        Controller.name,
        Directive.name,
    ])
    .config(Admin)
    .config(Router);


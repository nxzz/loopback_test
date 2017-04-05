"use strict";

// 依存関係
import angular from 'angular';
import ngAdmin from 'ng-admin';

// スタイル
import './Stylesheet/main.scss';


const app = angular
    .module('app', [
        ngAdmin
    ])
    .config(['NgAdminConfigurationProvider', 'RestangularProvider', function (NgAdminConfigurationProvider, RestangularProvider) {
        var nga = NgAdminConfigurationProvider;
        // create an admin application

        var admin = nga.application('My First Admin');
        // APIのベースURLを設定
        admin.baseApiUrl('/api/');

        // リクエスト時の処理を設定
        RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
            if (operation == 'getList') {
                params['filter[skip]'] = (params._page - 1) * params._perPage;
                params['filter[limit]'] = params._perPage;
                params['filter[order]'] = params._sortField + ' ' + params._sortDir;
                delete params._page;
                delete params._perPage;
                delete params._sortField;
                delete params._sortDir;
            } else if (operation == 'remove') {
                element = undefined;
                return {
                    headers: headers,
                    params: params,
                    element: element,
                    httpConfig: {}
                };
            }
            return { params: params };
        });

        var Bbslog = nga.entity('Bbslog').label('BBS Log');

        Bbslog.listView().fields([
            nga.field('id').isDetailLink(true),
            nga.field('body').label('本文'),
            nga.field('time').label('時刻').isDetailLink(true)
        ]);

        Bbslog.creationView().fields([
            nga.field('body').label('本文').validation({ required: true })
        ]);

        Bbslog.editionView().fields([
            nga.field('id').editable(false),
            nga.field('body').label('本文').validation({ required: true })
        ]);

        admin.addEntity(Bbslog);

        nga.configure(admin);
    }]);

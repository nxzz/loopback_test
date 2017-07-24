"use strict";

export default (NgAdminConfigurationProvider, RestangularProvider) => {
    "ngInject";

    const nga = NgAdminConfigurationProvider;
    const admin = nga.application('My First Admin').baseApiUrl('/api/');

    let token = sessionStorage.getItem('ngStorage-token');
    if (token) {
        RestangularProvider.setDefaultHeaders({ Authorization: token });
    } else {
        window.location.hash = '#/login';
    }
    RestangularProvider.addFullRequestInterceptor((element, operation, what, url, headers, params, httpConfig) => {
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


    let Bbslog = nga.entity('bbslogs').label('BBS Log');

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

    admin.menu(nga.menu()
        .addChild(nga.menu(Bbslog))
        .addChild(nga.menu().template(`
        <a ui-sref="send-post({id:0})">
            <span class="glyphicon glyphicon-list"></span>
            メール送信
        </a>`
        ))
    );
    nga.configure(admin);
};

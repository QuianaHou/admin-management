(function () {
    'use strict';

    angular.module('KingAdmin.pages.excelupload', [
        'KingAdmin.pages.excelupload.excelupload',
        'KingAdmin.pages.excelupload.flowsrc',
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('excelupload', {
                url: '/mgr/flowsrc',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: 'excel导入',
                sidebarMeta: {
                    icon: 'ion-grid',
                    order: 300,
                },
            });
    }

})();

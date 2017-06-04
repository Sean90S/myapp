/**
 * Created by pafang on 16/9/27.
 */
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("/manager", '/manager/domainManager');

    $stateProvider
        .state('manager', {
            url: '/manager',
            views: {
                '': {
                    template: require('./sub-menu.html'),
                }
            }
            /*template: require('./sub-menu.html'),*/
        })
        .state('manager.domainManager', {
            url: '/domainManager',
            views: {
                'mainContent@manager': {
                    template: require('./domainManager/domainList.html'),
                    controller: 'DomainController',
                    controllerAs: 'domain'
                }
            }

        })
        .state('manager.business', {
            url: '/business',
            views: {
                'mainContent@manager': {
                    template: require('./business/businessList.html')
                }
            }

        })
        .state('manager.role', {
            url: '/role',
            views: {
                'mainContent@manager': {
                    template: require('./role/roleList.html')
                }
            }

        })
        .state('manager.forewarning', {
            url: '/forewarning',
            views: {
                'mainContent@manager': {
                    template: require('./forewarning/forewarningList.html')
                }
            }

        })
        .state('manager.scenario', {
            url: '/scenario',
            views: {
                'mainContent@manager': {
                    template: require('./scenario/scenarioList.html')
                }
            }

        })



}
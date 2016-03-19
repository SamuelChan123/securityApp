angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.profile', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.alerts'
      2) Using $state.go programatically:
        $state.go('tabsController.alerts');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page3
      /page1/tab2/page3
  */
  .state('tabsController.alerts', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/alerts.html',
        controller: 'alertsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/alerts.html',
        controller: 'alertsCtrl'
      }
    }
  })

  .state('tabsController.camera', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.settings', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});
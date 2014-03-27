require.config({
	paths: {
		'jquery': '../lib/jquery/jquery-1.10.2',
		'angular': '../lib/angular/angular',
		'angular.route': '../lib/angular/angular-route',
		'angular.animate': '../lib/angular/angular-animate',
		'angular.resource': '../lib/angular/angular-resource',
		'phonecatAnimations': 'animations',
		'phonecatControllers': 'controllers',
		'phonecatFilters': 'filters',
		'phonecatServices': 'services'
	},
	
	shim: {
		'angular': {
			deps: ['jquery'],
			exports: 'angular'
		},		
		'angular.route': ['angular'],
		'angular.animate': ['angular'],
		'angular.resource' : ['angular'],
		'phonecatAnimations': ['angular.animate']//,		
		
		//'phonecatControllers': ['angular']
		//,'phonecatFilters': ['angular']
		,'phonecatServices': ['angular.resource']
	}
});


require(['angular', 'app'], function(angular, app){
	angular.bootstrap(document, ['phonecatApp']);
});
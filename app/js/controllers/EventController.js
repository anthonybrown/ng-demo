'use strict';

evtApp.controller('EventController',
		function EventController($scope) {
		// ng-bind-html strips away any html attributes it finds
		// look in the html
		$scope.snippet = '<span style="color:red">Hi There</span>'
		// as long as boolean is true, ng-hide will hide and ng-show will show
		$scope.boolValue = true;
		$scope.mystyle = { color: '#cbdd04' }
		$scope.mycolor = { color: 'steelblue' }
		$scope.myClass = 'red'
		$scope.myclass = 'blue'
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '4/12/2016',
			time: '02:52 pm',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				state: 'CA',
				zip: '90210',
				upVoteCount: 0
			},

			imageUrl: '/img/angularjs-logo.png',

			sessions: [
				{
					name: 'Directives MasterClass',
					presenter: 'Bob Smith',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'In this session you will learn the in\'s and out\'s of directives. Derectives are a powerful construct in AngularJS',
					upVoteCount: 0
				},

				{
					name: 'Scopes for fun and Profit',
					presenter: 'Jim Bob Smith',
					duration: '30 min',
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it and hot to get them to do it for you.',
					upVoteCount: 0
				},

				{
					name: 'Well Behaved Controllers',
					presenter: 'Bubba Gump',
					duration: '2 hrs',
					level: 'Intermediate',
					abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends.',
					upVoteCount: 0
				}
			]
		}

		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		}

		$scope.downVoteSession = function (session) {
			session.upVoteCount--;
		}
});

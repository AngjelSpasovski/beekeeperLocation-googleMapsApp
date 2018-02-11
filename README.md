# Simple WebApp using AngularJS, Firebase, GoogleMaps API & Weather API

A simple web application using angularjs, firebase, GoogleMaps API & Weather API.

It's a simple web application where a user can simply signup and signin and create post and can edit/delete their post. 

Get user location on map and weather info about the current place. 

Configure the app by adding the project's config object:-
var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
firebase.initializeApp(config);

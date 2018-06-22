$(document).ready(function{

/* Contact Page */
var application = angular.module("myapp", []);
application.controller("formcontroller", function($scope, $http){
	$scope.formData = {};
	
	$scope.processForm = function (){
			$http({
				method : "POST",
				url	: "mail/sendmail.php", 
				data : $.param($scope.formData),
				headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
			}).success(function(data){
				//this callback will be called asynchroniously 
				//
				console.log(data);
				
			if (!data.success){
				//if not successful, finds the errors
				$scope.errorFirstName=data.errors.FirstName;
				$scope.errorLastName=data.errors.LastName;
				$scope.errorEmail=data.errors.Email;
				$scope.errorPrimaryPhone=data.errors.PrimaryPhone;
				$scope.errorMessage=data.errors.Message;

			}else{
				//if successful, shows successul message
				$scope.sentMessage=data.sentMessage;
			}	
			

		

};

});
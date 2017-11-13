var emp = angular.module("EmployeeRecord", []);

emp.controller("EmployeeController",["$scope",function($scope) {
	//console.log("In my Controller");
	
	$scope.newEmp = {};
	$scope.clickedEmp = {}; 
	$scope.message = "Defrag Employee Details";
	$scope.saved = localStorage.getItem('employees');

	$scope.employees = (localStorage.getItem('employees') != null) ? JSON.parse($scope.saved) : [
	{name: "Aayushi", email: "aayushi@gmail.com"}
	//{name: "Surbhi", email: "surbhi@gmail.com"},
	// {name: "Anubhav", email: "anubhav@gmail.com"}
	];
	localStorage.setItem('employees', JSON.stringify($scope.employees));
	console.log($scope.employees);
	console.log("In Controller");
	
// adding New Employees
	$scope.addEmp = function(){
	console.log("Adding Employees");
	 console.log($scope.newEmp);
	 $scope.employees.push($scope.newEmp);
	 localStorage.setItem('employees', JSON.stringify($scope.employees));
	 $scope.newEmp = {};
	 $scope.message = "Employee Added Succesfully!";
	
	};
// Selecting the Employee to Delete or Update
	$scope.selectEmp = function(employee){
		console.log(employee);
		$scope.clickedEmp = employee;

	};

	$scope.editSavedEmp = function(){
		localStorage.setItem('employees', JSON.stringify($scope.employees));
		$scope.message  = "Employee Details Updated!"

	};

	$scope.deleteEmp = function(){
		$scope.employees.splice($scope.employees.indexOf($scope.clickedEmp), 1);
		localStorage.setItem('employees', JSON.stringify($scope.employees));
			$scope.message  = "Employee Details Deleted!"
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};
	
}]);
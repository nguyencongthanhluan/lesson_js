const Employee = function (id, lastName, firstName, position, startedDate) {
  this.id = id;
  this.lastName = lastName;
  this.firstName = firstName;
  this.position = position;
  this.startedDate = startedDate;

  this.calcSalary = function () {};
};

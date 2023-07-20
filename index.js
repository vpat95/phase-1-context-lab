/* Your Code Here */

// Your code here

const createEmployeeRecord = function (employeeArr) {
  return {
    firstName: employeeArr[0],
    familyName: employeeArr[1],
    title: employeeArr[2],
    payPerHour: employeeArr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = function (employeesArr) {
  return employeesArr.map((arr) => createEmployeeRecord(arr));
};

const createTimeInEvent = function (dateStamp) {
  const timeInEventsArr = dateStamp.split(" ");
  const timeInEventsObj = {
    type: "TimeIn",
    hour: parseInt(`${timeInEventsArr[1]}`, 10),
    date: timeInEventsArr[0],
  };
  this.timeInEvents.push(timeInEventsObj);
  return this;
};

const createTimeOutEvent = function (dateStamp) {
  const timeOutEventsArr = dateStamp.split(" ");
  const timeOutEventsObj = {
    type: "TimeOut",
    hour: parseInt(`${timeOutEventsArr[1]}`, 10),
    date: timeOutEventsArr[0],
  };
  this.timeOutEvents.push(timeOutEventsObj);
  return this;
};

const hoursWorkedOnDate = function (soughtDate) {
  const timeIn = this.timeInEvents.find((obj) => obj.date === soughtDate);
  const timeOut = this.timeOutEvents.find((obj) => obj.date === soughtDate);

  return (timeOut.hour - timeIn.hour) / 100;
};

const wagesEarnedOnDate = function (date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce((memo, d) =>{
      return memo + wagesEarnedOnDate.call(this, d);
    },0); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

const calculatePayroll = function (employeeArr) {
  const payRoll = employeeArr.reduce((accum, d) => {
    return accum  + allWagesFor.call(d);
  }, 0);
  return payRoll
};

const findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(obj => obj.firstName === firstName)
}

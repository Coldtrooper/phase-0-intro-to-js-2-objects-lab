// Write your solution in this file!
let employee = {
     name: "Sylvester",
     streetAddress: "10 LeCount Pl",
    }

function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    let newEmployee = {...employeeObject}
    newEmployee[key] = value
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject[key] = value;
    return employeeObject;
}
function deleteFromEmployeeByKey(employeeObject, key){
    let newEmployee = {...employeeObject}
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key];
    return employeeObject;
}

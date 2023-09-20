// Write your solution in this file!
const employee = {
    name:'Elizabeth',
    streetAdress:'Australia'
};
const updateEmployeeWithKeyAndValue=(employee, key, value)=>{
    return {
        //creates a new copy
        ...employee,
        [key]: value,
        [key]: value
    }
};
updateEmployeeWithKeyAndValue("Sam", "12 Broadway");

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {

    employee[key]=value;
    return employee;
};     
destructivelyDeleteFromEmployeeByKey("Sam", "12 Broadway");   
          
const deleteFromEmployeeByKey = (employee, key) => {

    const newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee;

};
const newEmployee = deleteFromEmployeeByKey(employee, 'name', 'streetAddress');

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    
    delete employee[key];
    return employee;
    
};
destructivelyDeleteFromEmployeeByKey(employee.key);
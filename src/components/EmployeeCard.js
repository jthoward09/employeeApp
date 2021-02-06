import React from 'react';

const EmployeeCard = ({employee}) => {
    console.log(employee);
    return (
        <div>
            <img src={employee.picture.medium} alt={`${employee.name.first} profile picture`}/>
            <h2>{employee.name.first} {employee.name.last}</h2>
            <h3>{employee.email} • {employee.cell}</h3>
            <h4>{employee.gender}</h4>
        </div>
    )
}

export default EmployeeCard;
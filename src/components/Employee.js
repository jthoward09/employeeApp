import React from 'react'
import EmployeeCard from './EmployeeCard'

const Employee = ({employees}) => {
    return (
        <div>
            <h1>Employee Directory</h1>
            {employees.map((employee, i) => {
                return <EmployeeCard employee={employee} key={i}/>
            })}
        </div>
    )
}

export default Employee;
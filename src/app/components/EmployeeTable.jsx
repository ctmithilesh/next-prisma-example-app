import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { db } from '@/db'

const EmployeeTable = () => {

    const [data, setData] = useState(null)

    const dataCondition = data != null && data.length > 0
    useEffect(() => {


        fetchEmployees()

    })

    const fetchEmployees = async () => {

        const result = await axios.get('/api/employees')
        console.log(result)
        setData(result.data.result)

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Designation </th>
                        <th>Address </th>

                    </tr>
                </thead>
                <tbody>
                    {dataCondition ? data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.emp_name}</td>
                            <td>{item.emp_designation}</td>
                            <td>{item.emp_address}</td>
                        </tr>
                    )) : <Loading />}



                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable

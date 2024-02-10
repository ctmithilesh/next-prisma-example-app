import { db } from '@/db'
import { NextResponse } from 'next/server'
export async function GET() {

    const result = await db.employees.findMany()

    return NextResponse.json({
        result
    })

}

export async function POST() {
    const empData = {
        emp_name: "John Oliver",
        emp_designation: "Java Developer",
        emp_address: "New York",
    }

    const result = await db.employees.create({
        data: {
            emp_name: empData.emp_name,
            emp_designation: empData.emp_designation,
            emp_address: empData.emp_address,
        }
    })

    console.log(result)

    return NextResponse.json({
        result 
    })

}
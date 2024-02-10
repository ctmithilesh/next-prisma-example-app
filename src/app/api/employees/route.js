import { db } from '@/db'
import { NextResponse } from 'next/server'
export async function GET() {

    const result = await db.employees.findMany()

    return NextResponse.json({
        result
    })

}

export async function POST(req) {

    const data = await req.json()
    const {
        emp_name,
        emp_designation,
        emp_address,
        
    } = data 
    
    const result = await db.employees.create({
        data: {
            emp_name: emp_name,
            emp_designation: emp_designation,
            emp_address: emp_address,
        }
    })

    console.log(result)

    return NextResponse.json({
        result 
    })

}

export async function DELETE(req) {

    const id = await req.json()

    console.log(id)
    
    const result = await db.employees.delete({
        where: {
            id: id 
        }
    })

    return NextResponse.json({
        result 
    })

}
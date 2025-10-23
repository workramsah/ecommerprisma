import { prisma } from "@/prisma/client"
import { NextResponse } from "next/server"

export async function POST(request){
try {
    const {address} = await request.json()
    const newAddress = await prisma.address.create({address})
    return NextResponse.json({success:true,message:"Address added successfull",newAddress})
} catch (error) {
    return NextResponse.json({success:false,message:error.message,newAddress})
    
}
}
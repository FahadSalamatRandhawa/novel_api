import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

const dbc=postgres('postgres://dreamtwister61814:rbnJqy9fciR4@ep-fancy-credit-369457.us-east-2.aws.neon.tech/neondb',{ssl:'prefer'});

export async function POST(request:NextRequest) {
    const body=await request.json();
    const {novelID,customerName}=body;
    console.log(novelID,customerName);
    let query:string;

    if(novelID==undefined || customerName==undefined){
        return NextResponse.json({
            message:'customerName or novelID cannot be empty',
        })
    }else{

        query = `INSERT INTO orders(orderid, fk_customerid, customername, fk_novelid, date)
                VALUES (substring(gen_random_uuid()::text from 1 for 8), 1, 'Fahad', 200, DEFAULT) RETURNING orderid;`;
            let result = await dbc.unsafe(query);
            console.log(result);

        if(result[0].orderid){
            return NextResponse.json({
                message:'Name and ID received, orderid generated',
                SQLresponse:result
            },{status:200,headers:{'content-type':'application/json'}})
        }else{
            return NextResponse.json({
                message:'Error ',
                SQLresponse:result
            },{
                status:400,
                headers:{'content-type':'application/json'}
            })
        }
    }
}

export async function GET(request:NextRequest) {
    const result=await dbc.unsafe(`SELECT * FROM orders`);

    return NextResponse.json({
        result:result
    })
}
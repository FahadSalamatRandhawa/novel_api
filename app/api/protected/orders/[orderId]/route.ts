import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

const dbc=postgres('postgres://dreamtwister61814:rbnJqy9fciR4@ep-fancy-credit-369457.us-east-2.aws.neon.tech/neondb',{ssl:'prefer'});

export async function GET(request:NextRequest,{params}:{params:{orderId:string}}) {
    const orderId=params.orderId;
    console.log(orderId)

    const result=await dbc.unsafe(`SELECT * FROM orders where orderid = '${orderId}';`);

    if(result[0].orderid){
        return NextResponse.json({
            ...result,
        })
    }else{
        return NextResponse.json({
            message:'Order not found'
        })
    }
}

export async function PATCH(request:NextRequest,{params}:{params:{orderId:string}}) {
    const orderId=params.orderId
    const body=await request.json();
    const {customerName}=body;

    if(!customerName){
        return NextResponse.json({
            message:'customerName cannot be empty'
        })
    }

    const result=await dbc.unsafe(`UPDATE orders SET customerName = '${customerName}' WHERE orderid = '${orderId}' RETURNING customername;`)

    if(result[0].customername){
        return NextResponse.json({
            message:'order updated',
            //name:customerName
        })
    }else{
        return new NextResponse(JSON.stringify({
            message:'Order Not found',
            orderId:orderId
        }),{
            status:400,
            headers:{'content-type':'application/json'}
        })
    }
}

export async function DELETE(request:NextRequest,{params}:{params:{orderId:string}}) {
    const orderId=params.orderId;

    const result=await dbc.unsafe(`DELETE FROM orders WHERE orderid = '${orderId}' RETURNING orderid;
    SELECT EXISTS(SELECT 1 FROM orders WHERE orderid = '${orderId}');
    `);
    //console.log(result);
    console.log('Reached here')
    console.log()

    if(result[0][0].orderid){
        return NextResponse.json({
            message:'Order deleted'
        })
    }
        console.log('inside else')
        return NextResponse.json({
            message:'Order not found'
        })
    

}
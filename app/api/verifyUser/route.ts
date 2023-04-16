import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request:NextRequest){
    const {searchParams}=new URL(request.url);
    const token=(new Headers(request.headers)).get('token');
    console.log('token in Verify',token)
    let query=`SELECT * FROM users WHERE token='${token}';`;

    const dbc=postgres('postgres://dreamtwister61814:rbnJqy9fciR4@ep-fancy-credit-369457.us-east-2.aws.neon.tech/neondb',{ssl:'prefer'});
    const result=await dbc.unsafe(query);
    //console.log(result)
    if(result[0]){
        return NextResponse.json({
            Authenticated:true,
            Owner:result[0].clientName
        })
    }else{
        return NextResponse.json({
            Authenticated:false
        })
    }
}
import { NextResponse } from 'next/server';
import postgress from 'postgres';
export async function GET(request:Request) {

    const {searchParams}=new URL(request.url)
    const type=searchParams.get('type');
    const limit=searchParams.get('limit');

    const dbc=postgress('postgres://dreamtwister61814:rbnJqy9fciR4@ep-fancy-credit-369457.us-east-2.aws.neon.tech/neondb',{ssl:'prefer'});
    
    let result; let query=`SELECT * FROM novels`;
    if((type=='fiction' || type=='non-fiction')){
         query=`${query } WHERE type='${type}'`;
    }
    if(limit){
         query=`${query} LIMIT ${limit}`;
    }
    //const nov=dbc.query('Select * from novels');
    result=await dbc.unsafe(query);
    return NextResponse.json({
        message:result
    })
}
import { headers } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request:NextRequest) {
    const body=await request.json();
//    console.log(body);
    const {email,name} =body;
    let query=`SELECT clientName from users WHERE clientEmail in ('${email}');`
    //console.log(email,name)

    const dbc=postgres('postgres://dreamtwister61814:rbnJqy9fciR4@ep-fancy-credit-369457.us-east-2.aws.neon.tech/neondb',{ssl:'prefer'});

    //Register new User

    if(email!=undefined && name!=undefined){

        //Check existing users

        const checkEmail=await dbc.unsafe(query);
        //console.log(checkEmail)
        //console.log(checkEmail[0])
        if(checkEmail[0]){
            return NextResponse.json({
                found:'User already exists, please use a different email'
            })
        }

        query=`INSERT INTO users(id,clientEmail,clientName,token) 
            VALUES(DEFAULT,'${email}','${name}',gen_random_uuid()) RETURNING token;`;
        let result=await dbc.unsafe(query);
        return NextResponse.json({
            Type:"User created",
            response:result
        })
    }else{
        return NextResponse.json({
            'Message':"Name or Email cannot be empty"
        },{
            status:303,
            headers:{
                'content-type':'application/json'
            }
        })
    }
}
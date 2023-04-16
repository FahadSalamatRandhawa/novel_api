import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config={
    matcher:'/api/:novels*',
}


export async function middleware(request:NextRequest){
    const headers=new Headers(request.headers);
    const response=NextResponse.next({
        request:{
            headers:headers,
        }
    })
    if(headers.has('token')){
        const token=headers.get('token');
        console.log(token);
        const verified=await (await fetch(`http://localhost:3000/api/verifyUser`,{
            headers:{'token':token as string}
        })).json();
        console.log(verified)
        if(verified.Authenticated){
            return response;
        }else{
            return new NextResponse(
                JSON.stringify({
                    success:false,message:'Incorrect Bearer Token',
                }),
                {
                    status:401,
                    headers:{'content-type':'application/json'}
                }
            )
        }
        console.log('Reached token')
    }else{
        return new NextResponse(
            JSON.stringify({
                success:false,message:'No Token found',
            }),
            {
                status:401,
                headers:{'content-type':'application/json'}
            }
        )
    }
    
}

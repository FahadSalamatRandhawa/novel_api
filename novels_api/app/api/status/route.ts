import { NextResponse } from "next/server";
export async function GET(request:Request) {
    return NextResponse.json({staus:'Novelty Novels API is active'});
}
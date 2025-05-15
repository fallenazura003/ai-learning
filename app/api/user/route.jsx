import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req){
    const {email,name}=await req.json();

    //if user already exist
    const users=await db.select().from(usersTable)
    .where(eq(usersTable.email,email));

    //if not then add new user
    if(user?.length==0){
        const result = await db.insert(usersTable).value({
            name:name,
            email:email
        }).returning(usersTable);
        return NextResponse.json(result)
    }
    return NextResponse.json(users[0])
}
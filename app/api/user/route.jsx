import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/config/db"; // Ensure you import the db instance

export async function POST(req) {
  const { email, name } = await req.json();

  try {
    // Check if user already exists
    const users = await db.select().from(usersTable)
      .where(eq(usersTable.email, email));

    // If not, then add new user
    if (users?.length === 0) {
      const result = await db.insert(usersTable).values({
        name: name,
        email: email
      }).returning(usersTable);
      return NextResponse.json(result);
    }

    // If user exists, return the existing user
    return NextResponse.json(users[0]);

  } catch (error) {
    console.error("Error during user creation/retrieval:", error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
// /api/courses (Next.js API route)
import { NextResponse } from "next/server";
import { coursesTable } from "@/config/schema";
import { db } from "@/config/db";
import {desc, eq, sql} from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const explore = searchParams?.get('explore');
    const courseId = searchParams?.get('courseId');
    const user = await currentUser();

    if (explore === 'true') {
        try {
            const result = await db.select().from(coursesTable)
                .where(sql`${coursesTable.courseContent}::jsonb !='{}'::jsonb`);

            console.log("Explore Courses Result:", result);
            return NextResponse.json(result); // Return an array of courses
        } catch (error) {
            console.error("Error fetching explore courses:", error);
            return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
        }
    } else if (courseId) {
        try {
            const result = await db.select().from(coursesTable)
                .where(eq(coursesTable.cid, courseId));
            console.log("Course Details Result:", result);
            return NextResponse.json(result[0]); // Return a single course
        } catch (error) {
            console.error("Error fetching course details:", error);
            return NextResponse.json({ error: "Failed to fetch course details" }, { status: 500 });
        }
    } else if (user) {
        try {
            const result = await db.select().from(coursesTable)
                .where(eq(coursesTable.userEmail, user.primaryEmailAddress?.emailAddress))
                .orderBy(desc(coursesTable.id));
            console.log("User Courses Result:", result);
            return NextResponse.json(result); // Return an array of courses
        } catch (error) {
            console.error("Error fetching user courses:", error);
            return NextResponse.json({ error: "Failed to fetch user courses" }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
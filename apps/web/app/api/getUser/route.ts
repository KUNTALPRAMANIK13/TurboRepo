import { client } from "@repo/db/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const user = await client.user.findFirst();
        return NextResponse.json(user || { email: "No user found", password: "No password found" });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json(
            { error: "Failed to fetch user data" },
            { status: 500 }
        );
    }
} 
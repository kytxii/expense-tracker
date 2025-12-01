import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { type, name, amount, date } = body as {
      type: string;
      name: string;
      amount: number;
      date: string | Date;
    };

    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const primaryEmail =
      user.emailAddresses?.[0]?.emailAddress ?? `${userId}@example.com`;

    await prisma.user.upsert({
      where: { authUserId: userId },
      update: {
        emailAddress: primaryEmail,
        name: user.firstName
          ? `${user.firstName} ${user.lastName ?? ""}`.trim()
          : null,
        imageUrl: user.imageUrl,
      },
      create: {
        authUserId: userId,
        emailAddress: primaryEmail,
        name: user.firstName
          ? `${user.firstName} ${user.lastName ?? ""}`.trim()
          : null,
        imageUrl: user.imageUrl,
      },
    });

    const entry = await prisma.entry.create({
      data: {
        type,
        name,
        amount,
        date: new Date(date),
        userId,
        paid: false,
      },
    });

    revalidatePath("/dashboard");

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error("[POST /api/entries] Error creating entry", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

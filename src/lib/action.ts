'use server'

import { revalidatePath } from "next/cache";

import { UserSchema, userSchema } from "./zod"
import { prisma } from "./prisma";


export async function userCreate(data: UserSchema){

    const parsed = userSchema.safeParse(data)

    if(!parsed.success){
        throw new Error("Invalid data")
    }

    await prisma.user.create({
        data: parsed.data,
    })
    revalidatePath("/")
}
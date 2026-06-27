"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/Appbar";

export default function Page(){
  const session = useSession();
  return (
   <div>
      Home
   </div>
  );
}
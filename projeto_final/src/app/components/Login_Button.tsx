"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const LoginButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex flex-row gap-4 ml-auto">
        <button onClick={() => signOut()} className="text-gray-600">
          Log Off
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-gray-600">
      Login
    </button>
  );
};

export default LoginButton;
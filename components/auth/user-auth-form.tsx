"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isLoadingLine, setIsLoadingLine] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithLine = async () => {
    setIsLoadingLine(true);
    try {
      await signIn("line", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoadingLine(false);
    }
  };

  return (
    <div className="grid gap-4">
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={loginWithGoogle}
        className="w-full"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Googleでログイン
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoadingLine}
        onClick={loginWithLine}
        className="w-full bg-[#00B900] text-white hover:bg-[#00B900]/90"
      >
        {isLoadingLine ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.line className="mr-2 h-4 w-4" />
        )}
        LINEでログイン
      </Button>
    </div>
  );
}
"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
          <CardDescription>
            以下のプロバイダーからログインを選択してください
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full"
            variant="outline"
          >
            Googleでログイン
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
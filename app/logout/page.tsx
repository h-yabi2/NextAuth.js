"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Card className="w-[380px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex items-center gap-2">
            <LogOut className="w-6 h-6" />
            ログアウト
          </CardTitle>
          <CardDescription>
            本当にログアウトしますか？
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-sm text-muted-foreground">
            ログアウトすると、再度ログインするまでサービスを利用できなくなります。
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="w-full"
          >
            ログアウト
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="w-full"
          >
            キャンセル
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
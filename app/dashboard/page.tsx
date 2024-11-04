import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth-config";
import { UserNav } from "@/components/dashboard/user-nav";

export default async function DashboardPage() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <h1 className="text-xl font-bold">ダッシュボード</h1>
          <UserNav user={session.user} />
        </div>
      </header>
      
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">概要</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">ようこそ</p>
            <p className="mt-2 text-2xl font-bold">{session.user?.name} さん</p>
          </div>
        </div>
      </main>
    </div>
  );
}
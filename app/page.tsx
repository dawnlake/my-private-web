import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NotificationBell from "@/components/NotificationBell";

export default async function HomePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="max-w-3xl mx-auto p-4 min-h-screen">
      <header className="flex justify-between items-center py-4 border-b mb-6">
        <h1 className="text-xl font-bold">📢 멤버 전용 공지사항</h1>
        <div className="flex items-center gap-4">
          <NotificationBell />
          <UserButton />
        </div>
      </header>

      <main className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">환영합니다!</h2>
        <p className="text-gray-600">이곳은 승인된 멤버만 볼 수 있는 비공개 공지 공간입니다.</p>
      </main>
    </div>
  );
}
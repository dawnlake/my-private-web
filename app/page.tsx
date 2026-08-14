import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#20242a]">
      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-[#e2e5e9] bg-white">
        <div className="flex h-full items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[#172033] text-sm font-bold text-white">
              C
            </div>

            <div>
              <p className="text-[15px] font-bold tracking-wide">
                COMPANY NAME
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Corporate Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-gray-500 transition hover:text-[#172033]">
              🔔
            </button>

            <div className="h-7 w-px bg-gray-200" />

            <UserButton />
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="fixed bottom-0 left-0 top-[72px] hidden w-[230px] border-r border-[#e2e5e9] bg-white lg:block">
        <nav className="px-5 py-8">
          <p className="mb-4 px-3 text-[10px] font-semibold tracking-[0.2em] text-gray-400">
            MAIN
          </p>

          <div className="space-y-1">
            <SidebarItem label="Dashboard" active />
            <SidebarItem label="Notice" />
            <SidebarItem label="Schedule" />
          </div>

          <p className="mb-4 mt-10 px-3 text-[10px] font-semibold tracking-[0.2em] text-gray-400">
            ORGANIZATION
          </p>

          <div className="space-y-1">
            <SidebarItem label="Organization" />
            <SidebarItem label="Members" />
            <SidebarItem label="Departments" />
          </div>

          <p className="mb-4 mt-10 px-3 text-[10px] font-semibold tracking-[0.2em] text-gray-400">
            WORK
          </p>

          <div className="space-y-1">
            <SidebarItem label="Projects" />
            <SidebarItem label="Documents" />
            <SidebarItem label="Archive" />
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#e2e5e9] p-5">
          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
            Internal System
          </p>
          <p className="mt-1 text-xs text-gray-500">
            v1.0.0
          </p>
        </div>
      </aside>

      {/* CONTENT */}
      <section className="pt-[72px] lg:pl-[230px]">
        <div className="mx-auto max-w-[1500px] px-6 py-10 lg:px-10">

          {/* PAGE TITLE */}
          <div className="mb-10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Dashboard
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#172033]">
              Welcome back.
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Here is today's company overview.
            </p>
          </div>

          {/* NOTICE + SCHEDULE */}
          <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">

            {/* NOTICE */}
            <section className="border border-[#e2e5e9] bg-white">
              <div className="flex items-center justify-between border-b border-[#e2e5e9] px-6 py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Company Notice
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-[#172033]">
                    Important announcements
                  </h2>
                </div>

                <button className="text-xs font-medium text-gray-400 transition hover:text-[#172033]">
                  VIEW ALL →
                </button>
              </div>

              <div className="divide-y divide-[#eef0f2]">
                <NoticeItem
                  number="01"
                  title="2026년 하반기 운영 일정 안내"
                  date="08.15.2026"
                  important
                />

                <NoticeItem
                  number="02"
                  title="새로운 사내 시스템이 적용되었습니다."
                  date="08.12.2026"
                />

                <NoticeItem
                  number="03"
                  title="부서별 프로젝트 진행 현황 안내"
                  date="08.08.2026"
                />

                <NoticeItem
                  number="04"
                  title="커뮤니티 이용 안내 및 규정"
                  date="08.01.2026"
                />
              </div>
            </section>

            {/* SCHEDULE */}
            <section className="border border-[#e2e5e9] bg-white">
              <div className="border-b border-[#e2e5e9] px-6 py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Schedule
                </p>

                <h2 className="mt-1 text-lg font-semibold text-[#172033]">
                  Today's schedule
                </h2>
              </div>

              <div className="p-6">
                <ScheduleItem
                  time="09:00"
                  title="Weekly Team Meeting"
                  department="Management"
                />

                <ScheduleItem
                  time="13:00"
                  title="Project Progress Review"
                  department="Development"
                />

                <ScheduleItem
                  time="15:30"
                  title="Department Meeting"
                  department="Planning"
                />

                <ScheduleItem
                  time="18:00"
                  title="Working Hours End"
                  department="All Members"
                  last
                />
              </div>
            </section>
          </div>

          {/* STATISTICS */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <StatCard
              label="Total Members"
              value="128"
              description="Registered members"
            />

            <StatCard
              label="Active Projects"
              value="06"
              description="Currently in progress"
            />

            <StatCard
              label="Documents"
              value="342"
              description="Available documents"
            />

          </div>

          {/* QUICK MENU */}
          <section className="mt-10">
            <div className="mb-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Quick Access
              </p>

              <h2 className="mt-1 text-lg font-semibold text-[#172033]">
                Frequently used
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <QuickMenu
                title="Members"
                description="View company members"
              />

              <QuickMenu
                title="Organization"
                description="Company organization"
              />

              <QuickMenu
                title="Documents"
                description="Browse company documents"
              />

              <QuickMenu
                title="Archive"
                description="View archived records"
              />

            </div>
          </section>

        </div>
      </section>

      {/* MOBILE NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e2e5e9] bg-white lg:hidden">
        <div className="grid grid-cols-5">

          <MobileNavItem label="HOME" active />
          <MobileNavItem label="NOTICE" />
          <MobileNavItem label="SCHEDULE" />
          <MobileNavItem label="MEMBERS" />
          <MobileNavItem label="MORE" />

        </div>
      </nav>
    </main>
  );
}


/* -----------------------------
   COMPONENTS
----------------------------- */

function SidebarItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center px-3 py-2.5 text-left text-sm transition ${
        active
          ? "bg-[#172033] font-medium text-white"
          : "text-gray-500 hover:bg-gray-50 hover:text-[#172033]"
      }`}
    >
      <span>{label}</span>
    </button>
  );
}


function NoticeItem({
  number,
  title,
  date,
  important = false,
}: {
  number: string;
  title: string;
  date: string;
  important?: boolean;
}) {
  return (
    <div className="flex items-center gap-5 px-6 py-5 transition hover:bg-gray-50">

      <span className="text-xs font-medium text-gray-300">
        {number}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {important && (
            <span className="text-[9px] font-bold uppercase tracking-wider text-red-500">
              Important
            </span>
          )}

          <p className="truncate text-sm font-medium text-[#252a31]">
            {title}
          </p>
        </div>
      </div>

      <span className="hidden text-xs text-gray-400 sm:block">
        {date}
      </span>

    </div>
  );
}


function ScheduleItem({
  time,
  title,
  department,
  last = false,
}: {
  time: string;
  title: string;
  department: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex gap-5 py-4 ${
        !last ? "border-b border-[#eef0f2]" : ""
      }`}
    >
      <span className="w-12 text-xs font-semibold text-[#172033]">
        {time}
      </span>

      <div>
        <p className="text-sm font-medium text-[#252a31]">
          {title}
        </p>

        <p className="mt-1 text-[11px] text-gray-400">
          {department}
        </p>
      </div>
    </div>
  );
}


function StatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="border border-[#e2e5e9] bg-white p-6">

      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        {label}
      </p>

      <p className="mt-4 text-4xl font-semibold tracking-tight text-[#172033]">
        {value}
      </p>

      <p className="mt-2 text-xs text-gray-400">
        {description}
      </p>

    </div>
  );
}


function QuickMenu({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <button className="group border border-[#e2e5e9] bg-white p-6 text-left transition hover:border-[#172033]">

      <div className="flex items-center justify-between">

        <p className="text-sm font-semibold text-[#172033]">
          {title}
        </p>

        <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#172033]">
          →
        </span>

      </div>

      <p className="mt-2 text-xs text-gray-400">
        {description}
      </p>

    </button>
  );
}


function MobileNavItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`py-3 text-[9px] font-semibold tracking-wide ${
        active ? "text-[#172033]" : "text-gray-400"
      }`}
    >
      {label}
    </button>
  );
}
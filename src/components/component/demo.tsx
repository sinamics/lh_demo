/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/p4XONrHJv5W
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Demo() {
  return (
    <div
      key="1"
      className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr] bg-gradient-to-r from-blue-900 to-black dark:from-gray-900 dark:to-black"
    >
      <div className="hidden border-r bg-zinc-100/60 lg:block dark:bg-zinc-700/60">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
              </svg>
              <span>NOV Inc</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto grid items-start gap-6 px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
              href="#"
            >
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
              Fleet View{"\n                      "}
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <span className="font-bold text-zinc-900 dark:text-white">Crane View</span>
              <Link
                className="ml-4 flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                href="#"
              >
                Installation #1
              </Link>
              <Link
                className="ml-4 flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                href="#"
              >
                Installation #2
              </Link>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <span className="font-bold text-zinc-900 dark:text-white">Maintenance</span>
              <Link
                className="ml-4 flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                href="#"
              >
                Maintenance Planning
              </Link>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <span className="font-bold text-zinc-900 dark:text-white">Settings</span>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex flex-col overflow-auto">
      <header className="sticky top-0 flex h-[60px] items-center justify-between border-b bg-zinc-100/60 px-6 dark:bg-zinc-700/60">
        <div className="flex items-center">
          <span className="text-lg font-semibold">Lifting and Handling Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <Button className="text-black bg-white rounded-xl hover:bg-gray-300 transition duration-300">
            Fleet View
          </Button>
          <Button className="text-black bg-white rounded-xl hover:bg-gray-300 transition duration-300">
            Operational Status
          </Button>
          <Button className="text-black bg-white rounded-xl hover:bg-gray-300 transition duration-300">
            Lift Log
          </Button>
          <Button className="text-black bg-white rounded-xl hover:bg-gray-300 transition duration-300">
            Alarm Log
          </Button>
          <Button className="text-black bg-white rounded-xl hover:bg-gray-300 transition duration-300">
            Event Log
          </Button>
        </div>
      </header>

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800" />
            <div className="h-64 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800" />
            <div className="h-64 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800" />
            <div className="h-64 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800" />
          </div>
          <div className="flex-1 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800" />
        </main>
      </div>
    </div>
  )
}

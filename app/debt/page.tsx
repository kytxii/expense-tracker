import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../lib/prisma";
import { redirect } from "next/navigation";

import Header from "@/components/page_ui/Header";
import Sidebar from "@/components/page_ui/Sidebar";
import RemainderChart from "@/components/features/visualizations/RemainderChart";
import DataTable from "@/components/page_ui/DataTable";

const DebtPage = async () => {
  const { userId } = await auth();

  {
    /* If user is not logged in, redirect to login page */
  }
  if (!userId) {
    return redirect("/sign-in");
  }

  {
    /* Get all entries for the user */
  }
  const entries = await prisma.entry.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 flex-shrink-0 h-screen sticky top-0">
        <Sidebar />
      </aside>

      {/* Main column */}
      <div className="flex flex-col w-full h-full">
        <header>
          <Header />
        </header>

        {/* Content */}
        <div className="flex flex-row w-full justify-between items-start flex-grow p-10 mt-19 gap-10">
          <div className="bg-[var(--bg-component)] w-[50%] self-start text-[var(--bg-primary-inverted)] rounded-md p-2">
            <RemainderChart />
          </div>

          <div className="flex flex-col w-[49%]">
            {/* Header row */}
            <div className="flex w-full mb-2 gap-2">
              <span className="w-1/3 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                Name
              </span>
              <span className="w-1/3 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                Date
              </span>
              <span className="w-1/3 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                Amount
              </span>
            </div>

            {/* Table body */}
            <div className="bg-[var(--bg-component)] rounded-md p-2">
              {/* Show all entries on debt */}
              <DataTable
                entries={entries}
                filterType="Debt"
                showPaid={false}
                showColumns={["name", "date", "amount"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtPage;

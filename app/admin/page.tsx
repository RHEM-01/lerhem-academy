import { ChartAreaInteractive } from "@/components/web/sidebar/chart-area-interactive"
import { DataTable } from "@/components/web/sidebar/data-table"
import { SectionCards } from "@/components/web/sidebar/section-cards"

import data from "./data.json"

export default function Page() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  )
}

import * as React from "react"

const YearCard = ({ year }) => {
  return (
    <div className="relative col-span-1 mt-12 border-b border-white/20 md:col-span-2 md:first:mt-0 lg:col-span-3 xl:col-span-4">
      <h2 className="pointer-events-none relative inline font-serif text-xl font-normal text-white/60">
        {year}
      </h2>
    </div>
  )
}

export default YearCard

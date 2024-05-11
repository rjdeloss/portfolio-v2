const techPill = (technology: string) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "> {technology}</div>
    </li>
  )
}
export const TechnologiesUsed = () => {
  const technologyList = ["JavaScript", "React", "React Native", "Flutter"]
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="technilogies used">
      {technologyList.map(tech => techPill(tech))}
    </ul>
  )
}
import { FC, PropsWithChildren } from "react"
import { Navbar } from "./Navbar"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col h-full w-full">{children}</div>
    </div>
  )
}

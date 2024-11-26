import { FC } from "react"

export const Navbar: FC = () => {
  return (
    <div className="w-full max-h-min md:px-32 py-6 flex items-center md:justify-between justify-center">
      <h1 className="font-bold md:text-5xl text-3xl text-main text-stroke-black-2">TOOTHLESS</h1>

      <div className="hidden items-center gap-2 md:flex">
        <button className="bg-main-text rounded-2xl px-4 h-12 text-main-bg lg:text-2xl text-3xl font-bold flex items-center justify-center">
          BUY
        </button>
        <button className="bg-main-text rounded-2xl px-4 h-12 text-main-bg lg:text-2xl text-3xl font-bold flex items-center justify-center">
          <img src="/images/music.png" alt="music" />
        </button>
      </div>
    </div>
  )
}

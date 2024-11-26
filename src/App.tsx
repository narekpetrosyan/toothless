import { useCopyToClipboard } from "usehooks-ts"
import { Layout } from "./components/Layout"

function App() {
  const [value, copyFn] = useCopyToClipboard()

  return (
    <Layout>
      <div className="relative w-full h-full bg-hero lg:min-h-700 min-h-406 bg-no-repeat bg-cover bg-center flex flex-col items-center">
        <img
          src="/images/draco1.png"
          alt="draco-toothless"
          className="absolute md:w-365 md:h-365 h-175 w-175 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="bg-main-text max-w-954 w-full hidden lg:flex items-center justify-start rounded-[42px] border-4 border-black p-12 absolute -top-20">
          <h3 className="font-bold text-6xl">TOOTHLESS</h3>
        </div>

        <img
          src="/images/draco2.png"
          alt="draco-toothless-2"
          className="hidden lg:flex absolute h-263 w-479 top-1/2 left-1/3 transform xl:translate-x-2/3 lg:translate-x-1/3 -translate-y-2/3"
        />

        <div className="-rotate-12 absolute xl:left-2/4 lg:left-[40%] transform lg:translate-y-0 -translate-y-1/2 xl:translate-x-1/4 lg:translate-x-1/3 bg-secondary-bg lg:max-w-444 max-w-248 w-full flex items-center justify-center flex-col py-4 border-4 border-[#1E1E1E] rounded-[42px]">
          <p className="text-stroke-black-2 text-main-text font-bold lg:text-5xl text-2xl">
            HERE’S THE
          </p>
          <p className="text-stroke-black-2 text-main-text font-bold lg:text-5xl text-2xl">
            TOOTHLESS
          </p>
        </div>
      </div>

      <div className="mt-40 pb-20 flex items-center lg:px-16 px-11 lg:flex-row flex-col gap-8 md:gap-14 justify-center relative">
        <img
          src="/images/draco3.png"
          alt="draco-toothless-on-rock"
          className="md:w-488 md:h-488 w-300 h-300"
        />
        <div className="flex flex-col items-center md:gap-12 gap-7">
          <h4 className="text-main text-stroke-black-2 font-bold md:text-6xl text-3xl text-center">
            ABOUT TOOTHLESS
          </h4>
          <p className="max-w-700 text-center text-white font-helvetica font-normal md:text-3xl text-xl">
            Dragons are scary. Except this one. While others roared and raged, this dragon lost its
            teeth in a tragic jawbreaker accident. It traded terror for twirls and gumption for
            grooves. And honestly? It’s killing it on the dance floor. Who needs fangs when you have
            funk?
          </p>
        </div>

        <img
          src="/images/rock.png"
          alt="draco-toothless-on-rock"
          className="absolute bottom-0 right-1/3"
        />
      </div>

      <div className="flex flex-col items-center pt-8 md:pt-14 px-3 bg-how-to-buy bg-no-repeat bg-center bg-cover pb-32 relative">
        <h3 className="text-main text-stroke-white-2 font-bold md:text-[96px] text-3xl text-center md:mb-10 mb-7">
          HOW TO BUY
        </h3>

        <p className="text-center font-helvetica font-bold max-w-700 w-full text-white md:text-3xl text-xl md:mb-16 mb-14">
          FOLLOW THESE EASY STEPS TO BECOME A TOOTHLESS HOLDER
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-3 md:gap-x-5 max-w-1048">
          <div className="md:border-4 border-2 bg-main border-main-text rounded-[42px] flex flex-col md:gap-5 gap-3 md:p-8 p-6">
            <p className="text-main font-bold md:text-3xl text-xl">
              1. Create a wallet with Phantom
            </p>
            <p className="text-white md:text-2xl text-xl">
              Visit <a href="https://phantom.app/">phantom.app</a> and follow the simple steps to
              create a new account with the Phantom app or browser extension.
            </p>
          </div>

          <div className="md:border-4 border-2 bg-main border-main-text rounded-[42px] flex flex-col md:gap-5 gap-3 md:p-8 p-6">
            <p className="text-main font-bold md:text-3xl text-xl">2. Get some $SOL</p>
            <p className="text-white md:text-2xl text-xl">
              Tap the BUY button in the app to purchase Solana, or deposit $SOL to your Phantom
              wallet from the crypto exchange of your choice.
            </p>
          </div>

          <div className="md:border-4 border-2 bg-main border-main-text rounded-[42px] flex flex-col md:gap-5 gap-3 md:p-8 p-6">
            <p className="text-main font-bold md:text-3xl text-xl">3. Swap $SOL for $TOOTHLESS</p>
            <p className="text-white md:text-2xl text-xl">
              Tap the SWAP icon in your Phantom wallet and paste the $TOOTHLESS token address. Swap
              your $SOL for $TOOTHLESS.
            </p>
          </div>

          <div className="md:border-4 border-2 bg-main border-main-text rounded-[42px] flex flex-col md:gap-5 gap-3 md:p-8 p-6">
            <p className="text-main font-bold md:text-3xl text-xl">
              4. You are now a $TOOTHLESS holder!
            </p>
            <p className="text-white md:text-2xl text-xl">
              Dance, dance, dance, dance, dance, dance, dance, dance, dance, dance, dance, dance,
              dance, dance, dance.
            </p>
          </div>
        </div>

        <img
          src="/images/draco4.png"
          alt="draco-sitting"
          className="absolute bottom-0 md:w-485 w-327 xl:right-1/4 md:right-10 right-2"
        />
      </div>

      <div className="bg-[#B4815B] pt-8 md:pt-14 px-3 md:pb-52 pb-32 relative flex flex-col items-center">
        <h3 className="text-white text-stroke-green-2 font-bold md:text-[96px] text-3xl text-center mb-10">
          HOW TO BUY
        </h3>

        <div className="flex flex-col xl:hidden items-center gap-5 w-full max-w-700 mb-5">
          <div className="md:border-4 border-2 bg-main border-white rounded-[42px] flex gap-3 p-4 items-center w-full justify-center">
            <p className="text-white font-bold text-sm">TOTAL SUPPLY:</p>
            <p className="text-white text-sm">1 BILLION COINS</p>
          </div>

          <div className="md:border-4 border-2 bg-main border-white rounded-[42px] flex gap-3 p-4 items-center w-full justify-center">
            <p className="text-white text-sm">AKAMQAag9ZtjDMUQDwZgmVDvBHPDabc2CDuC7v4omKC</p>
          </div>

          <button
            className="text-sm text-main-bg bg-white rounded-[42px] flex p-4 items-center w-full justify-center gap-4"
            onClick={() => copyFn("AKAMQAag9ZtjDMUQDwZgmVDvBHPDabc2CDuC7v4omKC")}
          >
            COPY CONTRACT ADDRESS
            {!value ? (
              <img src="/images/copy.svg" alt="copy" className="w-4 h-4" />
            ) : (
              <img src="/images/check.svg" alt="copy" className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="flex items-start xl:justify-between justify-center bg-how-to-buy px-8 py-11 rounded-[42px] border-4 border-white xl:max-w-max xl:w-auto w-full max-w-700">
          <img src="/images/draco5.png" alt="draco-with-pc" className="md:w-519 w-349" />

          <div className="xl:flex flex-col hidden items-center gap-9">
            <div className="md:border-4 border-2 bg-main border-main-text rounded-[42px] flex md:gap-5 gap-3 md:p-8 p-6 items-center">
              <p className="text-main font-bold md:text-xl text-base">TOTAL SUPPLY:</p>
              <p className="text-white md:text-xl text-base">1 BILLION COINS</p>
            </div>

            <div className="md:border-4 border-2 bg-main border-main-text rounded-[42px] flex md:gap-5 gap-3 md:p-8 p-6 items-center">
              <p className="text-main font-bold md:text-xl text-base">CA:</p>
              <p className="text-white md:text-xl text-base">
                AKAMQAag9ZtjDMUQDwZgmVDvBHPDabc2CDuC7v4omKC
              </p>
            </div>

            <button
              className="text-xl text-main-bg bg-white rounded-[42px] flex items-center justify-center md:gap-5 gap-3 md:py-8 px-8"
              onClick={() => copyFn("AKAMQAag9ZtjDMUQDwZgmVDvBHPDabc2CDuC7v4omKC")}
            >
              COPY CONTRACT ADDRESS
              {!value ? (
                <img src="/images/copy.svg" alt="copy" className="w-6 h-6" />
              ) : (
                <img src="/images/check.svg" alt="copy" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <img
          src="/images/trees.png"
          alt="trees"
          className="absolute bottom-0 right-10 xl:block hidden"
        />
      </div>

      <div className="bg-socials bg-no-repeat xl:bg-[length:100%_100%] bg-[length:auto_100%] xl:bg-center bg-right relative flex items-center justify-center w-full md:h-760 h-430">
        <div className="rounded-[42px] border-[#1E1E1E] px-12 md:py-12 py-7 border-4 bg-main-text flex items-center justify-center absolute top-0 transform -translate-y-1/2">
          <h3 className="font-bold text-2xl md:text-6xl text-[#1E1E1E]">SOCIALS</h3>
        </div>

        <div className="flex flex-col items-center md:gap-10 gap-7 transform md:-translate-y-20 -translate-y-10">
          <h4 className="font-bold text-xl md:text-6xl text-main-text">JOIN THE TOOTHLESS ARMY</h4>
          <div className="flex items-center md:gap-10 gap-5">
            <a href="#" className="md:w-[84px] w-[50px]">
              <img src="/images/x.png" alt="x" />
            </a>
            <a href="#" className="md:w-[84px] w-[50px]">
              <img src="/images/tg.png" alt="tg" />
            </a>
            <a href="#" className="md:w-[84px] w-[50px]">
              <img src="/images/insta.png" alt="insta" />
            </a>
            <a href="#" className="md:w-[84px] w-[50px]">
              <img src="/images/tiktok.png" alt="tiktok" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App

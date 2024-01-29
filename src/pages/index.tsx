import { IconLogo } from "@/components/IconLogo";
import { IconBinoculars } from "@/components/IconBinoculars";
import { IconClipboard } from "@/components/IconClipboard";
import { IconBell } from "@/components/IconBell";
import { IconArrowUpRight } from "@/components/IconArrowUpRight";
import { FormEventHandler, useState } from "react";
import { IconLoader } from "@/components/IconLoader";
import Head from "next/head";
export default function Home() {
  const [email, setEmail] = useState("");
  const [stack, setStack] = useState("Csharp");
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const showToast = (error?: boolean) => {
    error ? setShowErrorToast(true) : setShowSuccessToast(true);
    setTimeout(() => {
      error ? setShowErrorToast(false) : setShowSuccessToast(false);
    }, 5 * 1000);
  };
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    fetch(
      `https://docs.google.com/forms/d/e/1FAIpQLSeK1chOi4Z08CF90csc0GUcWIxn0bBLDRtGCKF_9mtAzhyOaA/formResponse?&submit=Submit?usp=pp_url&entry.931842021=${stack}&entry.740404151=${email}`,
      {
        method: "POST",
      }
    )
      .then(() => {
        showToast();
        setIsSubmitLoading(false);
        setEmail("");
      })
      .catch(() => {
        showToast(true);
        setIsSubmitLoading(false);
        setEmail("");
      });
  };

  return (
    <>
    <Head>
        <title>Watchdog waitlist</title>
        <meta charSet="utf-8" />
      </Head>
      <main className="max-w-7xl mx-auto">
        {showSuccessToast && (
          <div
            id="toast-success"
            className=" transition-all ease-in-out flex z-50 fixed left-1 top-1 items-center w-full max-w-xs p-4 mb-4 text-white bg-green-500 rounded-lg shadow "
            role="alert"
          >
            <div className="ms-3 text-sm font-normal">
              Your entry has been submitted.
            </div>
          </div>
        )}
        {showErrorToast && (
          <div
            id="toast-error"
            className="transition-all ease-out flex fixed z-50 left-1 top-1 items-center w-full max-w-xs p-4 mb-4 text-white bg-red-500 rounded-lg shadow "
            role="alert"
          >
            <div className="ms-3 text-sm font-normal">
              An error has occured.
            </div>
          </div>
        )}
        <div className="relative py-10 px-4 md:px-20  bg-[url('/gridbg.png')] bg-cover">
          <IconLogo size={50} className="mx-auto mb-16 lg:mb-0 lg:mx-0" />
          <svg
            viewBox="0 0 1200 701"
            fill="none"
            className=" p-4 hidden lg:block text-[#222]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1200 24C1200 10.7452 1189.25 0 1176 0H668C654.745 0 644 10.7452 644 24V315C644 328.255 633.255 339 620 339H24C10.7452 339 0 349.745 0 363V677C0 690.255 10.7451 701 24 701H769C782.255 701 793 690.255 793 677V436C793 422.745 803.745 412 817 412H1176C1189.25 412 1200 401.255 1200 388V24Z"
              fill="currentColor"
            />
          </svg>
          <div>
            <div className="mb-8 lg:mb-0 lg:w-[34vw] xl:w-[450px] lg:absolute top-32 left-[95px] flex flex-col gap-4 justify-center lg:pt-9">
              <div className="border border-[#1183ED] rounded-full py-2 pl-5 md:pl-7 pr-5 gap-5 md:gap-7 w-min bg-[#E2F0FD] flex items-center">
                <h3 className="text-[#1183ED] font-black text-xl md:text-2xl lg:text-[2.8vw] 2xl:text-5xl">
                  Monitor
                </h3>
                <div className="rounded-full bg-white shadow-md shadow-[#1183ed40] p-2">
                  <IconBinoculars
                    size={24}
                    className="text-[#1183ED] block md:hidden"
                  />
                  <IconBinoculars
                    size={36}
                    className="text-[#1183ED] hidden md:block"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="border border-[#1183ED] rounded-full py-2 pl-5 md:pl-7 pr-5 gap-5 md:gap-7 w-min bg-[#E2F0FD] flex items-center">
                  <h3 className="text-[#1183ED] font-black text-xl md:text-2xl lg:text-[2.8vw] 2xl:text-5xl">
                    Log
                  </h3>
                  <div className="rounded-full bg-white shadow-md shadow-[#1183ed40] p-2">
                    <IconClipboard
                      size={24}
                      className="text-[#1183ED] block md:hidden"
                    />
                    <IconClipboard
                      size={36}
                      className="text-[#1183ED] hidden md:block"
                    />
                  </div>
                </div>
                <div className="border border-[#1183ED] rounded-full py-2 pl-5 md:pl-7 pr-5 gap-5 md:gap-7 w-min bg-[#E2F0FD] flex items-center">
                  <h3 className="text-[#1183ED] font-black text-xl md:text-2xl lg:text-[2.8vw] 2xl:text-5xl">
                    Alert
                  </h3>
                  <div className="rounded-full bg-white shadow-md shadow-[#1183ed40] p-2">
                    <IconBell
                      size={24}
                      className="text-[#1183ED] block md:hidden"
                    />
                    <IconBell
                      size={36}
                      className="text-[#1183ED] hidden md:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#222] -mb-1 lg:w-[34vw]  xl:w-[450px] py-14 px-10 lg:px-5 lg:py-9 text-white rounded-3xl lg:absolute top-32 right-[120px] ">
              <h2 className="text-[24px] md:text-[28px] mb-4 ">
                What are we building ? 🤔{" "}
              </h2>
              <p className="text-xl font-light">
                Watchdog provides real time cloud based monitoring, logging,
                security and alert solutions for software applications
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#222] lg:w-[44vw] xl:w-[650px] py-14 px-10 lg:py-0 lg:px-5 text-white rounded-3xl lg:absolute lg:top-[36vw] xl:top-[470px] left-[120px]">
              <h2 className="text-[24px] md:text-[28px] mb-3 ">
                Join The Waitlist{" "}
              </h2>
              <p className="text-xl font-light mb-1">We are cooking!! 😉 👨‍🍳</p>
              <p className="text-xl font-light mb-7">#BeThere 🫵🏽</p>
              <form
                className="flex flex-col lg:flex-row"
                onSubmit={handleSubmit}
              >
                <label htmlFor="countries" className="hidden">
                  Select an option
                </label>
                <div className="relative lg:w-[18vw] xl:w-56">
                  <select
                    value={stack}
                    onChange={(e) => setStack(e.target.value)}
                    required
                    id="countries"
                    className="select bg-[#E2F0FD] py-2 cursor-pointer px-5 w-full lg:w-[18vw] xl:w-56  border-[10px] border-white rounded-full text-[#1183ED] text-base !outline-none focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  >
                    <option value="Csharp">C# (ASP.NET)</option>
                    <option value="Dart (Flutter)">Dart (Flutter)</option>
                    <option value="Go">Go</option>
                    <option value="Java (Springboot)">Java (Springboot)</option>
                    <option value="Java/Kotlin (Android)">
                      Java/Kotlin (Android)
                    </option>
                    <option value="JavaScript/Typescript (Web)">
                      JavaScript/Typescript (Web)
                    </option>
                    <option value="JavaScript/Typescript (ReactNative)">
                      JavaScript/Typescript (ReactNative)
                    </option>
                    <option value="Python (Django)">Python (Django)</option>
                    <option value="Python (Flask)">Python (Flask)</option>
                    <option value="PHP (Laravel)">PHP (Laravel)</option>
                    <option value="PHP (Symfony)">PHP (Symfony)</option>
                    <option value="Swift">Swift</option>
                    <option value="Others">Others</option>
                  </select>
                  <span className="text-[#1183ED] text-xl z-30 top-[14px] absolute right-7">
                    &or;
                  </span>
                </div>
                <input
                  required
                  className="mx-0 py-2 -my-1 lg:my-0 lg:-mx-2 bg-[#E2F0FD] placeholder:text-[#1183ED] px-5 lg:w-[18vw] xl:w-56  border-[10px] border-white rounded-full text-[#1183ED] text-base !outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className=" hover:border-[#1183ED] justify-center flex items-center gap-2 bg-[#1183ED] px-5 lg:w-[20vw] xl:w-56 border-[10px] border-white rounded-full text-white text-base !outline-none p-2.5"
                >
                  Submit
                  {isSubmitLoading && (
                    <IconLoader size={16} className="text-white animate-spin" />
                  )}
                </button>
              </form>
            </div>
            <div className="px-5 py-10 relative lg:absolute lg:top-[37vw] xl:top-[470px] lg:left-[64vw] xl:left-[850px]">
              <a
                href="https://www.nuget.org/packages/WatchDog.NET"
                target="_blank"
                rel="noopener"
              >
                <IconArrowUpRight
                  size={110}
                  className="absolute transition-all ease-in-out right-10 top-6 lg:-right-10 hover:text-[#1183ED] cursor-pointer text-[#CFE6FB]"
                />
              </a>
              <p className="text-[#444] text-2xl font-extrabold lg:text-2xl mb-2">
                We are
              </p>
              <h2 className="text-[#1183ED] text-4xl lg:text-[3vw] 2xl:text-5xl font-black">
                100k+
              </h2>
              <h2 className="text-[#1183ED] text-4xl lg:text-[3vw] 2xl:text-5xl font-black">
                Downloads
              </h2>
              <p className="text-[#444] text-2xl font-extrabold lg:text-2xl mt-2">
                Strong 💪🏽
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

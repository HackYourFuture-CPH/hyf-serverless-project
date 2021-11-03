import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-1/10 bg-gray-50 fixed z-10 ">
      <Head>
        <title>HYF Active Members</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className=" w-full h-12 flex flex-row ">
        <div className="w-14 h-12 left-5 absolute z-10">
          <img
            src="/logo-round.svg"
            alt="hyf-logo"
            className="w-full h-auto  md:rounded-none mx-auto"
          />
        </div>
        <div className="w-full pt-3">
          <ul className="flex flex-row justify-around float-right pr-5">
            <li className="w-full mx-5 ">
              <Link href="https://www.hackyourfuture.dk/apply">
                <a className="whitespace-nowrap">APPLY</a>
              </Link>
            </li>
            <li className="w-full mx-5">
              <Link href="https://www.hackyourfuture.dk/volunteer">
                <a className="whitespace-nowrap">VOLUNTEER</a>
              </Link>
            </li>
            <li className="w-full mx-5">
              <Link href="https://www.hackyourfuture.dk/about">
                <a className="whitespace-nowrap">ABOUT</a>
              </Link>
            </li>
            <li className="w-full mx-5">
              <Link href="https://www.hackyourfuture.dk/hire">
                <a className="whitespace-nowrap">HIRE</a>
              </Link>
            </li>

            <li className="w-full mx-10 bg-indigo-900">
              <Link href="https://www.hackyourfuture.dk/donate">
                <a className="whitespace-nowrap text-white p-10">SUPPORT</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

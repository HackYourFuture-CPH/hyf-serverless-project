import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-gray-50 fixed z-10">
      <Head>
        <title>HYF Active Members</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full flex flex-row items-center justify-end">
        <div className="left-5 absolute z-10 w-24 top-5">
          <img
            src="/logo-round.svg"
            alt="hyf-logo"
          />
        </div>
        <div className="py-4 uppercase">
          <ul className="flex flex-col md:flex-row justify-end items-center">
            <li className="w-full mr-5">
              <Link href="https://www.hackyourfuture.dk/apply">
                <a className="whitespace-nowrap">Apply</a>
              </Link>
            </li>
            <li className="w-full mr-5">
              <Link href="https://www.hackyourfuture.dk/volunteer">
                <a className="whitespace-nowrap">Volunteer</a>
              </Link>
            </li>
            <li className="w-full mr-5">
              <Link href="https://www.hackyourfuture.dk/about">
                <a className="whitespace-nowrap">About</a>
              </Link>
            </li>
            <li className="w-full mr-5">
              <Link href="https://www.hackyourfuture.dk/hire">
                <a className="whitespace-nowrap">Share your story</a>
              </Link>
            </li>
            <li className="w-full mr-5">
              <Link href="https://www.hackyourfuture.dk/donate">
                <a className="whitespace-nowrap text-white px-5 py-3 inline-block bg-indigo-900">Support</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

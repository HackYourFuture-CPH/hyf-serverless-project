import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-12 pt-3 bg-indigo-900">
      <ul className="flex flex-row justify-around float-right pr-5 text-white ">
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
  );
}

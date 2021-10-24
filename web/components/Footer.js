import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <div className="w-full h-12 pt-3 bg-indigo-900 flex flex-row ">
      <div className="w-3/4 flex flex-row text-white text-xs "><p  className="pl-10" >Foreningen HackYourFuture | CVR: 38533193 | {""}</p>
      <Link  href="mailto:cph@hackyourfuture.dk"> cph@hackyourfuture.dk</Link></div>
      <ul className=" w-1/4 flex flex-row justify-around  pr-5 text-white ">
        <li className="w-full mx-5 ">
          <Link href="https://www.linkedin.com/school/hackyourfuture-copenhagen/">
          <Image
            width="20"
            height="20"
            src="/linkedIn.png"
            alt="hyf linkedIn logo"
          />
          </Link>
        </li>
        <li className="w-full mx-5">
          <Link href="https://github.com/hackyourfuture-cph">
          <Image
            width="20"
            height="20"
            src="/github.png"
            alt="hyf github logo"
          />
          </Link>
        </li>
      </ul>
    </div>
  );
}

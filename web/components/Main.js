import Image from "next/image";

export default function Main(params) {
  return (
    <div className="md:w-full h-26 md:rounded-none mx-auto">
      <Image
        src="/frontpage.jpeg"
        alt="hyf-logo"
        width="100"
        height="50"
        layout="responsive"
      />
      <div className="bg-indigo-900">
        <p className="text-white text-3xl p-10">
          We believe talented newcomers are a great opportunity for society and
          we are here to give them a helping hand to make use of their
          potential.
        </p>
      </div>
    </div>
  );
}

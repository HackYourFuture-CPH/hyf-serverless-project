
export default function Main() {
  return (
    <div className="md:w-full md:rounded-none mx-auto mt-48 md:mt-20">
      <img
        src="/frontpage.jpeg"
        alt="hyf-logo"
        className="w-full md:rounded-none mx-auto object-cover object-top"
        style={{maxHeight: "40rem"}}
        />
      <div className="bg-indigo-900">
        <p className="text-white text-xl md:text-3xl py-8 px-12 text-center font-light leading-8">
          We believe talented newcomers are a great opportunity for society and
          we are here to give them a helping hand to make use of their
          potential.
        </p>
      </div>
    </div>
  );
}

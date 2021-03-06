import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Card from "../components/Card";
import Link from "next/link";
import usePersons from "../hooks/usePersons";

export default function Home() {
  const { persons } = usePersons();

  return (
    <div className="flex flex-col w-full h-auto font-mono">
      <Header />
      <Main />
      <div className="grid grid-cols-2 gap-4 pt-3 p-4">
        {persons.map((person) => {
          return <Card member={person} />;
        })}
      </div>
      <div className="w-full flex flex-row justify-between mt-5 bg-gray-200">
        <img
          className="w-2/5 object-cover object-center"
          src="/story.png"
          alt=""
        />
        <div className="w-3/5">
          <p className="text-2xl md:text-4xl text-blue-900 p-4 md:p-10 leading-8">
            Did you find a job and you want to share the good news with the
            community?{" "}
          </p>
          <div className="ml-4 md:mx-10 mb-4 md:mb-10">
            {/* link to form page */}
            <Link href="/share-story">
              <a className="whitespace-nowrap text-white bg-blue-900 py-4 px-5 inline-block text-sm md:text-lg hover:bg-blue-800">
                SHARE YOUR STORY
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
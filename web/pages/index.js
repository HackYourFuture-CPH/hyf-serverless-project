import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Link from "next/link";
import Image from "next/image";
export const baseURL = process.env.AWS_BASE_URL;

export default function Home({ data }) {
  return (
    <div className="flex flex-col w-full h-auto font-mono">
      <div>
        <Header />
        <Main />
      </div>
      <div className="grid grid-cols-2 gap-4 pt-3 p-4">
        {data &&
          data.map((member) => {
            return (
              <div
                className="min-w-3/4 rounded overflow-hidden shadow-lg flex-shrink-0 "
                key={member.id}
              >
                <img
                  className="w-full h-auto  md:rounded-none mx-auto"
                  src={member.imageUrl}
                  alt={member.fullname}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {" "}
                    {member.fullname}
                  </div>
                  <p className="text-gray-700 text-base">
                    {" "}
                    Company: <strong>{member.company}</strong>
                  </p>
                  <p className="text-gray-700 text-base">
                    {" "}
                    Position: <strong>{member.position}</strong>
                  </p>
                  <p className="text-gray-700 text-base">
                    {" "}
                    Assignment: <strong>{member.assignment}</strong>
                  </p>
                  <p className="text-gray-700 text-base">
                    {" "}
                    Interview Rounds: <strong>{member.interviewRounds}</strong>
                  </p>
                  <p className="text-gray-700 text-base">
                    Class Number: <strong>{member.classNr}</strong>
                  </p>
                </div>
                <div className="w-2/4 flex justify-around p-10">
                  {member.linkedIn && <Link className="w-full" href={member.linkedIn}>
                    <Image
                      width="20"
                      height="20"
                      src="/linkedIn.png"
                      alt={member.linkedIn}
                    />
                  </Link>}
                  {member.github && <Link className="w-full" href={member.github}>
                    <Image
                      width="20"
                      height="20"
                      src="/github.png"
                      alt={member.github}
                    />
                  </Link>}
                </div>
              </div>
            );
          })}
      </div>
      <dv className="w-full h-auto flex flex-row justify-between p-10">
        <div className="w-2/6">
          <Image
            width="150"
            height="100"
            src="/story.png"
            alt=""
            layout="responsive"
          />
        </div>
        <div className="w-3/4 h-auto pl-10">
          <p className="text-4xl text-indigo-900 ">
            Did you find a job and you want to share the good news with the
            community?{" "}
          </p>
          <div className="max-w-md bg-indigo-900 m-5 p-2">
            {/* link to form page */}
            <Link  href="../FormComponent">
              <a className="whitespace-nowrap text-white p-10 ">
                SHARE YOUR STORY
              </a>
            </Link>
          </div>
        </div>
      </dv>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const dummyData = [{
  "id": "1",
  "imageUrl": "http://placehold.it/120x120&text=image1",
  "github": "https://github.com/basafilm",
  "company": "Google",
  "linkedIn": "https://www.linkedin.com/in/malek-shafi-i-8b874518/?originalSubdomain=dk",
  "interviewRounds": "120",
  "classNr": "13",
  "fullname": "Mælek Shafi'i",
  "position": "Full Stack Developer",
  "assignment": "test.com"
 },
 {
  "id": "2",
  "imageUrl": "http://placehold.it/120x120&text=image1",
  "github": "https://github.com/basafilm",
  "company": "Google",
  "linkedIn": "https://www.linkedin.com/in/malek-shafi-i-8b874518/?originalSubdomain=dk",
  "interviewRounds": "120",
  "classNr": "13",
  "fullname": "Mælek Shafi'i",
  "position": "Full Stack Developer",
  "assignment": "test.com"
 },{
  "id": "3",
  "imageUrl": "http://placehold.it/120x120&text=image1",
  "github": "https://github.com/basafilm",
  "company": "Google",
  "linkedIn": "https://www.linkedin.com/in/malek-shafi-i-8b874518/?originalSubdomain=dk",
  "interviewRounds": "120",
  "classNr": "13",
  "fullname": "Mælek Shafi'i",
  "position": "Full Stack Developer",
  "assignment": "test.com"
 },{
  "id": "4",
  "imageUrl": "http://placehold.it/120x120&text=image1",
  "github": "https://github.com/basafilm",
  "company": "Google",
  "linkedIn": "https://www.linkedin.com/in/malek-shafi-i-8b874518/?originalSubdomain=dk",
  "interviewRounds": "120",
  "classNr": "13",
  "fullname": "Mælek Shafi'i",
  "position": "Full Stack Developer",
  "assignment": "test.com"
 }]
export async function getStaticProps(context) {
  const res = await fetch('https://o3fp0fun12.execute-api.us-east-1.amazonaws.com/Prod/');
  // const data = await res.json() ;
  const data = await res.json();
   console.log(data)
  

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}

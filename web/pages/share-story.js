import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function ShareStory() {
    return (
      <div className="flex flex-col w-full h-auto font-mono">
        <Header />
        <div className="flex bg-gray-100 font-mono flex-col md:flex-row w-full text-gray-900">
          <img
            className="shadow-xl max-h-96 md:max-h-full align-left border-none w-full md:w-2/5 object-cover"
            src="/formImage.jpeg"
            alt="form/img"
          />
          <Form />
        </div>
        <Footer />
      </div>
    );
}

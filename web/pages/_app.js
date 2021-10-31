import "tailwindcss/tailwind.css";
import { SWRConfig } from "swr";

const fetcher = async (input, init) => {
  const res = await fetch(input, init);
  return res.json();
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;

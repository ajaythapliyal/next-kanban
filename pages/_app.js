import "@/styles/globals.css";
import "@/styles/normalize.css";
import Headers from "@/components/header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Headers name="marketing plan"></Headers>
      <Component {...pageProps} />
    </div>
  );
}

import "../styles/globals.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-gray-500 text-gray-100">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import { SWRConfig } from "swr";

import "tailwindcss/tailwind.css";
import "styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;

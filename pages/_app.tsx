import { SWRConfig } from "swr";

import React from "react";
import "tailwindcss/tailwind.css";
import "styles/globals.css";

function App({ Component, pageProps }) {
  React.useLayoutEffect = React.useEffect;
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;

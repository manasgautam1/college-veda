import Script from "next/script";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import "@styles/scss/Global.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      <Script
        src="https://kit.fontawesome.com/fbadad80a0.js"
        crossOrigin="anonymous"
      />
    </>
  );
}

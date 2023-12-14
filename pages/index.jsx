import HomeComponent from "@/components/Home";
import SEO from "@/components/Seo";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <>
      <SEO pageTitle="HOME" />
      <Header />
      <HomeComponent />
      <Footer />
    </>
  );
}

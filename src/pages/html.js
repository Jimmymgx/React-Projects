import Header from "../comp/header";
import Footer from '../comp/footer';
import MainComp from '../comp/mainComp';
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="HTMLLLLLLLLLLLLLLLLLLLLLLL" />
    <title>HTML Page</title>
    </Helmet>
      <Header />
      <MainComp PageContent="HTML Page"  />
      <Footer />
    
    </>
  );
};

export default Html;

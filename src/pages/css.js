import Header from "../comp/header";
import Footer from '../comp/footer';
import MainComp from '../comp/mainComp';
import { Helmet } from "react-helmet-async";
const Css = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="cssssssssssssssssssssssssssssssssssssss" />
    <title>CSS Page</title>
    </Helmet>
      <Header />
      <MainComp PageContent="CSS Page"  />
      <Footer />
    
    </>
  );
};

export default Css;

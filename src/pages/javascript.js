import Header from "../comp/header";
import Footer from '../comp/footer';
import MainComp from '../comp/mainComp';
import { Helmet } from "react-helmet-async";
const Javascript = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="JSSSSSSSSSSSSSSSSSSSSSSS" />
    <title>JavaScript Page</title>
    </Helmet>
      <Header />
      <MainComp PageContent="JavaScript Page"  />
      <Footer />
    
    </>
  );
};

export default Javascript;

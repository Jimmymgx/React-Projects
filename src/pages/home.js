import Header from "../comp/header";
import Footer from '../comp/footer';
import MainComp from '../comp/mainComp';
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="Homeeeeeeeeeeeeeeeee" />
    <title>Home Page</title>
    </Helmet>
      <Header />
      <MainComp PageContent="Home Page"  />
      <Footer />
    
    </>
  );
};

export default Home;

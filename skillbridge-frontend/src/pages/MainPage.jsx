//MainPage.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import MainIntro from "../components/MainIntro/MainIntro";
import ChatButton from "../components/ChatButton/ChatButton";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainIntro />
      <Search />
      <Footer />
      <ChatButton />
    </>
  );
};

export default MainPage;

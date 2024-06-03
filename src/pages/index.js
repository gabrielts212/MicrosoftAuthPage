


import Classe from "../components/classe/classe";
import Aboutus from "../components/aboutus/aboutus";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// import Favorite from "../components/favorite/favorite";
// import Study from "../components/study/study";
// import Learning from "../components/learning/learning";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Learning/>
      <Study />
      <Favorite/> */}
      <Classe/>
      <Aboutus />
      <Footer />
    </div>
  );
}

import { Advantages } from "./components/advantages";
import { CryproCurrenceis } from "./components/cryptocurrenceis";
import { DownloadSection } from "./components/download";
import { Footer } from "./components/footer";
import { GraphSection } from "./components/graph-section";
import { Header } from "./components/header";
import HowItWorks from "./components/howitworks";
import { MainSection } from "./components/main-section/main-section";
import { Wrapper } from "./components/wrapper";


function App() {
  return (
    <Wrapper>
      <Header />
      <MainSection />
      <Advantages />
      <HowItWorks />
      <CryproCurrenceis />
      <GraphSection />
      <DownloadSection />
      <Footer />
    </Wrapper>
  );
}

export default App;

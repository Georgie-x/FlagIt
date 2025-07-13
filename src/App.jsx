import {
  Header,
  Footer,
  InfoArea,
  ActionButton,
  Display,
  AnswerArea,
} from "./components/index";

function App() {
  return (
    <>
      <div className="layout-container">
        <Header />
        <Display />
        <InfoArea />
        <ActionButton />
        <AnswerArea />
        <Footer />
      </div>
    </>
  );
}

export default App;

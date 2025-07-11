import { Header, Footer, Instructions, ActionButton, Display } from "./components/index";

function App() {
  return (
    <>
      <div className="layout-container">
        <Header />
        <Instructions />
        <ActionButton />
        <Display />
        <Footer />
      </div>
    </>
  );
}

export default App;

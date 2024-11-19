import { Header } from "./components/Header";
import Home from "./routes/home/Home";

function App() {
  return (
    <>
      <main className="min-h-screen dark:bg-gray-700 ">
        {" "}
        <Header />
        <Home/>
      </main>
    </>
  );
}

export default App;

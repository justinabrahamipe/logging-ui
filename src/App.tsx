import { Header } from "./components/Header";
import Home from "./routes/home/Home";

function App() {
  return (
    <>
    <Header/>   
    <main className="min-h-screen dark:bg-gray-800">
       <Home />
    </main>
    </>
  );
}

export default App;

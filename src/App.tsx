import { Header } from "./components/Header";
import Home from "./routes/home/Home";

function App() {
  return (
    <>
    <Header/>
   
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
       <Home/>
    </main>
    </>
  );
}

export default App;

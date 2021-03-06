import { onMount } from "solid-js";
import Header from "./components/Header";
import { StoreProvider } from "./store";
import About from "./views/About";
import Contact from "./views/Contact";
import Intro from "./views/Intro";
import Works from "./views/Works";
import './App.module.css';


function App() {
  onMount(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:'auto'
    })
  })
  return (
    <StoreProvider>
      <div class="bg-black w-screen min-h-screen overflow-x-hidden scroll-snap-container">
        <Header />
        <Intro />
        <About />
        <Works />
        <Contact />
      </div>
    </StoreProvider>
  );
}

export default App;

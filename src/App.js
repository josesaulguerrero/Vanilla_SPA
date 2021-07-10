import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { matchRoute } from "./routes/router.js";
import { InfiniteScroll } from "./utils/infinite_scroll.js";
import API from "./utils/api_info.js";

export async function App() {
   const $root = document.getElementById('root');
   $root.innerHTML = null;
   
   $root.appendChild(Header());
   $root.appendChild(Main());
   
   
   const $main = document.getElementById('main');
   API.page = 1;
   API.pageSearch = 1;
   // debugger
   await matchRoute()
   $main.appendChild(Loader());
   // InfiniteScroll();

   document.getElementById('loader').classList.add('loader--hidden');
}
// import routes from './routes.js'
import { Home } from "../components/Home.js";
import { About } from "../components/About.js";
import { Search } from "../components/Search.js";
import { ErrorNotFound } from "../components/404.js";
import { CharacterDetails } from "../components/CharacterDetails.js";
// --------------------------------------------------------

// async function _renderRoute(route) {
//    let { template } = routes[route];
//    const $main = document.getElementById('main');
//    debugger
//    $main.appendChild(await template);
// }

export async function matchRoute() {

   let $main = document.getElementById('main');
   const { hash } = location;
   if(!hash || hash === "#/home") {
      $main.appendChild(await Home());
   } else if(hash === "#/about") {
      $main.appendChild(About());
   } else if(hash.includes('#/search')) {
      $main.appendChild(Search());
   } else if(/#\/character\/(\d{1,3})/.test(location.hash)) {
      console.log('char')
      $main.appendChild(await CharacterDetails());
   } else {
      $main.appendChild(ErrorNotFound());
   }

}
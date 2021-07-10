import { Home } from "../components/Home.js";
import { About } from "../components/About.js";
import { Search } from "../components/Search.js";
import { ErrorNotFound } from "../components/404.js";
import { CharacterDetails } from "../components/CharacterDetails.js";

const routes = {
   "#/home": {
      template: Home(),
   },
   "#/search": {
      template: Search(),
   },
   "#/404": {
      template: ErrorNotFound(),
   },
   "#/character": {
      template: CharacterDetails(),
   },
   "#/about": {
      template: About(),
   }
}

export default routes;
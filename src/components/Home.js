import GetData from "../utils/get_data.js";
import API from "../utils/api_info.js"
import { Character } from "./Character.js";

export async function Home() {
   const $home = document.createElement('section');
   $home.id = 'home';
   $home.classList.add('home');

   const response = await GetData(API.CHARACTER);
   const data = response.results.reduce((acumulator, item) => {
      return acumulator += Character(item);
   }, "")

   $home.innerHTML = await data;

   return $home;
}
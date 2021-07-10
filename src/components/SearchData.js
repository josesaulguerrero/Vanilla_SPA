import API from "../utils/api_info.js";
import GetData from "../utils/get_data.js";
import { ErrorNotFound } from "./404.js";
import { Character } from "./Character.js";

export async function SearchData() {
   const $resultsContainer = document.getElementById('results');
   // console.log('hola', $resultsContainer)
   $resultsContainer.innerHTML = null;
   const query = document.getElementById('input').value;
   sessionStorage.setItem('query', query);
   document.getElementById('input').value = sessionStorage.getItem('query');
   if(query){
      try {
         const response = await GetData(`${API.SEARCH_CHARACTER}${query}`);
         const data = response.results.reduce((acumulator, item) => {
            return acumulator += Character(item);
         }, "")
         $resultsContainer.innerHTML = data;
         console.log(response)
      } catch {
         $resultsContainer.appendChild(ErrorNotFound());
      }
   } else {
      $resultsContainer.appendChild(ErrorNotFound());
   }
}
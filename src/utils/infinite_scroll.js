import { Character } from "../components/Character.js";
import API from "./api_info.js";
import GetData from "./get_data.js";


export async function InfiniteScroll() {

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      let component, parent, URL, query;
      const { hash } = location;
      const $home = document.getElementById('home');
      const $resultsContainer = document.getElementById('results');
      if(clientHeight + scrollTop >= scrollHeight - 100) {
         // sessionStorage.setItem('page', API.page);
         if(!hash || hash === "#/home") {
            component = Character;
            parent = $home;
            URL = `${API.NEXT}${API.page += 1}`;
         } else if(hash.includes('#/search')){
            console.log('hola')
            component = Character;
            parent = $resultsContainer;
            query = document.getElementById('input').value;
            URL = `${API.SEARCH_CHARACTER}${query}&page=${API.pageSearch += 1}`;
            // query = document.getElementById('input').value;
         } else {
            return false;
         }
         try {
            // ShowLoading()
            const response = await GetData(URL);
            const data = response.results.reduce((acumulator, item) => {
               return acumulator += component(item);
            }, "");
            
            parent.insertAdjacentHTML('beforeend', data);
            // window.removeEventListener('scroll')

            HideLoader()
         } catch {
            // console.log('no more chars')
            const $containerEnd = document.getElementById('dataend');
            $containerEnd.innerHTML = null;
            $containerEnd.innerHTML = "<h2>there is no more available data</h2>" 
            HideLoader();
            
         }
      }

}

function ShowLoading() {
   const $loader = document.getElementById('loader');
   $loader.classList.remove('loader--hidden');
}

function HideLoader() {
   const $loader = document.getElementById('loader');
   $loader.classList.add('loader--hidden');
}
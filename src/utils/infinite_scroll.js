import { Character } from "../components/Character.js";
import { Home } from "../components/Home.js";
import API from "./api_info.js";
import GetData from "./get_data.js";

export async function InfiniteScroll() {
   window.addEventListener('scroll', async () => {

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      let component;
      const { hash } = location;
      const $home = document.getElementById('home');
      if(clientHeight + scrollTop >= scrollHeight - 100) {
         ShowLoading()
         // sessionStorage.setItem('page', API.page);
         if(!hash || hash === "#/home") {
            component = Character;
         } else {
            return false;
         }
         const response = await GetData(`${API.NEXT}${API.page += 1}`);
         const data = response.results.reduce((acumulator, item) => {
            return acumulator += component(item);
         }, "");
         
         console.log(API)

         $home.insertAdjacentHTML('beforeend', data);
         // const HomeData = $home.innerHTML;
         // console.log(HomeData)
      }

   })
}

function ShowLoading() {
   const $loader = document.getElementById('loader');
   $loader.classList.remove('loader--hidden');
}
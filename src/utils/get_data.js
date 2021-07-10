import { ErrorNotFound } from "../components/404.js";

const GetData = async (URL) => {
   debugger
   try {
      const response = await fetch(URL)
      console.log(URL)
      const data = await response.json();
      return data;
   } catch(error){ 
      // console.error('fetch error: ', error)
      const $main = document.getElementById('main');
      $main.appendChild(ErrorNotFound());
   }
}

export default GetData;
import API from "../utils/api_info.js";
import GetData from "../utils/get_data.js";
import { BackButton } from "./BackButton.js";

export async function CharacterDetails() {

   console.log('id')
   debugger
   let id = location.hash.replace(/#\/character\/(\d{1,3})/, "$1");
   const $details = document.createElement('section');
   console.log(id)
   let response = await GetData(`${API.CHARACTER}${id}`);
   console.log(response)
   let data = `
      <section class="image" >
         <img src="${response.image}" alt="${response.name}" /> 
      </section>
      <section class="content" >
         <h2>Name: ${response.name}</h2>
         <h4>Status: ${response.status}</h4>
         <h4>Specie: ${response.species}</h4>
         <h4>Gender: ${response.gender}</h4>
         <h4>Origin place: ${response.origin.name}</h4>
         <h4>Current location: ${response.location.name}</h4>
      </section>
   `;
   
   $details.classList.add("details");
   $details.innerHTML = data;
   $details.insertBefore(BackButton(), $details.firstChild)


   return $details;
}
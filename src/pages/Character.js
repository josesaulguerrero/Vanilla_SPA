import PreviousPage from '@utils/PreviousPage'
import GetData from '@utils/GetData'
// import BackButton from '@templates/BackButton';
// function PreviousPage() {
//    // window.history.back()
// }


const Character = async () => {
   const id = location.hash.replace(/#(\d{1,3})/, "$1");
   const character = await GetData(id);
   // debugger
   // <button onclick="${PreviousPage()}">Go Back</button>
   const view = `
      <button id="backButton">bacgdfk</button>
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}"/>
   `;
   // console.log(view)
   return view;
}


export default Character;
import GetData from '@utils/GetData'

const Character = async () => {
   let id = location.hash.replace(/#(\d{1,3})/, "$1") || 1;
   const characterData = await GetData(id);
   const view = `
      <article class="more-info">
         <button id="backButton" class="backButton">bacgdfk</button>
         <article class="character">
            <section class="character-img">
               <img src="${characterData.image}" alt="${characterData.name}"/>
            </section>
            <section class="character-info">
               <h2>${characterData.name}</h2>
               <h3>Status: ${characterData.status}</h3>
               <h3>gender: ${characterData.gender}</h3>
               <h3>Origin place: ${characterData.origin.name}</h3>
            </section>
         </article>
      </article>
   `;
   return view;
}

export default Character;
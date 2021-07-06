import GetData from '@utils/GetData'

const Character = async () => {
   const id = location.hash.replace(/#(\d{1,3})/, "$1");
   const character = await GetData(id);
   const view = `
      <button id="backButton" class="backButton">bacgdfk</button>
      <article class="character">
         <section class="character-img">
            <img src="${character.image}" alt="${character.name}"/>
         </section>
         <section class="character-info">
            <h2>${character.name}</h2>
            <h3>Status: ${character.status}</h3>
            <h3>gender: ${character.gender}</h3>
            <h3>Origin place: ${character.origin.name}</h3>
         </section>
      </article>
   `;
   return view;
}

export default Character;
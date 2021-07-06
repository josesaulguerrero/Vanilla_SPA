import GetData from '@utils/GetData';

const MainHome = async () => {
   const characters = await GetData();
   const view =  `
      <div class="characters">
         ${characters.results.map((character) => {
            return (
               `
               <a class="card" href="/character#${character.id}">
                  <article class="card-content">
                     <img class="card-image" src="${character.image}" alt="${character.name}"/>
                     <h3 class="card-characterName">${character.name}</h3>
                  </article>
               </a>
               `
            )
         }).join('')}
      </div>
   `;
   return view;
}

export default MainHome;
import GetData from '@utils/GetData';

const MainHome = async () => {
   // const view = `<h1>main home</h1>`;
   const characters = await GetData();
   const view =  `
      <div class="characters">
         ${characters.results.map((character) => {
            return (
               `
               <a href="/#/${character.id}">
                  <article class="card">
                     <img src="${character.image}" alt="${character.name}"/>
                     <h3>${character.name}</h3>
                  </article>
               </a>
               `
            )
            // console.log(character);
         }).join('')}
      </div>
   `;
   // console.log(view)

   return view;
}

export default MainHome;
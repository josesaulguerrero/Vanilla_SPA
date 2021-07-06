import GetData from '@utils/GetData';

const MainHome = async () => {
   const characters = await GetData(null);
   const view =  `
      <div class="characters">
         ${characters.results.map((char) => {
            return ( `<a class="card" href="/character#${char.id}">
                        <article class="card-content">
                           <img class="card-image" src="${char.image}" alt="${char.name}"/>
                           <h3 class="card-characterName">${char.name}</h3>
                        </article>
                     </a>`)
         }).join('')}
      </div>
   `;
   console.log(characters)
   return view;
}

export default MainHome;
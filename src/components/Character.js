export function Character(data) {
   // const $character = document.createElement('article');
   // $character.id = 'character';
   // $character.classList.add('character');
   const DefaultImage = "http://assets.stickpng.com/thumbs/58f37731a4fa116215a92411.png";

   return `
      <article class="card" id="${data.id}" >
         <section class="image" >
            <img src="${data.image || DefaultImage}" alt="${data.name}" /> 
         </section>
         <section class="content" >
            <h2 class="name" >${data.name}</h2>
            <h4 class="status" >${data.status}</h4>
         </section>
         <section class="view_more" >
            <a href="#/character/${data.id}" >View More</a>
         </section>
      </article>
   `;
}
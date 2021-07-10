export function Search() {
   const $search = document.createElement('section');
   $search.id = 'about';
   $search.classList.add('about');
   $search.innerHTML = `
      <section id="form-section" class="form-section" >
         <form>
            <input type="search" id="input" autocomplete="off" placeholder="Enter a character's name...">
            <input type="submit" placeholder="Go!">
         </form>
      </section>
      <section id="results" class="results">
      
      </section>
      <section class="dataend" id="dataend" ></section>
   `;

   return $search;
}
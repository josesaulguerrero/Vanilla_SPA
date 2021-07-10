export function Search() {
   const $search = document.createElement('section');
   $search.id = 'about';
   $search.classList.add('about');
   $search.innerHTML = `
      <h2>Search</h2>
   `;

   return $search;
}
export function About() {
   const $about = document.createElement('section');
   $about.id = 'about';
   $about.classList.add('about');
   $about.innerHTML = `
      <h2>About</h2>
   `;

   return $about;
}
export function About() {
   const $about = document.createElement('section');
   $about.id = 'about';
   $about.classList.add('about');
   $about.innerHTML = `
      <h2>About this project</h2>
      <p>This website is a simple practice, whose only purpose is to practise my skills on JS</p>
   `;

   return $about;
}
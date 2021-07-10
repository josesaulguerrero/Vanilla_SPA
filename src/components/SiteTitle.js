export function Title() {
   const $title = document.createElement('section');
   const $image = "https://i.postimg.cc/HktpyjRz/image.png";
   $title.innerHTML = `
      <a href="#/home" >
         <img src="${$image}" class="header__image" alt="rick and morty title" >
      </a>
   `;

   return $title;
}
export function NavBar() {
   const $navBar = document.createElement('nav');
   $navBar.id = "nav_bar";
   $navBar.classList.add('nav_bar');
   $navBar.innerHTML = `
      <ul class="nav-links__container" >
         <li class="nav-link" > <a href="#/home" >Home</a> </li>
         <li class="nav-link" > <a href="#/search" >Search</a> </li>
         <li class="nav-link" > <a href="#/about" >About</a> </li>
      </ul>
   `;

   return $navBar;
}
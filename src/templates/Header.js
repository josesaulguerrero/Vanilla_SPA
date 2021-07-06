const Header = () => {
   const view = `
   <div class="header-main">
      <div class="header-logo"> 
      <a class="logo-anchor" href="/">
         <img class="logo" src="https://image.flaticon.com/icons/png/512/763/763780.png" alt="the page logo"/>
         <h1>
            100tifi.co
         </h1>
      </a>
      </div>
      <div class="header-nav">
         <a href="/about">
            About
         </a>
      </div>
   </div>
   `;
   return view;
}

export default Header;
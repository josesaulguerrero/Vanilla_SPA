import header from '@templates/Header';
import routes from '@routes/routes'
class router {
   constructor(paths) {
      this.paths = paths;
      this.initRouter();
   }

   async initRouter() {
      const pathname = window.location.href.replace(/https?\:\/\/.*\/(\w{0,})?(#\d{0,3})?/, "/$1") || "/home";
      console.log(pathname)
      switch(pathname) {
         case "/": 
         case "/home":
            this.render("/home");
            break;
         case "/about": 
            this.render("/about");
            break;
         case "/character": 
            this.render("/character");
            break;
         default: 
            this.render("/errornotfound");
            break;
      }
   }

   async render(page = '/home') {
      const { template } = await this.paths[page] || this.paths.errornotfound;
      const headerContent = document.querySelector('#header');
      headerContent.innerHTML = await header();
      const content = document.querySelector("#content");
      content.innerHTML = await template;
      if(page === "/character"){
         const button = document.getElementById("backButton");
         button.addEventListener("click", () => {
            window.history.back()
         })
      }
   }
}

const MainRouter = new router(routes);
export default MainRouter;
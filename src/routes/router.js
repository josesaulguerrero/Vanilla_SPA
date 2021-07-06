import header from '@templates/Header';
import routes from '@routes/routes'
class router {
   constructor(paths) {
      this.paths = paths;
      this.initRouter();
   }

   async initRouter() {
      const { pathname = "/" } = window.location;
      switch(pathname) {
         case "/": 
         case "/home":
            this.render("/");
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

   async render(page = '/') {
      const { path, template } = await this.paths[page] || this.paths.errornotfound;
      const headerContent = document.querySelector('#header');
      headerContent.innerHTML = await header();
      const content = document.querySelector("#content");
      content.innerHTML = await template;
      if(page === "/character"){
         const button = document.getElementById("backButton");
         console.log(button, "holaa")
         button.addEventListener("click", () => {
            window.history.back()
         })
      }
   }

}

const MainRouter = new router(routes);
export default MainRouter;
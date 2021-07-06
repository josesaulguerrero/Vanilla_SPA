import header from '@templates/Header';


class router {
   constructor(paths) {
      this.paths = paths;
      this.initRouter();
   }

   async initRouter() {
      const { pathname = "/" } = window.location;
      switch(pathname) {
         // case "home":
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

   // async initRouter() {
   //    const { pathname = "/" } = window.location;
   //    const URL = pathname === "/" ? "/home" : parseInt(pathname.replace(/\/(\d{1,3})/, "$1")) >= 1 ? "/character" : pathname;
   //    this.render(URL);
   // }

   async render(page = '/') {
      // const { paths } = this;
      const { path, template } = await this.paths[page] || this.paths.errornotfound;
      // console.log(path, template)
      const headerContent = document.querySelector('#header');
      headerContent.innerHTML = await header();
      const content = document.querySelector("#content");
      content.innerHTML = await template;
      // window.history.pushState({}, "done", path);
      if(page === "/character"){
         const button = document.getElementById("backButton");
         console.log(button, "holaa")
         button.addEventListener("click", () => {
            window.history.back()
            // window.history.back()
         })
      }
   }

}

export default router;
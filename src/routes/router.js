import header from '@templates/Header';

class router {
   constructor(paths) {
      this.paths = paths;
      this.initRouter();
   }

   async initRouter() {
      const hash = location.hash.replace(/#\/(\d{1,3})\/?/, "$1").toLocaleLowerCase() || '/';
      const page = await this.ResolveRoutes(hash);
      await this.render(page);
      console.log(page)
   }
   
   ResolveRoutes = (route) => {
      if(route.length <= 3) {
         let validRoute = route === '/' ? route : '/character';
         return validRoute;
      }
      return route;
   }

   async render(page = '/') {
      const { paths } = this;
      const { path, template } = await paths[page] || paths.ErrorNotFound;
      console.log(path, template)
      const headerContent = document.querySelector('#header');
      headerContent.innerHTML = await header();
      const content = document.querySelector("#content");
      content.innerHTML = await template;
      window.history.pushState({}, "done", path);
   }
}

export default router;
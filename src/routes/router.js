import header from '@templates/Header';

class router {
   constructor(paths) {
      this.paths = paths;
      this.initRouter();
   }

   initRouter() {
      const { location: { pathname = "/" } } = window;
      const page = pathname === "/" ? "Home" : pathname.replace("/", "");
      this.load(page);
   }

   async load(page = 'Home') {
      const { paths } = this;
      const { path, template } = paths[page] || paths.ErrorNotFound;
      const headerContent = document.querySelector('#header');
      headerContent.innerHTML = await header();
      const content = document.querySelector("#content");
      content.innerHTML = await template;
      window.history.pushState({}, "done", path);
   }
}

export default router;
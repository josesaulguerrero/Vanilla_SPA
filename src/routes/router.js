import header from '@templates/Header';

class router {
   constructor(paths) {
      this.paths = paths;
      this.initRouter();
   }

   async initRouter() {
      const { location: { pathname = "/" } } = window;
      const page = pathname === "/" ? "Home" : pathname.replace("/", "");
      await this.load(page);
      console.log(page)
   }

   async load(page = 'Home') {
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
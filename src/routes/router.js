import header from '@templates/Header';

class router {
   constructor(paths) {
      this.paths = paths;
      this.initRouter();
   }

   async initRouter() {
      const { location: { pathname = "/" } } = window;
      const page = pathname === /\/?#\/\d{1,3}\/?/ ? "/character" : pathname || '/home';
      await this.load(page);
      // console.log(page)
   }

   // async validUrl() {

   // }

   async load(page = '/home') {
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
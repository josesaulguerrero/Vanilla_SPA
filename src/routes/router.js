import routes from '@routes/routes'
// --------------------------------------------------------

class router{
   constructor() {
      this.paths = routes;
      this._matchRoute();
   }

   renderRoute() {

   }

   _matchRoute() {

      const { hash } = location;
      if(!hash || hash === "#/home") {
         console.log(hola)
      }

   }
}

const MainRouter = new router();
export default MainRouter;
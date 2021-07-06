import MainHome from '@pages/MainHome';
import ErrorNotFound from '@pages/ErrorNotFound';
import Character from '@pages/character';

const routes = {
   "/": {
      path: '/home',
      template: MainHome(),
   },
   "/errornotfound": {
      path: '/404',
      template: ErrorNotFound(),
   },
   "/character": {
      // path: `${/\/Character[1-9]{1,3}/}`,
      path: location.pathname + location.hash,
      template: Character(),
   },
   "/about": {
      path: '/about',
      template: `<h2>holaa</h2>`
   }
}

export default routes;
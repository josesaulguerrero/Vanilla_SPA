import MainHome from '@pages/MainHome';
import ErrorNotFound from '@pages/ErrorNotFound';
import Character from '@pages/Character';

const routes = {
   "/home": {
      path: '/home',
      template: MainHome(),
   },
   "/errornotfound": {
      path: location.pathname,
      template: ErrorNotFound(),
   },
   "/character": {
      path: location.pathname + location.hash,
      template: Character(),
   },
   "/about": {
      path: '/about',
      template: `<h2>holaa</h2>`
   }
}

export default routes;
import MainHome from '@pages/MainHome';
import ErrorNotFound from '@pages/ErrorNotFound';
import Character from '@pages/Character';

const routes = {
   "/home": {
      template: MainHome(),
   },
   "/errornotfound": {
      template: ErrorNotFound(),
   },
   "/character": {
      template: Character(),
   },
   "/about": {
      template: `<h2>holaa</h2>`
   }
}

export default routes;
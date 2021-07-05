import MainHome from '@pages/MainHome';
import ErrorNotFound from '@pages/ErrorNotFound';
import Character from '@pages/character';

const routes = {
   "Home": {
      path: '/',
      template: MainHome(),
   },
   "ErrorNotFound": {
      path: '/404',
      template: ErrorNotFound(),
   },
   "Character": {
      // path: `${/\/Character[1-9]{1,3}/}`,
      path: `/Character`,
      template: Character(),
   },
   "about": {
      path: '/about',
      template: `<h2>holaa</h2>`
   }
}

export default routes;
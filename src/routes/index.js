import Header from '@templates/Header';
import MainHome from '@pages/MainHome';
import Character from '@pages/Character';
import ErrorNotFound from '@pages/ErrorNotFound';
import GetHash from '@utils/GetHash';
import ResolveRoutes from '@utils/ResolveRoutes';

const routes = {
   '/': MainHome,
   '/:id': Character,
   '/contact': 'Contact',
}

const router = async () => {
   const header = null || document.getElementById('header');
   const content = null || document.getElementById('content');
   header.innerHTML = await Header();
   let hash = GetHash();
   let route = await ResolveRoutes(hash);
   let render = routes[route] ? routes[route] : ErrorNotFound;
   content.innerHTML = await render();
} 

export default router;
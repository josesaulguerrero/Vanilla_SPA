import '@styles/styles.css';
import MainRouter from '@routes/index';

window.addEventListener('load', MainRouter)
window.addEventListener('hashchange', MainRouter.validUrl);
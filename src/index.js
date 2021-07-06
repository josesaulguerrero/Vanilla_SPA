import '@styles/styles.css';
import MainRouter from '@routes/index';
// import Character from '@pages/Character';
// import PreviousPage from '@utils/PreviousPage';

window.addEventListener('load', MainRouter)
window.addEventListener('hashchange', MainRouter);

// Character.addEventListener('onload')
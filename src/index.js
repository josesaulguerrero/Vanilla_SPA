import '@styles/styles.css';
import { App } from './App.js';
import { SearchData } from './components/SearchData.js';
import { InfiniteScroll } from './utils/infinite_scroll.js';
// import MainRouter from '@routes/router';

// debugger
window.addEventListener('DOMContentLoaded', App);
// window.addEventListener('load', App);
window.addEventListener('hashchange', App);
window.addEventListener('submit', async (event) => {
   event.preventDefault();
   await SearchData();
})

window.addEventListener('scroll', () => {
   InfiniteScroll();
})
// window.addEventListener('submit', InfiniteScroll);


// import { Loader } from "@components/Loader";

export function Main() {
   const $main = document.createElement('main');
   $main.id = 'main';
   $main.classList.add('main');

   // $main.innerHTML = Loader();
   return $main;
}
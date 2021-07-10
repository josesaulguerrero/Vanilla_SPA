export function BackButton() {
   const $button = document.createElement('button');
   $button.id = "back_button";
   $button.classList.add('back_button');
   $button.innerText = 'Go Back';
   $button.onclick = () => {
      history.back();
   }

   return $button;
}
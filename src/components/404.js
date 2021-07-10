export function ErrorNotFound() {
   const $error = document.createElement('section');
   $error.id = "error";
   $error.classList.add('error');
   $error.innerHTML = `
      <h2>ErrorNotFound</h2>
   `;

   return $error;
}
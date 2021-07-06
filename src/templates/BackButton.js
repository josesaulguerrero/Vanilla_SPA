function PreviousPage() {
   window.history.back()
   alert('hola')
}

const BackButton = () => {
   const view = `
      <button style="background-color: red;" onclick="${PreviousPage()}" id="back-button">back</button>
   `;
      
   // ${document.getElementById("back-button").addEventListener(click, PreviousPage)}
   // const back_button = await document.getElementById("back-button") || ''
   // back_button.addEventListener('click', PreviousPage);
   return view;
}

export default BackButton;
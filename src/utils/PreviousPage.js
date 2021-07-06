// function goBack() { window.history.go(-1) }

function previousPage() {
   const button = document.getElementById("backButton");
   return button.addEventListener("click", () => window.history.back)
}

export default previousPage;
function nav_dropdown_toggle() {
	document
		.getElementById("dropdown-menu")
		.classList.toggle("dropdown-menu-show");
	document.getElementById("nav-button").classList.toggle("nav-button-active");
	var dropdown = document.getElementById("dropdown-menu");
	dropdown.style.opacity = 0;
	setTimeout(() => {
		dropdown.style.opacity = 1;
	}, this.animationDelay + 200);
	document.getElementById("content").classList.toggle("content-active");
}
function autoResize() {
	const textarea = document.getElementById("myTextarea");
	textarea.style.height = "auto"; // Reimposta l'altezza a "auto" per evitare che il testo venga tagliato

	// Imposta l'altezza del tag textarea in base al suo contenuto scrollHeight
	textarea.style.height = textarea.scrollHeight + "px";
}
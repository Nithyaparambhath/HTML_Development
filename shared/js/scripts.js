$(function () {
	$('#header').load('shared/header.html');
	$('#footer').load('shared/footer.html');
});


function toggleMenu() {
	const nav = document.getElementById('nav-menu');
	nav.classList.toggle('show');
}
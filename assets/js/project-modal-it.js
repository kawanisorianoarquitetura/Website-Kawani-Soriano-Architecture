// Project data with images and descriptions
const projectData = {
	sunrise: {
		title: "Progetto Sunrise",
		description: "Design residenziale moderno con luce naturale e materiali sostenibili. Questo progetto presenta approcci innovativi agli spazi abitativi contemporanei con enfasi sulla coscienza ambientale e l'armonia estetica.",
		images: [
			"images/project-sunrise-1.jpeg",
			"images/project-sunrise-2.jpeg",
			"images/project-sunrise-3.jpeg",
			"images/project-sunrise-4.jpeg"
		]
	},
	cp: {
		title: "Progetto CP",
		description: "Spazio commerciale contemporaneo con soluzioni spaziali innovative. Un'integrazione attenta di forma e funzione che crea un ambiente stimolante per le operazioni commerciali moderne.",
		images: [
			"images/project-cp-1.jpeg",
			"images/project-cp-2.jpeg",
			"images/project-cp-3.jpeg",
			"images/project-cp-4.jpeg"
		]
	},
	au: {
		title: "Progetto AU",
		description: "Architettura urbana che fonde funzionalità ed eccellenza estetica. Questo progetto dimostra come il design contemporaneo possa migliorare la vita urbana rispettando il contesto circostante.",
		images: [
			"images/project-au-1.jpeg",
			"images/project-au-2.jpeg",
			"images/project-au-3.jpeg",
			"images/project-au-4.jpeg"
		]
	},
	wood: {
		title: "Progetto Wood",
		description: "Design ecologico che incorpora elementi naturali in legno. Una miscela armoniosa di materiali organici e principi di design moderni che creano spazi caldi e accoglienti.",
		images: [
			"images/project-wood-1.jpeg",
			"images/project-wood-2.jpeg",
			"images/project-wood-3.jpeg",
			"images/project-wood-4.jpeg"
		]
	}
};

// Open modal function
function openProjectModal(projectId) {
	const project = projectData[projectId];
	if (!project) return;

	// Get the modal FIRST
	const modal = document.getElementById('projectModal');

	// Reset modal scroll BEFORE showing it
	modal.scrollTop = 0;

	// Store current page scroll position
	const scrollY = window.scrollY || window.pageYOffset;

	// Set content
	document.getElementById('modalTitle').textContent = project.title;
	document.getElementById('modalDescription').textContent = project.description;

	// Set images
	document.getElementById('modalImg1').src = project.images[0];
	document.getElementById('modalImg2').src = project.images[1];
	document.getElementById('modalImg3').src = project.images[2];
	document.getElementById('modalImg4').src = project.images[3];

	// Prevent body scrolling and lock position
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
	document.body.style.left = '0';
	document.body.style.right = '0';
	document.body.style.overflow = 'hidden';
	document.body.classList.add('modal-open');
	document.body.setAttribute('data-scroll-y', scrollY);

	// Show modal
	modal.style.display = 'block';

	// Force scroll to top multiple times with delays
	setTimeout(() => modal.scrollTop = 0, 0);
	setTimeout(() => modal.scrollTop = 0, 50);
	setTimeout(() => modal.scrollTop = 0, 100);
}

// Close modal function
function closeProjectModal() {
	document.getElementById('projectModal').style.display = 'none';
	document.body.classList.remove('modal-open');

	// Restore body position and scroll
	const scrollY = document.body.getAttribute('data-scroll-y');
	document.body.style.position = '';
	document.body.style.top = '';
	document.body.style.left = '';
	document.body.style.right = '';
	document.body.style.overflow = '';
	document.body.removeAttribute('data-scroll-y');

	// Restore scroll position
	if (scrollY) {
		window.scrollTo(0, parseInt(scrollY));
	}
}

// Close modal when clicking outside the content
window.onclick = function(event) {
	const modal = document.getElementById('projectModal');
	if (event.target == modal) {
		closeProjectModal();
	}
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		closeProjectModal();
	}
});

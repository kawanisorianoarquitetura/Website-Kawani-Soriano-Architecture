// Project data with images and descriptions
const projectData = {
	sunrise: {
		title: "Projeto Sunrise",
		description: "Design residencial moderno com luz natural e materiais sustentáveis. Este projeto apresenta abordagens inovadoras para espaços de convivência contemporâneos com ênfase na consciência ambiental e harmonia estética.",
		images: [
			"images/project-sunrise-1.jpeg",
			"images/project-sunrise-2.jpeg",
			"images/project-sunrise-3.jpeg",
			"images/project-sunrise-4.jpeg"
		]
	},
	cp: {
		title: "Projeto CP",
		description: "Espaço comercial contemporâneo com soluções espaciais inovadoras. Uma integração cuidadosa de forma e função que cria um ambiente inspirador para operações comerciais modernas.",
		images: [
			"images/project-cp-1.jpeg",
			"images/project-cp-2.jpeg",
			"images/project-cp-3.jpeg",
			"images/project-cp-4.jpeg"
		]
	},
	au: {
		title: "Projeto AU",
		description: "Arquitetura urbana que combina funcionalidade com excelência estética. Este projeto demonstra como o design contemporâneo pode melhorar a vida urbana respeitando o contexto ao redor.",
		images: [
			"images/project-au-1.jpeg",
			"images/project-au-2.jpeg",
			"images/project-au-3.jpeg",
			"images/project-au-4.jpeg"
		]
	},
	wood: {
		title: "Projeto Wood",
		description: "Design ecológico incorporando elementos naturais de madeira. Uma mistura harmoniosa de materiais orgânicos e princípios de design modernos criando espaços acolhedores e convidativos.",
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

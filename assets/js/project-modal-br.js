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

	// Set content
	document.getElementById('modalTitle').textContent = project.title;
	document.getElementById('modalDescription').textContent = project.description;

	// Set images
	document.getElementById('modalImg1').src = project.images[0];
	document.getElementById('modalImg2').src = project.images[1];
	document.getElementById('modalImg3').src = project.images[2];
	document.getElementById('modalImg4').src = project.images[3];

	// Get the modal
	const modal = document.getElementById('projectModal');

	// Show modal first
	modal.style.display = 'block';

	// Immediately reset its scroll
	modal.scrollTop = 0;

	// Prevent body scrolling
	document.body.style.overflow = 'hidden';
	document.body.classList.add('modal-open');
}

// Close modal function
function closeProjectModal() {
	document.getElementById('projectModal').style.display = 'none';
	document.body.classList.remove('modal-open');
	document.body.style.overflow = '';
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

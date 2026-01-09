// Project data with images and descriptions
const projectData = {
	sunrise: {
		title: "Project Sunrise",
		description: "Modern residential design featuring natural light and sustainable materials. This project showcases innovative approaches to contemporary living spaces with emphasis on environmental consciousness and aesthetic harmony.",
		images: [
			"images/project-sunrise-1.jpeg",
			"images/project-sunrise-2.jpeg",
			"images/project-sunrise-3.jpeg",
			"images/project-sunrise-4.jpeg"
		]
	},
	cp: {
		title: "Project CP",
		description: "Contemporary commercial space with innovative spatial solutions. A thoughtful integration of form and function that creates an inspiring environment for modern business operations.",
		images: [
			"images/project-cp-1.jpeg",
			"images/project-cp-2.jpeg",
			"images/project-cp-3.jpeg",
			"images/project-cp-4.jpeg"
		]
	},
	au: {
		title: "Project AU",
		description: "Urban architecture blending functionality with aesthetic excellence. This project demonstrates how contemporary design can enhance urban living while respecting the surrounding context.",
		images: [
			"images/project-au-1.jpeg",
			"images/project-au-2.jpeg",
			"images/project-au-3.jpeg",
			"images/project-au-4.jpeg"
		]
	},
	wood: {
		title: "Project Wood",
		description: "Eco-friendly design incorporating natural wood elements. A harmonious blend of organic materials and modern design principles creating warm, inviting spaces.",
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

	// Show modal with display flex (mobile) or block (desktop)
	modal.style.display = 'block';

	// Force modal scroll to 0 - this is critical for mobile
	modal.scrollTop = 0;
	modal.scrollLeft = 0;

	// Prevent body scrolling
	document.body.style.overflow = 'hidden';
	document.body.style.height = '100%';
	document.body.classList.add('modal-open');

	// Double-check scroll position after a brief moment
	requestAnimationFrame(() => {
		modal.scrollTop = 0;
	});
}

// Close modal function
function closeProjectModal() {
	document.getElementById('projectModal').style.display = 'none';
	document.body.classList.remove('modal-open');
	document.body.style.overflow = '';
	document.body.style.height = '';
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

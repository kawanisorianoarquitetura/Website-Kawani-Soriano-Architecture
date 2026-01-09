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

	// Get the modal
	const modal = document.getElementById('projectModal');

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

	// Ensure modal starts at top
	modal.scrollTop = 0;
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

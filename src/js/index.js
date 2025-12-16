// Smooth scroll to section with offset
const scrollToSection = (event) => {
    event.preventDefault(); // Prevent default anchor click behavior

    const targetId = event.currentTarget.getAttribute('href'); // Get the target ID
    const targetElement = document.querySelector(targetId); // Find the target element
    const navbarHeight = document.querySelector('#mainNav').offsetHeight; // Get navbar height

    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    event.currentTarget.classList.add('active');

    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top; // Get target element position
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight; // Calculate offset position

        // Smooth scroll to the target element
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scrolling
        });
    }
};

// Add event listeners to all nav links
const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

const moreInfoButton = document.querySelector('.specialButton').addEventListener('click',scrollToSection);


const resetNavLinksOnScroll = () => {
  navLinks.forEach(link => link.classList.remove('active')); // Remove 'active' class from all nav links
};

// Add scroll event listener to reset nav link states
window.addEventListener('scroll', resetNavLinksOnScroll);


//create sprints
document.addEventListener("DOMContentLoaded", function () {
    const sprints = [
        //{
        //    name: "1. Šprint - <CODENAME>",
        //    role: "member",
        //    timestamp: "DD.MM.YYYY - DD.MM.YYYY",
        //    image: "./src/assets/img/sprints/<image>",
        //    description: "Lorem ipsum",
        //},
        // Add more members as needed...
    ];

    const sprintList = document.getElementById('sprintList');

    sprints.forEach(item => {
        const sprintItem = document.createElement('li');
        sprintItem.classList.add('item', item.role);

        sprintItem.innerHTML = `
            <div class="thumb">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="description">
                <h2>${item.name}</h2>
                <h3>${item.timestamp}</h3>
                <p>${item.description}<br></p>
            </div>
        `;

        sprintList.appendChild(sprintItem);
    });
});

//create document modals

// Sample data structure for PDFs
const pdfData = {
    "Zápisnice": [
      {
       title: "Zápisnica 17.10.2025",
       link: "./src/docs/Zapisnica_2025_10_17.pdf"
      },
      {
       title: "Zápisnica 20.10.2025",
       link: "./src/docs/Zapisnica_2025_10_20.pdf"
      },
      {
       title: "Zápisnica 23.10.2025",
       link: "./src/docs/Zapisnica_2025_10_23.pdf"
      },
      {
       title: "Zápisnica 27.10.2025",
       link: "./src/docs/Zapisnica_2025_10_27.pdf"
      },
      {
       title: "Zápisnica 30.10.2025",
       link: "./src/docs/Zapisnica_2025_10_30.pdf"
      },
      {
       title: "Zápisnica 03.11.2025",
       link: "./src/docs/Zapisnica_2025_11_03.pdf"
      },
      {
       title: "Zápisnica 06.11.2025",
       link: "./src/docs/Zapisnica_2025_11_06.pdf"
      },
      {
       title: "Zápisnica 10.11.2025",
       link: "./src/docs/Zapisnica_2025_11_10.pdf"
      },
      {
       title: "Zápisnica 13.11.2025",
       link: "./src/docs/Zapisnica_2025_11_13.pdf"
      },
      {
       title: "Zápisnica 20.11.2025",
       link: "./src/docs/Zapisnica_2025_11_20.pdf"
      },
      {
       title: "Zápisnica 27.11.2025",
       link: "./src/docs/Zapisnica_2025_11_27.pdf"
      },
      {
       title: "Zápisnica 01.12.2025",
       link: "./src/docs/Zapisnica_2025_12_01.pdf"
      },
      {
       title: "Zápisnica 08.12.2025",
       link: "./src/docs/Zapisnica_2025_12_08.pdf"
      },
      {
       title: "Zápisnica 11.12.2025",
       link: "./src/docs/Zapisnica_2025_12_11.pdf"
      },
      {
       title: "Zápisnica 15.12.2025",
       link: "./src/docs/Zapisnica_2025_12_15.pdf"
      },
    ],
    "Retrospektívy": [
      //{
      //  title: "1 Retrospektíva(šprint 1)",
      //  link: "./src/docs/dummy.pdf"
      //},
      //{
      //  title: "2 Retrospektíva  (šprint 2)",
      //  link: "./src/docs/dummy.pdf"
      //},
      // Add more entries as needed...
    ],
    "Metodiky": [
      // {
      //   title: "Metodika 1",
      //   link: "./src/docs/dummy.pdf"
      // },
      // Add more entries as needed...
    ],
  };
  
  // Function to populate modal
function populateModal(category) {
    const modalTitle = document.getElementById('modalTitle');
    const modalIntro = document.getElementById('modalIntro');
    const documentsList = document.getElementById('documentsList');
  
    // Clear previous content
    modalTitle.textContent = category;
    modalIntro.textContent = "Všetky dokumenty, patriace medzi " + category.toLowerCase() + ".";
    documentsList.innerHTML = '';
  
    // Populate documents
    pdfData[category].forEach(pdf => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="${pdf.link}" class="documents__append--content d-flex justify-content-between align-items-center" target="_blank">
          <p>${pdf.title}</p>
          <span class="wrapper doc">
            <img src="./src/assets/img/pdf.png" width="32" alt="PDF" />
          </span>
        </a>
      `;
      documentsList.appendChild(listItem);
    });
  }
  
  // Create a single instance of the modal
  const modalElement = document.getElementById('portfolioModal');
  const modal = new bootstrap.Modal(modalElement);
  
  // Event listener for opening modal with the desired category
  document.querySelectorAll('.portfolio-link').forEach(item => {
    item.addEventListener('click', (event) => {
      const category = item.getAttribute('data-category');
      populateModal(category);
      modal.show(); // Show the modal using the single instance
    });
  });
  
  // Optional: Event listener for when the modal is hidden
  modalElement.addEventListener('hidden.bs.modal', function () {
      // Allow scrolling on the body when the modal is closed
      document.body.style.overflow = '';
  });
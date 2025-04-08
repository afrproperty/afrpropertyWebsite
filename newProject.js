
  const projects = [
    {
      title: "Sanubari N13",
      location: "Bandar Dato Onn",
      image: "https://afrproperty.onpay.my/media/uploads/NPSanubariDatoOnn1.jpg",
      description: "A spacious and comfortable space with a concept of combining high technology and nature.",
      link: "https://afrproperty.onpay.my/media/uploads/NPSanubariDatoOnn1.jpg"
    },
    {
      title: "Sapphire Heights",
      location: "Eco Tropics",
      image: "https://afrproperty.onpay.my/media/uploads/sapphireheights.jpg",
      description: "Elegant homes with panoramic views, nestled in greenery.",
      link: "#"
    },
    {
      title: "Amani Residences",
      location: "Bandar UDA Utama",
      image: "https://afrproperty.onpay.my/media/uploads/amaniresidences.jpg",
      description: "Modern living in a serene and secure community.",
      link: "#"
    },
    {
      title: "D'Casa Villas",
      location: "Molek",
      image: "https://afrproperty.onpay.my/media/uploads/dcasavillas.jpg",
      description: "Luxury villas with premium lifestyle amenities.",
      link: "#"
    },
    {
      title: "Vista Garden",
      location: "Skudai",
      image: "https://afrproperty.onpay.my/media/uploads/vistagarden.jpg",
      description: "Affordable garden homes with urban convenience.",
      link: "#"
    },
    // Add more projects as needed
  ];

  const perPage = 3;
  let currentPage = 0;

  const container = document.getElementById("projects-container");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function renderProjects() {
    container.innerHTML = "";
    const start = currentPage * perPage;
    const end = start + perPage;
    const currentProjects = projects.slice(start, end);

    currentProjects.forEach(project => {
      const card = document.createElement("div");
      card.className = "w-full max-w-sm rounded overflow-hidden shadow-lg bg-white";
      card.setAttribute("data-aos", "fade-up");

      card.innerHTML = `
        <a href="${project.link}">
          <img class="w-full h-64 object-cover" src="${project.image}" alt="${project.title}" />
          <div class="p-4">
            <h4 class="text-xl font-bold text-blue-800">${project.title}</h4>
            <p class="text-gray-500 text-sm mb-2 flex items-center"><i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>${project.location}</p>
            <p class="text-gray-700">${project.description}</p>
          </div>
        </a>
      `;
      container.appendChild(card);
    });

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = end >= projects.length;
    AOS.refresh(); // re-trigger animation on new elements
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderProjects();
    }
  });

  nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * perPage < projects.length) {
      currentPage++;
      renderProjects();
    }
  });

  renderProjects(); // initial render


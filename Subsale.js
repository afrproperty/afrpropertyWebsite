const properties = [
    { img: "https://afrproperty.onpay.my/media/uploads/SetiaIndah5.jpg", price: "RM 1,600,000", address: "Jalan Setia 5 @ Taman Setia Indah", details: "6 Beds | 5 Baths | 6,100 SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-setiaindah" },
    { img: "https://afrproperty.onpay.my/media/uploads/SetiaTropika.jpg", price: "RM 1,200,000", address: "Dictyo Alba Setia Tropika", details: "4 Beds | 3 Baths | 3,509 SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-dictyoalbasetiatropika" },
    { img: "https://afrproperty.onpay.my/media/uploads/FairwaysPulaiPerdana.jpg", price: "RM 880,000", address: "Fairways @ Sri Pulai Perdana", details: "5 Beds | 4 Baths | 8,600 SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-sripulaiperdana" },
    { img: "https://afrproperty.onpay.my/media/uploads/DesaPalma1.jpg", price: "RM 3,000,000", address: "Desa Palma @ Nasa City", details: "6 Beds | 6 Baths | 3,200 SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-desapalmanasacity" },
    { img: "https://afrproperty.onpay.my/media/uploads/CountryGardenCentralPark1.jpg", price: "RM 850,000", address: "Laman Harmoni @ Country Garden Central Park", details: "4 Beds | 4 Baths | 2,083 SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-damansaraaliff" },
    { img: "https://afrproperty.onpay.my/media/uploads/TamanSetiaIndahPresint12-1.jpg", price: "RM 750,000", address: "Taman Setia Indah Precinct 12", details: "4 Beds | 3 Baths | 1 Storeroom | 1,300 SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-tamansetiaindahprecinct12" },
    { img: "https://afrproperty.onpay.my/media/uploads/2StoreyCornerLotAustinPerdana1.jpg", price: "RM 2,300,000", address: "Taman Austin Perdana, Johor Bahru", details: "4+1 Beds | 4 Baths | 5,000+ SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-2storeycornerlotaustinperdana" },
    { img: "https://afrproperty.onpay.my/media/uploads/ClusterHouseAustinHeight1.jpg", price: "RM 1,250,000", address: "Cluster House @ Austin Heights", details: "4 Beds | 4 Baths | SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-clusterhouseaustinheight" },
    { img: "https://afrproperty.onpay.my/media/uploads/ResidenceThePeak1.jpg", price: "RM 4,300,000", address: "Residence at The Peak", details: "6+1 Beds | 7 Baths | 7,916 SQFT (Built-up) | 7,089 SQFT (Land)", link: "https://afrproperty.onpay.my/order/form/subsale-residencethepeak" },
    { img: "https://afrproperty.onpay.my/media/uploads/TamanSerimbunIskandarPuteri1.jpg", price: "RM 1,150,000", address: "Taman Serimbun, Iskandar Puteri", details: "4+1 Beds | 3 Baths | 1,882 SQFT", link: "https://afrproperty.onpay.my/order/form/subsale-tamanserimbuniskandarputeri" }
];


const itemsPerPage = 6;
        let currentPage = 1;
        const propertyList = document.getElementById("property-list");
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");
        const pageInfo = document.getElementById("page-info");


function renderProperties() {
    propertyList.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = properties.slice(start, end);

    paginatedItems.forEach(property => {
        const card = document.createElement("div");
        card.className = "property-card";
        card.innerHTML = `
            <a href="${property.link}" class="property-link">
                <img src="${property.img}" alt="Property">
                <div class="property-details">
                    <h3>${property.price}</h3>
                    <p>${property.address}</p>
                    <p>${property.details}</p>
                </div>
            </a>
        `;
        propertyList.appendChild(card);
    });

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(properties.length / itemsPerPage)}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage * itemsPerPage >= properties.length;
}

prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderProperties();
            }
        });

        nextBtn.addEventListener("click", () => {
            if (currentPage * itemsPerPage < properties.length) {
                currentPage++;
                renderProperties();
            }
        });

        renderProperties();

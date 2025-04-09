<script>
	let currentIndex = 0;

	const imageUrls = [
	    "https://afrproperty.onpay.my/media/uploads/SetiaIndah5.jpg",
	    "https://afrproperty.onpay.my/media/uploads/SI5.jpg",
	    "https://afrproperty.onpay.my/media/uploads/SI1.jpg",
	    "https://afrproperty.onpay.my/media/uploads/SI2.jpg",
	    "https://afrproperty.onpay.my/media/uploads/SI3.jpg",
	    "https://afrproperty.onpay.my/media/uploads/SI4.jpg"
	];

	function changeImage(imgElement) {
	    const fullImage = document.getElementById("fullImage");
	    const modal = document.getElementById("imageModal");

	    currentIndex = imageUrls.indexOf(imgElement.src);
	    fullImage.src = imgElement.src;
	    modal.style.display = "flex";
	}

	function nextImage() {
	    currentIndex = (currentIndex + 1) % imageUrls.length;
	    document.getElementById("fullImage").src = imageUrls[currentIndex];
	}

	function prevImage() {
	    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
	    document.getElementById("fullImage").src = imageUrls[currentIndex];
	}

	function closeModal() {
	    document.getElementById("imageModal").style.display = "none";
	}

	document.getElementById("imageModal").addEventListener("click", function (event) {
	    if (event.target === this) {
	        closeModal();
	    }
	});

	document.addEventListener("keydown", function (event) {
	    if (event.key === "Escape") {
	        closeModal();
	    }
	});
</script>

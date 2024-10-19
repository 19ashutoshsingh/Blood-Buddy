function filterDonors() {
    // Get the search input value and convert to lowercase
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    
    // Get all the donor cards
    const donorCards = document.querySelectorAll(".donor-card");
    
    // Loop through all donor cards and filter based on blood type and location
    donorCards.forEach((card) => {
        const bloodType = card.getAttribute("data-blood-type").toLowerCase();
        const location = card.getAttribute("data-location").toLowerCase();
        
        // If searchValue is found in either bloodType or location, show the card, otherwise hide it
        if (bloodType.includes(searchValue) || location.includes(searchValue)) {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}

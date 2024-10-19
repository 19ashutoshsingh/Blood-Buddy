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


function showDonorProfile(name, bloodType, location, email, phone, lastDonation, contactPreference) {
    // Update modal with donor details
    document.getElementById('donorName').textContent = name;
    document.getElementById('donorDetails').textContent = `${bloodType} | ${location}`;
    document.getElementById('donorLastDonation').textContent = `Last Donation Date: ${lastDonation}`;
    document.getElementById('donorContactPreference').textContent = `Contact Preference: ${contactPreference}`;
    
    const contactMethod = document.getElementById('donorContactMethod');
    contactMethod.textContent = `Contact via ${contactPreference}`;
    
    // Set contact method behavior (phone or email)
    contactMethod.onclick = function() {
        if (contactPreference === 'Call') {
            window.location.href = `tel:${phone}`;
        } else {
            window.location.href = `mailto:${email}`;
        }
    };

    // Show modal
    document.getElementById('donorProfileModal').style.display = 'block';
}

function closeModal() {
    // Close modal
    document.getElementById('donorProfileModal').style.display = 'none';
}

// Availability filter based on blood type, location, and last donation date
function filterDonors() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const donorCards = document.querySelectorAll('.donor-card');
    
    donorCards.forEach(card => {
        const bloodType = card.getAttribute('data-blood-type').toLowerCase();
        const location = card.getAttribute('data-location').toLowerCase();
        const lastDonation = new Date(card.getAttribute('data-last-donation'));
        const availability = card.getAttribute('data-availability') === 'true';

        const now = new Date();
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(now.getMonth() - 3);

        // Show donor if they are available and match the search criteria
        const isEligible = lastDonation < threeMonthsAgo && availability;
        if ((bloodType.includes(searchInput) || location.includes(searchInput)) && isEligible) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

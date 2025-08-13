// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// map form show
if (document.querySelector("#showMap")) {
    document.querySelector("#showMap").addEventListener("click", function (e) {
        e.preventDefault();
        $(".map_form_container").addClass("map_show");
        document.querySelector(".contact_heading").innerText = "Location";
    });
}
if (document.querySelector("#showForm")) {
    document.querySelector("#showForm").addEventListener("click", function (e) {
        e.preventDefault();
        $(".map_form_container").removeClass("map_show");
        document.querySelector(".contact_heading").innerText = "Contact Us";
    });
}

/** google_map js **/
function myMap() {
  const mapDiv = document.getElementById("googleMap");
  if (mapDiv) {
    // This is the iframe you provided.
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2186462411205!2d77.53362917359!3d13.021743913779922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1290efd19b%3A0x6afb4e5befed844a!2sD%20Devraj%20Urs%20Truck%20Terminal%20Yeshavntapura!5e0!3m2!1sen!2sin!4v1755067080737!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  }
}

// This code runs after the HTML document is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
  const showMapBtn = document.getElementById('showMap');
  const showFormBtn = document.getElementById('showForm');
  const container = document.querySelector('.map_form_container');

  if (showMapBtn && showFormBtn && container) {
    // Add click event for the "Map" button
    showMapBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevents the form from submitting
      container.classList.add('map-active');
    });

    // Add click event for the "Form" button
    showFormBtn.addEventListener('click', function(e) {
      e.preventDefault();
      container.classList.remove('map-active');
    });
  }

});


//footer Discord rotation
document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('#discord');
    image.addEventListener('mouseover',  function() {
        image.style.transform = 'rotate(360deg)';
      });
    image.addEventListener('mouseout', function() {           //ChatGPT//
        image.style.transform = 'rotate(0deg)';
      });
  });
  
  
//About
  function openTab(evt, tabName) {         //(W3Schools 2019b) How TO - Tabs
    var i, contents, tabLinks;
    contents = document.getElementsByClassName("contents");
    for (i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


 //projects  
// Get the modal
const modal = document.querySelector(".myModal");

// Get all the thumbnail images
const thumbnailImages = document.querySelectorAll(".clickable-image");

// Add click event listeners to the thumbnail images
thumbnailImages.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    modal.style.display = "block";
    const modalImage = modal.querySelector(".modalImage");
    modalImage.src = thumbnail.src;
    modalImage.alt = thumbnail.alt; // Copy the alt text from the thumbnail to the modal image
  });
});

// Close the modal when the user clicks anywhere outside the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

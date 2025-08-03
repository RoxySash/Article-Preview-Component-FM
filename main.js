const share = document.getElementById("share-btn");

function toggleVisibility(select) {
     // use function to toggle
    document.querySelector(select).classList.toggle("hidden");
};

// add click event listener 
share.addEventListener("click", (event) => {
  toggleVisibility("#myDiv");
  
});
 
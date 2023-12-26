document.addEventListener("DOMContentLoaded", function() {
    var navPanel = document.getElementById("navPanel");
    var toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function() {
        if (navPanel.style.left === "-250px") {
            navPanel.style.left = "0";
        } else {
            navPanel.style.left = "-250px";
        }
    });
});


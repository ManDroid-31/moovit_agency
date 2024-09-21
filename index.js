
function change(){
    var changeMode  = document.documentElement;
      if (changeMode.getAttribute("data-bs-theme") === "dark") {
        changeMode.setAttribute("data-bs-theme", "light");
      } else {
        changeMode.setAttribute("data-bs-theme" , "dark");
      }
    }
  document.getElementById("btn").addEventListener("click",change);
  
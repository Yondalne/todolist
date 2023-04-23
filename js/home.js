let settingbtn = document.querySelector(".toggle-sidebar");
let sidebar = document.querySelector(".sidebar");

settingbtn.addEventListener("click", () => toggleSidebar());

function toggleSidebar () {
    if (sidebar.classList.contains("hide")) {
        sidebar.style.display = "block";
        
        settingbtn.style.visibility = "hidden";
        settingbtn.style.opacity = "0";
        
        setTimeout(()=>{
            sidebar.style.opacity = 1;
            sidebar.style.visibility = "visible";
        }, 100)

        sidebar.classList.remove("hide");
    } else {
        sidebar.style.opacity = 0;
        sidebar.style.visibility = "hidden";
        
        settingbtn.style.visibility = "visible";
        settingbtn.style.opacity = "1";
        
        setTimeout(()=>{
            sidebar.style.display = "none";
        }, 300)
        sidebar.classList.add("hide");
    }
}

let closeSidebar = document.querySelector(".sidebar .close");
closeSidebar.addEventListener("click", () => toggleSidebar());


let addTask = document.querySelector(".addTask");
let modal = document.querySelector(".modal-container");
let modalContent = document.querySelector(".modal-container .modal");

addTask.addEventListener("click", () => {
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
    setTimeout(()=>{
        modalContent.style.transform = "translateX(0)";
    }, 300);
});

modal.addEventListener("click", (e) => {
    modalContent.style.transform = "translateX(100%)";
    setTimeout(()=>{
        modal.style.opacity = 0;
        modal.style.visibility = "hidden";
    }, 300);
});

modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
});
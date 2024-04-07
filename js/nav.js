class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav id="navbar">
      <div class="nav-container">
          <div class="logo">
              <img src="assets/logo.png" alt="Coochbehar College" srcset="">
          </div>
          <div class="nav-element-container">
              <div class="nav-elements-container">
                  <ul class="nav-elements" id="parent">
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Login<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Students Login</a></li>
                        <li><a href="#">Staff Login</a></li>
                        <li><a href="#">Alumni Login</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">About Us <i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">History & Location</a></li>
                        <li><a href="#">Aim & Objectives</a></li>
                        <li><a href="#">Infrastructure</a></li>
                        <li><a href="#">Future Plans</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Administration<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Pricipal's Desk</a></li>
                        <li><a href="#">Management</a></li>
                        <li><a href="#">Office</a></li>
                        <li><a href="#">Rules and Regulations</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Academics<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Details</a></li>
                        <li><a href="#">Faculty and Non Teaching Staff</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Fees Structure</a></li>
                        <li><a href="#">Academic Calendar</a></li>
                        <li><a href="#">Library</a></li>
                        <li><a href="#">Student Performance & Learning Outcomes</a></li>
                        <li><a href="#">College Routine</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Admission<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Prospectus</a></li>
                        <li><a href="#">Admission Procedure</a></li>
                        <li><a href="#">Admission Notice</a></li>
                        <li><a href="#">NSOU</a></li>
                        <li><a href="#">Application For Geo-Informatics Certificate & Diploma Course Session 2023-2024</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Student Zone<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Student Union</a></li>
                        <li><a href="#">Syllabus</a></li>
                        <li><a href="#">Class Routine</a></li>
                        <li><a href="#">Examination</a></li>
                        <li><a href="#">Result</a></li>
                        <li><a href="#">Scholarship</a></li>
                        <li><a href="#">Student Union Election</a></li>
                        <li><a href="#">Others</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Activities<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">NSS</a></li>
                        <li><a href="#">Other Committee</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Cultural Program</a></li>
                        <li><a href="#">Alumni Association</a></li>
                        <li><a href="#">Green Audit</a></li>
                        <li><a href="#">Others</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Achievements<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Faculty abd Stuff</a></li>
                        <li><a href="#">Students</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">IQAC<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">IQAC Committee</a></li>
                        <li><a href="#">NAAC Steering Committee</a></li>
                        <li><a href="#">AQAR</a></li>
                        <li><a href="#">SSR (CYCLE - II)</a></li>
                        <li><a href="#">Instituitional Best Practices</a></li>
                        <li><a href="#">Instituitional Distinctiveness</a></li>
                        <li><a href="#">Students Satisfaction Survey</a></li>
                        <li><a href="#">Feedback Form</a></li>
                        <li><a href="#">IQAC Meeting</a></li>
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Central Library<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">NSOU<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">LMS<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                      </ul>
                    </li>
                    <li class="nav-element" onclick="showHideMenu(this)" onmouseenter="showMenu(this)" onmouseleave="hideMenu(this)">
                      <a href="#" data-toggle="dropdown">Contact Us<i class="icon-arrow"></i></a>
                      <ul class="dropdown-menu">
                      </ul>
                    </li>
                  </ul>
              </div>
              <div class="pagination">
                <div class="left arrow"><!-- Left Arrow Icon using HTML Entity -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div>
                <div class="right arrow"><!-- Left Arrow Icon using HTML Entity -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
              </div>
          </div>    
      </div>
  </nav>
                `
    }
}
customElements.define("custom-navbar", Navbar);

// Dropdown Menu
let isOpen = true;
let prev, prevArrow;
let current, currentArrow;
function showHideMenu(ele){
  current = ele.querySelector('.dropdown-menu');
  currentArrow = ele.querySelector('a i.icon-arrow');

  if(prev!==current){
    prev?.classList.remove('show');
    prevArrow?.classList.remove('open');
    isOpen = true
  }
  
  current.classList.toggle('show', isOpen);
  currentArrow.classList.toggle('open', isOpen)
  setLeftPosition(ele)
  isOpen = !isOpen;
  
  current.classList.toggle('hide', isOpen);
  currentArrow.classList.toggle('close', isOpen)
  
  prev = current;
  prevArrow = currentArrow;
}

function showMenu(ele) {
  current = ele.querySelector('.dropdown-menu');
  currentArrow = ele.querySelector('a i.icon-arrow');

  current.classList.add('show');
  current.classList.remove('hide');
  currentArrow.classList.add('open');
  currentArrow.classList.remove('close');

  setLeftPosition(ele)
}

function setLeftPosition(ele){
  const parent = ele.parentElement; // Get the parent elemen
  let currentLeft = ele.offsetLeft - parent.scrollLeft;
  if(currentLeft<0){
    current.style.left = 0 +"px"
  }else{
    current.style.left = currentLeft+"px"
  }
  current.style.width = (getComputedStyle(document.querySelector('.nav-element [data-toggle="dropdown"]')).width)
  let elements = ele.querySelectorAll(".dropdown-menu li a");
let width = getComputedStyle(document.querySelector('.nav-element [data-toggle="dropdown"]')).width;

elements.forEach(element => {
    element.style.width = width;
});

}

document.getElementById("parent").addEventListener('scroll', function() {
  current?.classList.remove('show');
  currentArrow?.classList.add('close');
});

function hideMenu(ele) {
  current = ele.querySelector('.dropdown-menu');
  currentArrow = ele.querySelector('a i.icon-arrow');

  current.classList.add('hide');
  current.classList.remove('show');
  currentArrow.classList.add('close');
  currentArrow.classList.remove('open');
}


const categoryContainer = document.querySelector(".nav-container .nav-element-container .nav-elements");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

function updateButtonState() {
  const scrollLeft = categoryContainer.scrollLeft;
  const scrollWidth = categoryContainer.scrollWidth;
  const clientWidth = categoryContainer.clientWidth;
  const threshold = 3;

  leftButton.disabled = scrollLeft <= threshold;
  rightButton.disabled = scrollLeft + clientWidth + threshold >= scrollWidth;
}

function leftCategory() {
  categoryContainer.scrollBy({
    left: -200,
    behavior: "smooth"
  });
}

function rightCategory() {
  categoryContainer.scrollBy({
    left: 200,
    behavior: "smooth"
  });
}

categoryContainer.addEventListener("scroll", updateButtonState);
leftButton.addEventListener("click", leftCategory);
rightButton.addEventListener("click", rightCategory);

updateButtonState();

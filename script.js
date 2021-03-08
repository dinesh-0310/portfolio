window.onload = function () {
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "dinesh-0310", { responsive: true });
    const button = document.getElementById("btn");
    const nav_content = document.querySelector('.nav_content')
    button.addEventListener('click',()=>{
      nav_content.classList.toggle("show")
    })
    const nav_list = document.querySelectorAll('.nav_list');

    function linkAction(){
      nav_list.forEach(ele =>{
        ele.classList.remove("active")
      })
      this.classList.add('active')

      //remove menu
      nav_content.classList.remove("show")
    }
    nav_list.forEach(ele =>{
      ele.addEventListener('click',linkAction)
    })
    
}
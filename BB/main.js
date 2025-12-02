$("#bb").click(
    function(event){
        event.stopPropagation();
        $(".screen-nav").toggleClass("active");
        $("#bb").toggleClass("active");
    }
)

$(".nav-button").click(
    function(){
        $(".nav").toggleClass("border");
        $("#arrow").toggleClass("flip");
        $(".nav-rest").toggleClass("active");
    }
)


const searchErrors = document.querySelectorAll('#searchicon');
 const errorBox = document.createElement('div');
 errorBox.id = 'error-box';
 document.body.appendChild(errorBox);

 searchErrors.forEach(searchicon => {
     searchicon .addEventListener('click', (event) => {
         const infoText = searchicon .getAttribute('data-info');

         errorBox.style.opacity = '0';
         errorBox.style.transform = 'scale(0.9)';

         setTimeout(() => {
             errorBox.textContent = infoText;
             errorBox.style.top = `${event.clientY + 10}px`;
             errorBox.style.left = `${event.clientX + 10}px`;

             errorBox.classList.add('visible');
             errorBox.style.opacity = '1';
             errorBox.style.transform = 'scale(1)';
         }, 100); 
     });
 });

 document.addEventListener('click', (event) => {
     if (!event.target.classList.contains('searchError')) {
         errorBox.classList.remove('visible');
         errorBox.style.opacity = '0';
         errorBox.style.transform = 'scale(0.9)';
     }
 });
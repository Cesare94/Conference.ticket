
document.addEventListener('DOMContentLoaded', function() {
    const btnSubmit = document.getElementById('btn');
    const textInput = document.querySelector('h4')
    const fullName = document.getElementById('fullName');
    const emailAddress = document.getElementById('emailAddress');
    const githubUsername = document.getElementById('githubUsername');
    const input = document.querySelector('input');
    const photoImage = document.querySelector('.photo img');
    const mainText = document.querySelector('main');
    const navArea = document.querySelector('nav');
    const emailValue = document.getElementById('email');
    const photo = document.getElementById('photo');
    const paragraph = document.getElementById('paragraph');



    
    photoImage.addEventListener('click', function() {

        photo.innerHTML = `<img src="assets/images/image-avatar.jpg" alt="image-avatar">`
        paragraph.style.display = 'none';
            
     
        
    });
        
            


    btnSubmit.addEventListener('click', function() {
        
        if (input.value.trim() === '') {
            textInput.style.color = 'hsl(7, 71%, 60%)';
            fullName.style.color = 'hsl(7, 71%, 60%)';
            emailAddress.style.color = 'hsl(7, 71%, 60%)';
            githubUsername.style.color = 'hsl(7, 71%, 60%)';
            alert('Please, complete the fields');
            

            
           
        } 
        
        
        
        
        
        
         else {
            
            let max = 9;
             navArea.innerHTML = `<div class = 'logo'><img src="assets/images/logo-mark.svg" alt="logo-mark"><b>Conding Conf</b></div>` + 
            `<h1>Congrats, <strong>${text.value}</strong> Your ticket is ready.</h1>` + 
            `<p>We've emailed your ticket to <strong>${emailValue.value}</strong> and will send updates in the run up to the event.</p>`;
            mainText.innerHTML = `<div class="ticket" id="ticket">
            <div class="logo"><img src="assets/images/logo-mark.svg" alt="logo-mark">
            <b>Conding Conf</b><h5>Jan, 31, 2025 / Florence </h5>
            <div class = "avatar">${photo.innerHTML}</div>
            <h4>${text.value}</h4>
            <h4><i class="fa-regular fa-envelope"></i>${emailValue.value}</h4>
            </div>` + `<div class = 'number'>${Math.floor(Math.random()* (max))}${Math.floor(Math.random()* (max))}${Math.floor(Math.random()* (max))}${Math.floor(Math.random()* (max))}${Math.floor(Math.random()* (max))}${Math.floor(Math.random()* (max))}#</div>`;
            
          
            
            
            
         
        }

    

    })
 
 
})
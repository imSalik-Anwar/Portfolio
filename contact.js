// Contact page script
let Name = document.getElementById('name')
let email = document.getElementById('email')
let message = document.getElementById('message')
let formSubmit = document.getElementById('submit-btn');
let error = document.getElementById('error')
const form = document.getElementById('form');
let regex = /^.{3,}@.*\..*$/
formSubmit.addEventListener('click', (eventDetails) => {
  eventDetails.preventDefault()
    if(!Name.value.trim() || !message.value.trim() || !regex.test(email.value)){
        if(!Name.value.trim()){
            error.textContent = 'Enter your name.'
            error.style.color = 'tomato'
        }
        else if(!regex.test(email.value)){
            error.innerHTML = 'Enter a valid email.'
            error.style.color = 'tomato'
        }
        else if(!message.value.trim()){
            error.innerHTML = 'Type a message.'
            error.style.color = 'tomato'
        }
    } else {
        error.innerHTML = 'Thanks for sending the message.'
        error.style.color = '#FDC435'
        // Pause for 2 seconds before resetting the form
        setTimeout(function() {
          form.reset();
          error.classList.add('hide')
        }, 5000); // 2000 milliseconds = 2 seconds
    }
    error.classList.remove('hide')
  
})

// phone hover effect
const phoneIcon = document.getElementById('phone');
const phoneBox = document.getElementById('phone-box');
phoneIcon.addEventListener('mouseenter', () => {
    phoneBox.classList.remove('hide');
    phoneBox.classList.add('show');
})
phoneIcon.addEventListener('mouseleave', () => {
    phoneBox.classList.add('hide');
})
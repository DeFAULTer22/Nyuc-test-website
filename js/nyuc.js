function handleClick() {

    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('Name');
        const email = formData.get('Email');
        
        const phone = formData.get('Phone');
       const subject = formData.get('Subject');
        // const services = formData.get('Services');
        const message = formData.get('Message');



        const data = {
            name,
            email,
            phone,
            subject,
            // services,
            message,

        };

        console.log(data);

        // fetch('https://porsche-bc8e70dc565f.herokuapp.com/saveregister', {
            fetch('http://localhost:9000/saveregister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                const message = response.message;
                console.log("message---", response.message);
                // const popup = document.getElementById('notify');

                if (message === "ThankYou for Contacting!") {
                  
                  
                } 
                form.reset();

            })
            .catch(error => {
                console.error('Error:', error);

               
            });

    });

}


// function showPopup(message) {
//     var popupElement = document.getElementById("popup");
//     var popupMessageElement = document.getElementById("popupMessage");
//     var closeButton = document.getElementById("closeButton");
//     var overlayElement = document.getElementById("overlay");

//     popupMessageElement.textContent = message;
//     popupElement.style.display = "flex";
//     overlayElement.style.display = "block";

//     closeButton.addEventListener("click", function () {
//         popupElement.style.display = "none";
//         overlayElement.style.display = "none";
//     });
// }

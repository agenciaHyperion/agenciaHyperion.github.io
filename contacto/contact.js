var form = document.querySelector("#form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Tu mensaje fue enviado con éxito, nos estaremos comunicando contigo";
        form.reset()
    }).catch(error => {
        console.log(error);
        status.innerHTML = "Oops! Hubo un problema al enviar su mensaje"
    });
}
form.addEventListener("submit", handleSubmit)
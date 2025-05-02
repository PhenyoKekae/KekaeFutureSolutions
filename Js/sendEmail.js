function sendEmail()
{
    let parms = 
    {
        getAddress : document.getElementById("address").value,
        getDescription : document.getElementById("description").value,
        getEmail: document.getElementById("email").value,
        getCell : document.getElementById("cell").value,
        getSrequest : document.getElementById("Srequest").value,
        getServiceDate : document.getElementById("serviceDate").value,

        
    }
    emailjs.send("service_hplhzw3","template_mev62ng",parms).then(alert("Email Sent"))
}
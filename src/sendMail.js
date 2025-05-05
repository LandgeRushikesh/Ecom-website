export const sendMail = async(e) =>{
    e.preventDefault()
    var params = {
        from_name:document.getElementById("full-name").value,
        email_id:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    try {
        const res = await emailjs.send("service_gid9vv8", "template_1kktiwm", params);
        alert(`Success! Status: ${res.status}`);
        // Clear the form
        document.getElementById("full-name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } catch (error) {
        console.error("Email failed to send:", error);
        alert("Failed to send email. Please try again.");
    }
}
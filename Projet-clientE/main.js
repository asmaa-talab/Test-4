/*function envoiEmailInvi(name, email,organization){
  const sgMail =require('@sendgrid/mail');
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'awfaabdulkader6@gmail.com',
    subject: 'Invitation ',
    Text: `Bonjour ${name}, vous etes invité(e) avec ${organization}.`,
    html:`<p>Bonjour {$name},</p>
          <p>vous etes invité(e) avec ${organization}.</p>
          <p>Merci à bientot !.</p>`
  };

  sgMail.send(msg)
  .then(() => {
      console.log('Email envoyé');
    })
    .catch(error => {(error)
    });
}
function handlsubmit(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var organization = document.getElementById("organization").value;
  envoiEmailInvi(name, email,organization);
}
handlsubmit();
function getselectvalue(){
  var selectedvalue = document.getElementById("liste").value
  console.log(selectedvalue);
}
getselectvalue() ;
*/
function sendEmail() {
  // Récupérer les informations du formulaire
  var civility = document.querySelector('input[name="Ma"]:checked').value;
  var firstName = document.getElementById('prénom').value;
  var lastName = document.getElementById('nom').value;
  var email = document.getElementById('email').value;
  var interest = document.getElementById('liste').value;

  // Préparer l'e-mail
  var subject = 'Confirmation d\'inscription';
  var body = 'Bonjour ' + civility + ' ' + lastName + ',\n\n' +
             'Nous vous remercions pour votre inscription à l\'événement Moroccan Lighting day 4 Africa.\n\n' +
             'Voici un résumé des informations que vous avez fournies : \n\n' +
             'Prénom : ' + firstName + '\n' +
             'Nom : ' + lastName + '\n' +
             'E-mail : ' + email + '\n' +
             'Intérêt pour l\'événement : ' + interest + '\n\n' +
             'Nous vous confirmons votre inscription et vous enverrons une invitation très prochainement.\n\n' +
             'Cordialement,\n' +
             'L\'équipe de Moroccan Lighting day 4 Africa';
 
           // Envoyer l'e-mail via SMTP.js
    Email.send({
      SecureToken: 'c8ddc8d3-3a51-493d-8c28-460b8e484457',
      To: email,
      From: 'contact@mld4a.com',
      Subject: subject,
      Body: body,
    }).then(
      message => {
        // Afficher un message de confirmation
        alert("L'e-mail a été envoyé avec succès !");
        // Réinitialiser le formulaire
        document.getElementById("myForm").reset();
      }
    );
  }
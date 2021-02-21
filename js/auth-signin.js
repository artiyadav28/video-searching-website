//signin
const signinForm =document.querySelector('.form');
signinForm.addEventListener('submit' , (e) => {
  e.preventDefault();

  //taking input from users
  const email= signinForm['signin-email'].value;
  const password=signinForm['signin-password'].value;
  auth.signInWithEmailAndPassword(email,password).then(cred => {
    //shift the user to content.html
    location.href = "content.html";
  });
});
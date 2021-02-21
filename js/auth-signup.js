
// signup
 const signupForm = document.querySelector('.form');

 signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

//taking input from users
  const email=signupForm['signup-email'].value;
  const password=signupForm['signup-password'].value;

//connect to firebase
  auth.createUserWithEmailAndPassword(email,password).then(cred =>{

   //shift page to after signup
    location.href = "after-signup.html";
  });
 });

//getting data from database
db.collection('Categories').get().then(snapshot =>{
    //passing data into setUpCategory function in content.js
    setUpCategories(snapshot.docs);
});

//adding data to database
const addCategory =document.querySelector('#create-form');

addCategory.addEventListener('submit', e =>{
    e.preventDefault();

    db.collection('Categories').add({
        title: addCategory['title'].value ,
        content: [addCategory['content'].value]
    }).then(() =>{
        //close the modal and reset form
        const modal =document.querySelector('#modal-create');
        M.Modal.getInstance('modal').close();
        addCategory.reset();
    });
});

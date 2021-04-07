//getting a reference to ul tag - list of categories
const categoryList =document.querySelector('.categoryList');

const setUpCategories = data =>{
    data.forEach(doc =>{
        const category= doc.data();
        //console.log(category);
        // console.log(doc);
        let html=`<div class="collapsible-header grey lighten-4">${category.title}</div>`;
        //category.content gives an array of links
        category.content.forEach(link =>{
         html+=`<div class="collapsible-body white"><span>${link}</span></div>`;
        })
        //putting html string into ul tag 
        categoryList.innerHTML+= "<li>"+html+"</li>";
    });
}

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });
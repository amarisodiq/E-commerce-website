// // variables
// const products = document.querySelector("#products-list"),
// shoppingCartContent = document.querySelector('#cart-content tbody'),
// clearCartBtn = document.querySelector('#clear-cart');







// // listeners
// loadEventListeners(); 


// function loadEventListeners() {
//     // when a new products is added
//     products.addEventListener('click', buyCourse);

//     // when the remove button is clicked
//     shoppingCartContent.addEventListener('click', removeCourse); 
    
//     // clear cart btn
//     clearCartBtn.addEventListener('click', clearCart);

//     // document ready
//     document.addEventListener('DOMContentLoaded', getFromLocalStorage);
// }





// // functions
// function buyCourse(e) {
//     e.preventDefault();
//     // use delegation to find the course that was added 
//     if (e.target.classList.contains('add-to-cart')) {
//         // read the course values
//         const course = e.target.parentElement.parentElement;
//         // read the course values
//         getCourseInfo(course);
//     }

// }

// // reads the html info of the selected course
// function getCourseInfo(course){
//     // create an object with course data
//     const courseInfo = {
//         image: course.querySelector('img').src,
//         title: course.querySelector('h4').textContent,
//         price: course.querySelector('.price span').textcontent,
//         id: course.querySelector('a').getAttribute('data-id')

//     }
//     // insert into the shopping cart
//     addIntoCart(courseInfo);
// }
// // display th selected courses into the shopping cart
// function addIntoCart(course) {
//     // create a <tr>
//     const row = document.createElement('tr');  

//     // build the template
//     row.innerHTML= `
//     <tr>
//         <td>
//         <img src = "${course.image}" width=100>
//         </td> 
//         <td> ${course.title}</td>
//         <td> ${course.price}</td>
//         <td> 
//             <a href ="#" class = "remove" data-id="$(course.id)">X</a>
//         </td>

//     </tr>
//     `;
//     // add into the shopping cart
//     shoppingCartContent.appendChild(row);

//     // Add the course into storage
//     saveIntoStorage(course);
// }

// // Add the products into the local storage
//     function saveIntoStorage(course) {
//         let products = getProductsFromStorage();

//         // add the products into the array
//         products.push(course);
        
//         // since storage only saves strings, we need to convert JSON into string
//         localStorage.setItem('products', JSON.stringify(products));
//     }

//     // get the contents from storage
//     function getProductsFromStorage(){
//         let products;

//         // if something exist on storage then we get the value, otherwise create an empty array
//         if (localStorage.getItem('products')===null) {
//             products = [];
//         } else {
//             products = JSON.parse(localStorage.getItem('products'));
//         }
//         return products;
//     }
// // remove course from the dom
//     function removeCourse(e){
//         let course, courseId; 
//         // remove from the dom
//     if (e.target.classList.contains('remove')) {
//         e.target.parentElement.parentElement.remove();
//        course = e.target.parentElement.parentElement;
//         courseId = course.querySelector('a').getAttribute('data-id');
//     }
//     console.log(courseId);
//     // remove from the local storage
//     removeCourseLocalStorage(courseId);  

// }
//     // remove from the local storage
//     function removeCourseLocalStorage(id) {

//         //  get the local storage data
//         let productsLS = getProductsFromStorage();

//         // loop through the array and find the index to remove
//         productsLS.forEach(function(courseLS, index){
//             if(courseLS.id === id) {
//                 productsLS.splice(index, 1);
//             }
//         });
//         // console.log(productsLS);

//         // add the rest of the array
//         localStorage.setItem('products', JSON.stringify(productsLS));
//     }
   
// // clears the shopping cart
//     function clearCart(){
//     //  shopppingCartContent.innerHTML = ''; 
//       while(shoppingCartContent.firstChild) {
//           shoppingCartContent.removeChild(shoppingCartContent.firstChild);
//       }

//     // clear from local storage
//     clearLocalStorage();

// }

// // clears the whole local storage
//     function clearLocalStorage(){
//         localStorage.clear();
//     }
// // loads when document is ready and print products into shopping cart
// function getFromLocalStorage() {
//     let productsLs = getProductsFromStorage();

//     // loop throught the products and print into the cart
//     productsLs.forEach(function(course){

//         // create the <tr>  
//         const row = document.createElement('tr');
        
//         // print the content
//         row.innerHTML= `
//         <tr>
//             <td>
//             <img src = "${course.image}" width=100>
//             </td> 
//             <td> ${course.title}</td>
//             <td> ${course.price}</td>
//             <td> 
//                 <a href ="#" class = "remove" data-id="$(course.id)">X</a>
//             </td>

//         </tr>
//         `;
//         shoppingCartContent.appendChild(row);
//     });
// }








// loop
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scrolling-content");

    // Duplicate images to ensure seamless scrolling
    scrollContainer.innerHTML += scrollContainer.innerHTML;
});
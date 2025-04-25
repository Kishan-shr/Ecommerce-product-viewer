// addEventListener("DOMContentLoaded",()=>{

// const cart = document.querySelector("#cart-icon")
// const cartContainer = document.querySelector("#cart-container")
// const addToCartButtons = document.querySelector(".add-to-cart")
// const productDetails = document.querySelector(".product-details")
// const emptyDisplay = document.querySelector("#empty-display")
// const checkOut = document.querySelector(".check-out")
// const cartItem =document.querySelector(".cart-item")
// let quantityContainer = document.querySelector('#quantity')
// let carCountDisplay = document.querySelector('#cart-count')




// let count = 1

// function renderCount(){
// //increment and decrement functionality
// const cartDashboard = document.querySelector('.cart')
// cartDashboard.addEventListener('click',(e)=>{
// //check if the clicked element is a plus or minus btn
// if(e.target.classList.contains('plus') || e.target.classList.contains('minus')){
//  quantityContainer = e.target.closest('#quantity');
//   const input = quantityContainer.querySelector('.input');
//   let currentValue = parseInt(input.value,10)|| 0;
  
//   if(e.target.classList.contains('plus')){
//     input.value = currentValue + 1;
//     count = input.value
//     carCountDisplay.textContent=`${count}`  
//   }
//   if(e.target.classList.contains('minus') && currentValue > 0){
//     input.value = currentValue - 1;
//     count = input.value
//   carCountDisplay.textContent=`${count}`

//   }
//   // if (currentValue < 1){
//   //   quantityContainer.style.display="none"
//   // }
// }
// })
// }

// function renderCart(){
//   carCountDisplay.textContent=`${count}`
//   const img = document.querySelector('.thumbnail')
//   const name = document.querySelector('.product-name')
//   const list = document.createElement('li')
//   const price = document.querySelector('.price').textContent
//   const itemPrice = parseInt(price.replace(/[^0-9.]/g, ''));
//   let totalPrice = count * itemPrice
// const existingItem = cartItem.querySelectorAll('.cart-li')
// if(existingItem.length === 0){
//   list.className = "cart-li"
//   list.innerHTML=`
//   <div class="productDetails">
//   <span class="productImg"><img src="${img.src}" style="width:50px; height:50px; border-radius:5px" ></span>
//   <div class="ProductInfo">
//   <span class="productName">${name.textContent}</span>
//   <li class="price-section">
//   <span class="productPrice">${price}</span>
//   <span class="productQuantity">x$${count}</span>
//   <span class="finalPrice">$${totalPrice}</span>
//   </li>
//   </div>
//   <div class="delete-icon"><img src="ecommerce-product-page-main/images/icon-delete.svg" alt="delete.svg"></img></div>
//   </div>
//   `;
// cartItem.appendChild(list)
// }
// }
// //Add to cart functionality 
// function addToCart() {
//    addToCartButtons.addEventListener("click",()=>{
//     renderCount()
//     if(count >= 1){
//       quantityContainer.style.display="flex"
//     }
//     else{
//       quantityContainer.style.display="none"
//     }
//     emptyDisplay.style.display="none"
//      checkOut.style.display="block"
//      carCountDisplay.classList.remove('hidden')
//      carCountDisplay.innerHTML='';
//      renderCart()
//     //using event list listener delete
//     // console.log(list);
//   //  const deleteBtn = list.querySelector(".delete-icon");
//   //  deleteBtn.addEventListener('click',()=>{
//   //      emptyDisplay.style.display="block"
//   //    checkOut.style.display="none"
//   //   list.remove();
//   //  })

//   //event delegation
//   cartContainer.addEventListener('click', function (e) {
 
//     carCountDisplay.classList.add('hidden')
//     if (e.target.closest('.delete-icon')   ) {
//       const cartItem = e.target.closest('.cart-li');
//       if (cartItem){
//          cartItem.remove()        
//         emptyDisplay.style.display="block"
//         checkOut.style.display="none"
//         };
//     }
//   });

//   })
// }
//  addToCart()




// cart.addEventListener("click", (e) => {
//     e.stopPropagation(); // Prevent this click from bubbling up to the window
//     const isHidden = cartContainer.classList.contains("hidden");
  
//     if (isHidden) {
//       cartContainer.classList.remove("hidden");
//       cartContainer.style.display = "flex";
//     }
//   });
  
//   // Hide when clicking anywhere else on the window
// // window.addEventListener("click", (e) => {
// //     if (!cart.contains(e.target) && !cartContainer.contains(e.target)) {
// //       cartContainer.classList.add("hidden");
// //       cartContainer.style.display = ""; // Remove inline style
// //     }
// //   });

//})

// document.addEventListener("DOMContentLoaded", () => {
//   const cart = document.querySelector(".cart-div");
//   const cartContainer = document.querySelector("#cart-container");
//   const addToCartButtons = document.querySelector(".add-to-cart");
//   const productDetails = document.querySelector(".product-details");
//   const emptyDisplay = document.querySelector("#empty-display");
//   const checkOut = document.querySelector(".check-out");
//   const cartItem = document.querySelector(".cart-item");
//   let quantityContainer = document.querySelector("#quantity");
//   let carCountDisplay = document.querySelector("#cart-count");

//   let count = 1;

//   function renderCount() {
//     const cartDashboard = document.querySelector(".cart");
//     cartDashboard.addEventListener("click", (e) => {
//       if (
//         e.target.classList.contains("plus") ||
//         e.target.classList.contains("minus")
//       ) {
//         quantityContainer = e.target.closest("#quantity");
//         const input = quantityContainer.querySelector(".input");
//         let currentValue = parseInt(input.value, 10) || 0;

//         if (e.target.classList.contains("plus")) {
//           input.value = ++currentValue;
//         } else if (e.target.classList.contains("minus") && currentValue > 0) {
//           input.value = --currentValue;
//         }

//         count = currentValue;
//         carCountDisplay.textContent = `${count}`;
//        if(count === 0) {
//           quantityContainer.style.display = "none";
//         }

//         // Update values in cart if product is already there
//         const productQuantity = document.querySelector(".productQuantity");
//         const finalPrice = document.querySelector(".finalPrice");
//         const priceText = document.querySelector(".productPrice")?.textContent;
//         const itemPrice = parseInt(priceText?.replace(/[^0-9.]/g, "") || 0);
//         if (productQuantity && finalPrice) {
//           productQuantity.textContent = `x$${count}`;
//           finalPrice.textContent = `$${count * itemPrice}`;
//         }

//         // Hide cart count if quantity goes to 0
//         if (count >= 1) {
//           carCountDisplay.classList.remove("hidden");
//         } else {
//           carCountDisplay.classList.add("hidden");
//         }
//       }
//     });
//   }

//   function renderCart() {
//     carCountDisplay.textContent = `${count}`;
//     const img = document.querySelector(".thumbnail");
//     const name = document.querySelector(".product-name");
//     const price = document.querySelector(".price").textContent;
//     const itemPrice = parseInt(price.replace(/[^0-9.]/g, ""));
//     let totalPrice = count * itemPrice;

//     const existingItem = cartItem.querySelectorAll(".cart-li");
//     if (existingItem.length === 0) {
//       const list = document.createElement("li");
//       list.className = "cart-li";
//       list.innerHTML = `
//         <div class="productDetails">
//           <span class="productImg">
//             <img src="${img.src}" style="width:50px; height:50px; border-radius:5px">
//           </span>
//           <div class="ProductInfo">
//             <span class="productName">${name.textContent}</span>
//             <li class="price-section">
//               <span class="productPrice">${price}</span>
//               <span class="productQuantity">x$${count}</span>
//               <span class="finalPrice">$${totalPrice}</span>
//             </li>
//           </div>
//           <div class="delete-icon">
//             <img src="ecommerce-product-page-main/images/icon-delete.svg" alt="delete.svg">
//           </div>
//         </div>
//       `;
//       cartItem.appendChild(list);
//     }
//   }

//   function addToCart() {
//     addToCartButtons.addEventListener("click", () => {
//      let cartCount = 1;
//       renderCount();
//       if (count >= 1) {
//         quantityContainer.style.display = "flex";
//       }
//      emptyDisplay.style.display = "none";
//       checkOut.style.display = "block";
//       carCountDisplay.classList.remove("hidden");
//       carCountDisplay.innerHTML = "";

//       renderCart();

//       // Event delegation for delete
//       cartContainer.addEventListener("click", function (e) {
//         if (e.target.closest(".delete-icon")) {
//           const cartItemEl = e.target.closest(".cart-li");
//           if (cartItemEl) {
//             cartItemEl.remove();
//             emptyDisplay.style.display = "block";
//             checkOut.style.display = "none";
//             carCountDisplay.classList.add("hidden");
//           }
//         }
//       });
//     });
//   }

//   addToCart();
//   cart.addEventListener("click", (e) => {
//     e.stopPropagation(); // Prevent this click from bubbling up to the window
//     const isHidden = cartContainer.classList.contains("hidden");
  
//     if (isHidden) {
//       cartContainer.classList.remove("hidden");
//       cartContainer.style.display = "flex";
//     }
//   });
// }); 

document.addEventListener("DOMContentLoaded", () => {
  const cart = document.querySelector("#cart-icon");
  const cartContainer = document.querySelector("#cart-container");
  const addToCartButton = document.querySelector(".add-to-cart");
  const emptyDisplay = document.querySelector("#empty-display");
  const checkOut = document.querySelector(".check-out");
  const cartItemContainer = document.querySelector(".cart-item");
  const quantityContainer = document.querySelector("#quantity");
  const cartCountDisplay = document.querySelector("#cart-count");
  const orderConfirmation = document.querySelector("#confirm-message");
  const navMenu = document.querySelector('.nav-menu')

  let count = 0;

  function updateCartUI() {
    const existingItem = cartItemContainer.querySelector(".cart-li");
    const input = quantityContainer.querySelector(".input");
    input.value = count;

    if (count >= 1) {
      quantityContainer.style.display = "flex";
      cartCountDisplay.classList.remove("hidden");
      cartCountDisplay.textContent = `${count}`;
      emptyDisplay.style.display = "none";
      checkOut.style.display = "block";
      cartItemContainer.classList.remove("hidden")
    } else {
      quantityContainer.style.display = "none";
      cartCountDisplay.classList.add("hidden");
      emptyDisplay.style.display = "block";
      checkOut.style.display = "none";
      cartItemContainer.classList.add("hidden")
    }

    if (existingItem) {
      const productQuantity = existingItem.querySelector(".productQuantity");
      const finalPrice = existingItem.querySelector(".finalPrice");
      const priceText = existingItem.querySelector(".productPrice")?.textContent;
      const itemPrice = parseInt(priceText?.replace(/[^0-9.]/g, "") || 0);

      productQuantity.textContent = `x$${count}`;
      finalPrice.textContent = `$${count * itemPrice}`;
    }
  }

  function renderCartItem() {
    const existingItem = cartItemContainer.querySelector(".cart-li");
    if (existingItem) return; // Don't render again

    const img = document.querySelector("#thumbnail");
    const name = document.querySelector(".product-name");
    const price = document.querySelector(".price").textContent;
    const itemPrice = parseInt(price.replace(/[^0-9.]/g, ""));
    const totalPrice = count * itemPrice;

    const list = document.createElement("li");
    list.className = "cart-li";
    list.innerHTML = `
      <div class="productDetails">
        <span class="productImg"><img src="${img.src}" style="width:50px; height:50px; border-radius:5px"></span>
        <div class="ProductInfo">
          <span class="productName">${name.textContent}</span>
          <li class="price-section">
            <span class="productPrice">${price}</span>
            <span class="productQuantity">x$${count}</span>
            <span class="finalPrice">$${totalPrice}</span>
          </li>
        </div>
        <div class="delete-icon"><img src="ecommerce-product-page-main/images/icon-delete.svg" alt="delete.svg"></div>
      </div>
    `;
    cartItemContainer.appendChild(list);
  }

  function handleQuantityChange(change) {
    count = Math.max(0, count + change);
    if (count === 0) {
      cartItemContainer.innerHTML = ""; // Clear item if count is 0
    } else {
      renderCartItem(); // Only renders if not already
    }
    updateCartUI();
  }

  function setupListeners() {
    addToCartButton.addEventListener("click", () => {
      handleQuantityChange(1);
    });

    document.querySelector(".cart").addEventListener("click", (e) => {
      if (!e.target.classList.contains("plus") && !e.target.classList.contains("minus")) return;

      const isPlus = e.target.classList.contains("plus");
      handleQuantityChange(isPlus ? 1 : -1);
    });

    cartContainer.addEventListener("click", (e) => {
      if (e.target.closest(".delete-icon")) {
        cartItemContainer.innerHTML = "";
        count = 0;
        updateCartUI();
      }
    });
  }

  setupListeners();

  cart.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent this click from bubbling up to the window
    const isHidden = cartContainer.classList.contains("hidden");
  
    if (isHidden) {
      cartContainer.classList.remove("hidden");
      cartContainer.style.display = "flex";
    }
  });
  
  checkOut.addEventListener('click',()=>{
    orderConfirmation.classList.remove('hidden')
    setTimeout(() => {
      orderConfirmation.classList.add('hidden')
    }, 400);
    count=0 ; //reset ui
    updateCartUI() //reset count //remove cartlist // remove +-btn //display cart is empty
    const existingItem = orderConfirmation.querySelector(".confirm-message");
    if (existingItem) return; // Don't render again
    const confirmText = document.createElement('div')
    confirmText.className = "confirm-message"
    confirmText.innerHTML=`
    <span>Order Placed Sucessfully </span>`
    orderConfirmation.appendChild(confirmText)
   
  })

//lightbox
const images = ["product-1.jpg", "product-2.jpg", "product-3.jpg", "product-4.jpg"];
let currentIndex = 0;

const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    toggleLightbox(true);
  });
});

function toggleLightbox(show) {
  lightbox.style.display = show ? 'flex' : 'none';
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  showImage();
}

function showImage() {
  lightboxImg.src = images[currentIndex];
  thumbs.forEach(thumb => thumb.classList.remove('active'));
  thumbs[currentIndex].classList.add('active');
}
document.querySelector('.left').addEventListener('click',()=>{
  changeSlide(-1)
})

document.querySelector('.right').addEventListener('click',()=>{
  changeSlide(1)
})
document.querySelector('.close-btn').addEventListener('click',()=>{
    toggleLightbox(false)

})

//menu-opening
document.querySelector('.menu-icon').addEventListener('click',()=>{
navMenu.style.display="flex"

})

//menu-closing
document.querySelector('.close-icon').addEventListener('click',()=>{
  if(window.innerWidth < 769 ){
    navMenu.style.display="none"
}
});
// Remove 'hidden' class when screen size changes to larger than 768px
window.addEventListener('resize', () => {
  if (window.innerWidth > 769) {
    navMenu.style.display="flex"
  }
  if (window.innerWidth < 769){
  navMenu.style.display="none"
  }
  if (window.innerWidth < 600){
 document.querySelector('.lightbox').style.display="block"
  }
  else{

     document.querySelector('.lightbox').style.display="none"
  }
});

  // Hide when clicking anywhere else on the window
 window.addEventListener("click", (e) => {
    if (!cartContainer.contains(e.target) && !addToCartButton.contains(e.target) && !quantityContainer.contains(e.target) ) {
      cartContainer.classList.add("hidden");
      cartContainer.style.display = ""; // Remove inline style
    }
  })

});

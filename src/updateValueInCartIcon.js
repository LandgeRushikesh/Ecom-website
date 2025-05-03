export const UpdateCartValue = (cartArray) =>{
    let totalCartItems = cartArray.length
    document.querySelector(".nav-bar").querySelector(".cart").innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${totalCartItems}`
}
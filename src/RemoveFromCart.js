import { getProductLS } from "./getProductLS"
import { UpdateCartValue } from "./updateValueInCartIcon"
// To remove products from local storage filter method is used

// To remove products from addToCart page .remove() method is used
export const RemoveFromCart = (id) => {
    let cartArray = getProductLS()
    let updatedCart = cartArray.filter((product)=>product.productID!=id)
    localStorage.setItem("CartProduct",JSON.stringify(updatedCart))
    document.querySelector(".cart-products").querySelector(`#${id}`).remove()

    UpdateCartValue(updatedCart)
}
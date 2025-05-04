import { getProductLS } from "./getProductLS";
import products from "./productList.json"
import { RemoveFromCart } from "./RemoveFromCart";
import { UpdateCartValue } from "./updateValueInCartIcon";
import { HandleProductSummary } from "./HandleProductSummary";
import { handleQuantityInCart } from "./handleQuantityInCart";

const showCartProducts = () => {
    let cartProducts = getProductLS()
    let cartProductContainer = document.querySelector(".cart-products")

    //here instead of nested loop we are creating a map of all the products in productList {"id"---> product} so when we want a product from productList which is added to cart we can use .get method and pass the id to it.It will return corresponding product object

    let productMap = new Map()
    products.forEach(p => productMap.set(p.id, p))
    cartProducts.forEach((product) => {
        let proID = Number(product.productID.replace("card", ""))
        let ele = productMap.get(proID)
        if (ele) {
            cartProductContainer.innerHTML +=
                `<div class="cart-product" id="card${proID}">
                    <p class="product-type">${ele.category}</p>
                    <div class="product-img">
                        <img src="..${ele.imageLink}" alt="img" />
                    </div>
                    <h1 class="heading">${ele.heading}</h1>
                    <div class="Total-price"> &#8377; ${product.TotalPrice}</div>
                    <div class="btns">
                        <button class="btn inc">+</button>
                        <p class="count btn">${product.Quantity}</p>
                        <button class="btn dec">-</button>
                    </div>
                    <button class="Remove-from-cart">Remove</button>
                </div>`
        }
        HandleProductSummary()
    })

    // Handling remove cart functionality
    document.querySelectorAll(".Remove-from-cart").forEach((btn)=>
        btn.addEventListener("click",()=>{
            let id = btn.parentElement.id
            RemoveFromCart(id)
    }))

    // Handling increment and decrement functionality

    document.querySelectorAll(".btns").forEach((btn)=>
        btn.addEventListener("click",(e)=>{
            let id = Number(btn.parentElement.id.replace("card", ""))
            let ele = productMap.get(id)
            id = `card${id}`
            let Totalquantity = ele.totalStock
            let acutalPrice = ele.discountedPrice
            handleQuantityInCart(id,e,Totalquantity,acutalPrice)
    }))

    UpdateCartValue(cartProducts)
}

showCartProducts()
import { UpdateCartValue } from "./updateValueInCartIcon"
import { getProductLS } from "./getProductLS"

export const addToCart = (id) =>{

    let cartProduct = getProductLS()
    let price = document.getElementById(`${id}`).querySelector(".price").querySelector(".discounted-price").textContent
    price = Number(price.replace("₹ ", ""))
    
    let quantity = Number(document.getElementById(`${id}`).querySelector(".quantity").querySelector(".btns").querySelector(".count").textContent)
    
    let total = price*quantity

    let update = false
    cartProduct.forEach((product)=>{
        if(product.productID==id){
            product.Quantity += quantity
            product.TotalPrice = price*product.Quantity
            localStorage.setItem("CartProduct",JSON.stringify(cartProduct))
            update = true
        }
    })

    if(!update){
        let product = {
            productID : id,
            Quantity : quantity,
            TotalPrice : total
        }
        cartProduct.push(product)
    
        localStorage.setItem("CartProduct",JSON.stringify(cartProduct))
    
        UpdateCartValue(cartProduct)
    }
}


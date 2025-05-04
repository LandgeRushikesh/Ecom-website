import { getProductLS } from "./getProductLS"
import { HandleProductSummary } from "./HandleProductSummary"

export const handleQuantityInCart = (id, event, Totalquantity, actualPrice) => {
    let localStorageQuantity = 1
    let localStoragePrice = 0
    let cartArray = getProductLS()
    let prouctQuantity = Number(document.querySelector(`#${id}`).querySelector(".btns").querySelector(".count").textContent)
    if (event.target.classList.contains("count")) {
        return
    }
    else if (event.target.classList.contains("inc")) {
        if (prouctQuantity < Totalquantity) {
            prouctQuantity += 1
        }
        else {
            prouctQuantity = Totalquantity
        }
    }
    else if (event.target.classList.contains("dec")) {
        if (prouctQuantity > 1) {
            prouctQuantity -= 1
        }
        else {
            prouctQuantity = 1
        }
    }
    localStorageQuantity = prouctQuantity
    localStoragePrice = actualPrice * prouctQuantity
    let updatedCart = cartArray.map((product) => {
        if (product.productID == id) {
            return {
                ...product,
                Quantity: localStorageQuantity,
                TotalPrice: localStoragePrice
            }
        }
        return product
    })
    localStorage.setItem("CartProduct", JSON.stringify(updatedCart))
    document.querySelector(`#${id}`).querySelector(".btns").querySelector(".count").innerText = localStorageQuantity
    document.querySelector(`#${id}`).querySelector(".Total-price").innerHTML = ` &#8377; ${localStoragePrice}`

    HandleProductSummary()
}
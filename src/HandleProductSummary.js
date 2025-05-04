import { getProductLS } from "./getProductLS"

export const HandleProductSummary = ()=>{
    let cartArray = getProductLS()

    let totalProductPrice = 0
    cartArray.forEach((product)=>{
        totalProductPrice += product.TotalPrice
    })

    document.querySelector(".Amount-summary").querySelector(".sub-total").querySelector(".price").innerHTML = `&#8377; ${totalProductPrice}`
    document.querySelector(".Amount-summary").querySelector(".total").querySelector(".total-price").innerHTML = `&#8377; ${totalProductPrice+50}`
}
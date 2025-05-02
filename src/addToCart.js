export const addToCart = (id,event) =>{
    let price = document.getElementById(`${id}`).querySelector(".price").querySelector(".original-price").textContent
    price = Number(price.replace("₹ ", ""))
    
    let quantity = Number(document.getElementById(`${id}`).querySelector(".quantity").querySelector(".btns").querySelector(".count").textContent)
    
    let total = price*quantity
    let product = {
        productID : id,
        Quantity : quantity,
        TotalPrice : total
    }

    localStorage.setItem("Product",JSON.stringify(product))
}


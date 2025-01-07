export  let addProduct = (productList) =>{
    if(!productList){
        return
    }

    let productContainer = document.querySelector(".products-container")
    productList.forEach(product => {
        productContainer.innerHTML = productContainer.innerHTML + 
            `<div class="product-card">
              <p class="product-type">${product.category}</p>
              <div class="product-img">
                <img src=${product.imageLink} alt="img">
              </div>
              <h1 class="heading">${product.heading}</h1>
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="description">
                ${product.description} 
              </p>
              <div class="price">
                <p class="discounted-price"> &#8377; ${product.discountedPrice} </p>
                <p class="original-price"> &#8377; ${product.originalPrice} </p>
              </div>
              <div class="stocks">
                <p>Total Stocks available: ${product.totalStock} </p>
              </div>
              <div class="quantity">
                <p>Quantity:</p>
                <div class="btns">
                  <button class="btn inc">+</button>
                  <p class="count btn">1</p>
                  <button class="btn dec">-</button>
                </div>
              </div>
              <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
            </div>`
    });
}
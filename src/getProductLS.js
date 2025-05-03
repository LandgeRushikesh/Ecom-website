export const getProductLS = ()=>{
    let arrProductInLS = localStorage.getItem('CartProduct')
    if(!arrProductInLS){
        return []
    }
    arrProductInLS = JSON.parse(arrProductInLS)
    return arrProductInLS
}
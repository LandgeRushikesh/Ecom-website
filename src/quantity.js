export const quantityToggel = (event,count,quantity) =>{
    if(event.target.classList.contains("inc")){
        if(count<quantity){
            count = Number(count)
            count +=1
            return count
        }
        else{
            count = quantity
            return count
        }
    }
    else if(event.target.classList.contains("dec")){
        if(count>1){
            count = count
            count -=1
            return count
        }
        else{
            return 1
        }
    }
    else{
        return count;
    }
}
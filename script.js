const addCartBtns = document.querySelectorAll(`.books`);
let yourCart = document.getElementById(`yourCart`);

const selectedImages = [];
addCartBtns.forEach((button) =>{
    button.addEventListener("click", () =>{
        const productItem = button.parentElement;
        const productImg = productItem.querySelector(`img`);
        if(selectedImages.some((img) => img.src === productImg.src)){
            alert(`This Item is already in your cart`)
            return;
        }
        const clonedImg = productImg.cloneNode();
        yourCart.appendChild(clonedImg);
        selectedImages.push(clonedImg)
        
    })
}) 

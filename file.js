var buttonOfDeccreaseOne=document.getElementById('decrease-1');
var buttonOfDeccreaseTwo=document.getElementById('decrease-2');
var buttonOfDeccreaseThree=document.getElementById('decrease-3');
var buttonOfIncreaseOne=document.getElementById('increase-1');
var buttonOfIncreaseTwo=document.getElementById('increase-2');
var buttonOfIncreaseThree=document.getElementById('increase-3');
var quantityOfItemsOne=document.getElementById("first-item");
var quantityOfItemsTwo=document.getElementById("second-item");
var quantityOfItemsThree=document.getElementById("third-item");
var parentElementArticle=document.getElementsByClassName("col-md-8 cart");
var childElementArticleOne=document.getElementById('childElement-one');
var childElementArticleTwo=document.getElementById('childElement-two');
var childElementArticleThree=document.getElementById('childElement-three');
var likeButton=document.getElementById('heart-one');
var buttonDeleteOne=document.getElementById('item-one');
var buttonDeleteTwo=document.getElementById('item-two');
var buttonDeleteThree=document.getElementById('item-three');
var priceOne=document.getElementById('price-one');
var priceTwo=document.getElementById('price-two');
var priceThree=document.getElementById('price-Three');


console.log(buttonDeleteOne);
console.log(childElementArticleOne);

console.log(buttonDeleteThree);
console.log(childElementArticleThree);

console.log( 'price three '+priceThree);


function increaseQuantityOfItems(element,price)
{
   

  var i=parseInt(element.innerHTML);
i++;

element.innerHTML=i;

var p=parseInt(price.innerHTML);
p=p*i;
price.innerHTML=p+'.00'



console.log(i)
console.log(p);
}

function IncreaseItemOne()
{
    increaseQuantityOfItems(quantityOfItemsOne,priceOne);
    
}
function IncreaseItemTwo()
{
    increaseQuantityOfItems(quantityOfItemsTwo,priceTwo);
}
function IncreaseItemThree()
{
    increaseQuantityOfItems(quantityOfItemsThree,priceThree);
}
function decreaseQuantityOfItems(element,price)
{
  
  var i=parseInt(element.innerHTML);
  if(i>0)
  {
    i--;
    element.innerHTML=i;
    var p=parseInt(price.innerHTML);
    p=p*i;
    price.innerHTML=p+'.00'
  }
  else
  {
   i=0 ;
  }
  
}

function decreaseItemOne ()
{
    decreaseQuantityOfItems(quantityOfItemsOne,priceOne);
}
function decreaseItemTwo ()
{
    decreaseQuantityOfItems(quantityOfItemsTwo,priceTwo);
}
function decreaseItemThree ()
{
    decreaseQuantityOfItems(quantityOfItemsThree,priceThree);
}
buttonOfIncreaseOne.addEventListener("click",IncreaseItemOne);
buttonOfIncreaseTwo.addEventListener("click",IncreaseItemTwo);
buttonOfIncreaseThree.addEventListener("click",IncreaseItemThree);


buttonOfDeccreaseOne.addEventListener("click",decreaseItemOne);
buttonOfDeccreaseTwo.addEventListener("click",decreaseItemTwo);
buttonOfIncreaseThree.addEventListener("click",decreaseItemThree);
function deleteElement(element)
{
  element.remove();
}
  function deleteArticleOne()
  {
    deleteElement(childElementArticleOne);
    alert('hey');
    
  }
  function deleteArticleTwo()
  {
    
    deleteElement(childElementArticleTwo);
  }
  function deleteArticleThree()
  {
  
    deleteElement(childElementArticleThree);
  }
  function likeArticle()
  {
    likeButton.style.color='blue';
    alert('cliqué')
  }

  console.log(parentElementArticle);
  buttonDeleteOne.addEventListener("click",deleteArticleOne);
  buttonDeleteTwo.addEventListener("click",deleteArticleTwo);
  buttonDeleteThree.addEventListener("click",deleteArticleThree);
  likeButton.addEventListener("click",likeArticle);
  


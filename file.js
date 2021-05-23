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
var likeButtonOne=document.getElementById('likeButton-one');
var likeButtonTwo=document.getElementById('likeButton-two');
var likeButtonThree=document.getElementById('likeButton-three');
var buttonDeleteOne=document.getElementById('item-one');
var buttonDeleteTwo=document.getElementById('item-two');
var buttonDeleteThree=document.getElementById('item-three');
var priceOne=document.getElementById('price-one');
var priceTwo=document.getElementById('price-two');
var priceThree=document.getElementById('price-Three');
var sumOfItems=document.getElementById('sum');
var articlePriceOne=40;
var articlePriceTwo=20;
var articlePriceThree=30;
console.log(quantityOfItemsThree);
console.log(buttonOfIncreaseThree);


function increaseQuantityOfItems(element,price, articlePrice)
{
   

  var i=parseInt(element.innerHTML);
i++;

element.innerHTML=i;

var p=parseInt(price.innerHTML);
p+=articlePrice;
price.innerHTML=p;




}

function IncreaseItemOne()

{
  
  
    increaseQuantityOfItems(quantityOfItemsOne,priceOne,articlePriceOne);
    
    var sum= parseInt(sumOfItems.innerHTML)+articlePriceOne;
    sumOfItems.innerHTML=sum;

  
 
 
 console.log(sum);

    
}
function IncreaseItemTwo()
{
    increaseQuantityOfItems(quantityOfItemsTwo,priceTwo,articlePriceTwo);
    var sum= parseInt(sumOfItems.innerHTML)+articlePriceTwo;
    sumOfItems.innerHTML=sum;
}
function IncreaseItemThree()
{
    increaseQuantityOfItems(quantityOfItemsThree,priceThree,articlePriceThree);
    var sum= parseInt(sumOfItems.innerHTML)+articlePriceThree;
    sumOfItems.innerHTML=sum;
    
  
}
function decreaseQuantityOfItems(element,price,articlePrice)
{
  var i=parseInt(element.innerHTML);
  var p=parseInt(price.innerHTML);
  if(i>1)
  {

  i--;
  
  element.innerHTML=i;
  
 
  p-=articlePrice;
  price.innerHTML=p;
}
  
 
  
}

function decreaseItemOne ()
{
  decreaseQuantityOfItems(quantityOfItemsOne,priceOne,articlePriceOne);
  console.log(parseInt(quantityOfItemsOne.innerHTML))
  if(parseInt(quantityOfItemsOne.innerHTML)>0)
  {
    
    var sum= parseInt(sumOfItems.innerHTML)-articlePriceOne;
    sumOfItems.innerHTML=sum;
  }
  
  
    
    
}
function decreaseItemTwo ()
{
  decreaseQuantityOfItems(quantityOfItemsTwo,priceTwo,articlePriceTwo);
  if(parseInt(quantityOfItemsOne.innerHTML)>1)
    {
      var sum= parseInt(sumOfItems.innerHTML)-articlePriceTwo;
      sumOfItems.innerHTML=sum;
    }
    
    
   
}
function decreaseItemThree ()
{
    decreaseQuantityOfItems(quantityOfItemsThree,priceThree,articlePriceThree);
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
    var  Total=sumOfItems.innerHTML;
    Total-=parseInt(priceOne.innerHTML);
    sumOfItems.innerHTML=Total.toString();
    
    deleteElement(childElementArticleOne); 
   

    
  }
  function deleteArticleTwo()
  {
    var  Total=sumOfItems.innerHTML;
    Total-=parseInt(priceTwo.innerHTML);
    sumOfItems.innerHTML=Total.toString();
    console.log(Total)
    console.log( sumOfItems);
  
    deleteElement(childElementArticleTwo);
  }
  function deleteArticleThree()
  {
    var  Total=sumOfItems.innerHTML;
    Total-=parseInt(priceThree.innerHTML);
    sumOfItems.innerHTML=Total.toString();
   
    deleteElement(childElementArticleThree);
   
  }
  function likeArticle()
  {
    //likeButtonOne.setAttribute("style", "color:red");

    likeButtonTwo.removeAttribute('style');
    likeButtonTwo.setAttribute('style','backgroundColor:red')

    alert('cliqué');

  }

  console.log(parentElementArticle);
  buttonDeleteOne.addEventListener("click",deleteArticleOne);
  buttonDeleteTwo.addEventListener("click",deleteArticleTwo);
  buttonDeleteThree.addEventListener("click",deleteArticleThree);
  likeButtonOne.addEventListener("click",likeArticle);
  likeButtonTwo.addEventListener("click",likeArticle);
  likeButtonThree.addEventListener("click",likeArticle);
  
  


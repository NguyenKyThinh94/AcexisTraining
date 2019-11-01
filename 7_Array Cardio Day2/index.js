
let productList=  [
    {itermId: "1", productName: "Bong Den", actualPrice: "53000", discountPrice: "42000", stockAvailable: "111" },
    {itermId: "2", productName: "Day dien", actualPrice: "35000", discountPrice: "35000", stockAvailable: "2" },
    {itermId: "3", productName: "Cong tac", actualPrice: "20000", discountPrice: "1000", stockAvailable: "13" },
    {itermId: "4", productName: "O cam dien", actualPrice: "50000", discountPrice: "43000", stockAvailable: "0" },
    {itermId: "5", productName: "Noi com dien", actualPrice: "20000", discountPrice: "17000", stockAvailable: "31" },
    {itermId: "6", productName: "Quat hoi nuoc", actualPrice: "1000000", discountPrice: "970000", stockAvailable: "0" },
    {itermId: "7", productName: "Ban ui", actualPrice: "300000", discountPrice: "245000", stockAvailable: "1" },
    {itermId: "8", productName: "chao chien", actualPrice: "90000", discountPrice: "83000", stockAvailable: "15" },
    {itermId: "9", productName: "Den compac", actualPrice: "84000", discountPrice: "81000", stockAvailable: "18" },
    {itermId: "10", productName: "Den chum", actualPrice: "730000", discountPrice: "639000", stockAvailable: "17" },
  ]
function sortList(){
    let checked=this.dataset.checked=='1';
    let colum=this.id;
    if(colum !== 'productName'){
        this.dataset.checked= Render.sortnumber(checked,colum);
    } else{
        this.dataset.checked= Render.sortLeter(checked,colum);
    }
    
}
function searchList(){
    let input=document.querySelector('input');
    let select=document.querySelector('select');
    switch (select.value) {
        case '1':
            Search.IdIterm(input.value,productList);            
            break;
        case '2':
            Search.ProductName(input.value,productList);
            
            break;
        case '3':
            Search.ActualPriceGreaterThan(input.value,productList);
            
            break;
        case '4':
            Search.ActualPriceLessThan(input.value,productList);
            
            break;
        case '5':
            Search.ActualPriceEqual(input.value,productList);
            
            break;
        case '6':
            Search.DiscountPriceGreaterThan(input.value,productList);
            
            break;
        case '7':
            Search.DiscountPriceLessThan(input.value,productList);
            
            break;
        case '8':
            Search.DiscountPriceEqual(input.value,productList);
            
            break;
        case '9':
            Search.StockAvailableGreaterThan(input.value,productList);
            
            break;
        case '10':
            Search.StockAvailableLessThan(input.value,productList);
            
            break;
        case '11':
            Search.StockAvailableEqual(input.value,productList);
            break;
    
        default:
            console.log('111111111111111111111');
            break;
    }  
}
function addEvent(){
    let colum=[...document.querySelectorAll('th')];
    let input=document.querySelector('input');
    let select=document.querySelector('select');
    colum.forEach(element => {
        element.addEventListener('click',sortList);
    });
    input.addEventListener('keyup',searchList);
    select.addEventListener('change',searchList );
}
function renderArrayTable(array){
    Render.renderHeaderTable(array);
    Render.renderBodyTable(array);
    
}
renderArrayTable(productList);
addEvent();

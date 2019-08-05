//Object constructor
function Item(title, desc, price, image, cat){
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.image = image;
    this.category = cat;

}


function saveItem(){
    //get data
    var title = $("#txtTitle").val();
    var desc = $("#txtDesc").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var cat = $("#selCategory").val();
    
   
    //create object

    var theItem = new Item(title, desc, price, image, cat)
    console.log(theItem)
    console.log("The Title: ", theItem.title);
    
    //save object to back end
}
function init(){
    console.log("Init Admin Page");
    //initializations

    //events
    $("#btnSave").click(saveItem);
}
window.onload = init;
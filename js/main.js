var MenuItems = document.getElementById("MenuItems")

MenuItems.style.maxHeight = "0px";

function menutoogle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px"
    }
    else
    {
        MenuItems.style.maxHeight = "0px"
    }
}

// var MenuItems = documnet.getdocumentbyId("MenuItems")

// MenuItems.style.maxHeight = "0px"

// function menutoogle(){
// if(Menuitems.style.maxheight =="0px")
//{
// Menuitems.style.maxheight = "200px"
// }
// else 
// {
//  MenuItems.style.maxHeight = "200px"
//}
// }
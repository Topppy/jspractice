function showPic (whichpic){
    var source= whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue=text ;

}
function prepareGallery() {
    if (!document.getElementsByTagName)  return false;
    if  (document.getElementById)  return false;
    //检查当前浏览器是否理解getElementsByTagName和getElementById。
    if (!document.getElementById("imagegallery"))  return false;
    //检查当前网页是否存在一个id为imagegallery的元素
    var  gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a ");


}




/*function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}
    window.onload =countBodyChildren;
    */
    
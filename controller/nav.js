/* $(function(){
    $("#navbar").load("navbar.html");
});
*/


 $.get("navbar.html", function(data){
     $("#navbar").replaceWith(data);
 });



//var ele=document.body.querySelector(".wrapper");
var ele=document.getElementById("wrapper");

//var list =["fire","ice","poison"]
var dragonDamage=0;
function dealDamage(damage,attack) {
    alert("Hello! I am an alert box!!" + attack + " " + damage);
    if (attack==="fire"){
        dragonDamage-=damage;

    }
    else if (attack==="ice"){
        dragonDamage+=damage;
    }
    ele.innerHTML="Dragon Damage: "+ dragonDamage;
}
document.getElementById("fire").addEventListener("click",function() {
    dealDamage(3, "fire");
    ele.innerHTML="Dragon Damage: "+ dragonDamage;

});
document.getElementById("ice").addEventListener("click",function() {
    dealDamage(1,"ice");
});

document.getElementById("poison").addEventListener("click",function() {
    dealDamage(4,"poison");
});

//document.body.querySelector(".fire").addEventListener("click",function() {
  //  dealDamage(3, "fire");
  //  ele.innerHTML="Dragon Damage: "+ dragonDamage;
//});
//document.body.querySelector(".ice").addEventListener("click",function() {
  //  dealDamage(1,"ice");
//});

//document.body.querySelector(".poison").addEventListener("click",function() {
  //  dealDamage(4,"poison");
//});


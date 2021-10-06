var ele=document.body.querySelector(".wrapper");

//var list =["fire","ice","poison"]
var dragonDamage=0;
function dealDamage(damage,attack) {
    if (attack==="fire"){
        dragonDamage-=damage;

    }
    else if (attack==="ice"){
        dragonDamage+=damage;
    }
    ele.innerHTML="Dragon Damage: "+ dragonDamage;
}

document.body.querySelector(".fire").addEventListener("click",function() {
    dealDamage(3, "fire");
});
document.body.querySelector(".ice").addEventListener("click",function() {
    dealDamage(1,"ice");
});

document.body.querySelector(".poison").addEventListener("click",function() {
    dealDamage(4,"poison");
});


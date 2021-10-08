var ele=document.body.querySelector(".wrapper");

var dragonDamage=0

function dealDamage(damage,attack) {
    if (attack === "fire") {
        dragonDamage -=1;
    } else if (attack === "ice") {
        dragonDamage += 1;
    } else if (attack === "poison") {
        dragonDamage = 4;
    }
    ele.innerHTML="Dragon Damage: "+ dragonDamage;

    if (dragonDamage >= 10) {
        ele.innerHTML = "YOU WON!!!!!"
    }
}

document.body.querySelector(".fire").addEventListener("click",function() {
    dealDamage(3,"fire")

    ele.innerHTML = "Dragon Damage: " +dragonDamage;
});

document.body.querySelector(".ice").addEventListener("click",function() {
    dealDamage(1,"ice");

});

document.body.querySelector(".poison").addEventListener("click",function() {
    dealDamage(4,"poison");


});


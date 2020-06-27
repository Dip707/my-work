let p1 = 0,
    p2 = 0;

document.querySelector('#p1').textContent = p1;
document.querySelector('#p2').textContent = p2;

function dice() {
    let x = Math.floor(Math.random() * 6 + 1);
    return x;
}



switch (document.querySelector('#roll_die').addEventListener('click', dice)) {
    case 1:
        document.querySelector('#die_image1').style.display = 'block';
        document.querySelector('#die_image1').innerHTML = '<img id="die_image" src="./Images/dice-1.png" alt="">';
        break;
    case 2:
        document.querySelector('#die_image1').style.display = 'block';
        document.querySelector('#die_image1').innerHTML = '<img id="die_image" src="./Images/dice-2.png" alt="">';
        break;
    case 3:
        document.querySelector('#die_image1').style.display = 'block';
        document.querySelector('#die_image1').innerHTML = '<img id="die_image" src="./Images/dice-3.png" alt="">';
        break;
    case 4:
        document.querySelector('#die_image1').style.display = 'block';
        document.querySelector('#die_image1').innerHTML = '<img id="die_image" src="./Images/dice-4.png" alt="">';
        break;
    case 5:
        document.querySelector('#die_image1').style.display = 'block';
        document.querySelector('#die_image1').innerHTML = '<img id="die_image" src="./Images/dice-5.png" alt="">';
        break;
    case 6:
        document.querySelector('#die_image1').style.display = 'block';
        document.querySelector('#die_image1').innerHTML = '<img id="die_image" src="./Images/dice-6.png" alt="">';
        break;

}

console.log(document.querySelector('#roll_die').addeventlistener('click', dice));
{ //hamburger menu
    function openMenu() {

        document.getElementById('menu_page').style.animation = "scale-in-tr 0.2s 1";
        document.getElementById('menu_page').style.display = "flex";
    }

    function crossBtn() {
        document.getElementById('menu_page').style.animation = "scale-in-tr-r 0.2s 1";
        setTimeout(closeMenu, 200);

    }

    function closeMenu() {

        document.getElementById('menu_page').style.display = "none";
    }
}

{
    //navbar change on scrolling
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30
        ) {
            document.getElementById("nav").style.height = "4.5em";
            document.getElementById("nav").style.backgroundColor = "#3d00cf";
            document.getElementById("logon").style.height = "3.7em";
            document.getElementById("nav_aboutMe").style.height = "2.3em";
            document.getElementById("nav_projects").style.height = "2.3em";
            document.getElementById("nav_sayHello").style.height = "2.3em";

            // document.getElementById('').style.height = "2.3em";
        } else {
            document.getElementById("nav").style.height = "5em";
            document.getElementById("logon").style.height = "3.5em";
            document.getElementById("nav").style.backgroundColor = "#4a01f3";
            document.getElementById("nav_aboutMe").style.height = "2.6em";
            document.getElementById("nav_projects").style.height = "2.6em";
            document.getElementById("nav_sayHello").style.height = "2.6em";

        }

        if (
            document.body.scrollTop > 400 ||
            document.documentElement.scrollTop > 400
        ) {
            document.getElementById('heading').innerHTML = "Dip Turkar";
            document.getElementById("gotop").style.display = "flex";
        } else {
            document.getElementById('heading').innerHTML = "";
            document.getElementById("gotop").style.display = "none";
        }
    }
}

{
    //creating tabs --myTechnique
    function tabFunction(index, id) {
        let aboutItem = document.getElementsByClassName("about_item");
        let aboutDetail = document.getElementsByClassName("about_detail");
        for (let i = 0; i < aboutDetail.length; i++) {
            aboutDetail[i].style.display = "none";
            aboutItem[i].removeAttribute("style");
        }
        //
        aboutDetail[index].style.display = "block";
        styler = document.getElementById(id).style;
        styler.color = "#B3ff00";
        //

        function myFunction(x) {
            if (x.matches) {
                // If media query matches
                document.getElementById("about_bio").style.borderTop = "none";
                styler.borderTop = "0.19em solid #B3ff00";
            } else {
                document.getElementById("about_bio").style.borderLeft = "none";
                styler.borderLeft = "0.19em solid #B3ff00";
            }
        }

        var x = window.matchMedia("(max-width: 1000px)");
        myFunction(x);
        x.addListener(myFunction);
    }
}



// { //copy whatsapp number
//     function copyWhatsapp() {
//         let number = "6377037591";
//         document.execCommand("copy");

//     }
// }

// console.log(x);
{ //navbar change on scrolling
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('nav').style.height = "4.5em";
            document.getElementById('nav').style.backgroundColor = "#3d00cf";
            document.getElementById('logon').style.height = "3.5em";
            document.getElementById('nav_aboutMe').style.height = "2.3em";
            document.getElementById('nav_projects').style.height = "2.3em";
            document.getElementById('nav_sayHello').style.height = "2.3em";
            // document.getElementById('').style.height = "2.3em";

        } else {
            document.getElementById('nav').style.height = "5em";
            document.getElementById('logon').style.height = "4em";
            document.getElementById('nav').style.backgroundColor = "#4a01f3";
            document.getElementById('nav_aboutMe').style.height = "2.6em";
            document.getElementById('nav_projects').style.height = "2.6em";
            document.getElementById('nav_sayHello').style.height = "2.6em";

        }
    }
}

{ //creating tabs --myTechnique
    function tabFunction(index, id) {
        let aboutItem = document.getElementsByClassName('about_item');
        let aboutDetail = document.getElementsByClassName('about_detail');

        for (let i = 0; i < aboutDetail.length; i++) {
            aboutDetail[i].style.display = "none";
            aboutItem[i].removeAttribute("style");


        }
        aboutDetail[index].style.display = "block";
        styler = document.getElementById(id).style;
        styler.color = "#B3ff00";
        styler.borderLeft = "0.19em solid #B3ff00"



        // aboutItem[index].style. = "2px";


    }


}





// console.log(x);
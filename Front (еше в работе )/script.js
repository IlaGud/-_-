function changeClass() {
    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");

    if (element1.classList.contains("element1")) {
        element1.classList.remove("element1");
        element1.classList.add("element2");
    } else if (element1.classList.contains("element2")) {
        element1.classList.remove("element2");
        element1.classList.add("element3");
    } else {
        element1.classList.remove("element3");
        element1.classList.add("element1");
    }
    
    if (element2.classList.contains("element1")) {
        element2.classList.remove("element1");
        element2.classList.add("element2");
    } else if (element2.classList.contains("element2")) {
        element2.classList.remove("element2");
        element2.classList.add("element3");
    } else {
        element2.classList.remove("element3");
        element2.classList.add("element1");
    }

    if (element3.classList.contains("element1")) {
        element3.classList.remove("element1");
        element3.classList.add("element2");
    } else if (element3.classList.contains("element2")) {
        element3.classList.remove("element2");
        element3.classList.add("element3");
    } else {
        element3.classList.remove("element3");
        element3.classList.add("element1");
    }
}


function info() {
    var element4 = document.getElementById("NIE");
    var element5 = document.getElementById("IE");
    var element6 = document.getElementById("IEE");
    var element7 = document.getElementById("SNIE");

    if (element4.classList.contains("none")) {
        element4.classList.remove("none");
        element4.classList.add("infoE");
    } else if (element4.classList.contains("infoE")) {
        element4.classList.remove("infoE");
        element4.classList.add("none");
    }
    if (element7.classList.contains("none")) {
        element7.classList.remove("none");
        element7.classList.add("infoE");
    } else if (element7.classList.contains("infoE")) {
        element7.classList.remove("infoE");
        element7.classList.add("none");
    }

    
    if (element5.classList.contains("noneE")) {
        element5.classList.remove("noneE");
        element5.classList.add("EIE");
    } else if (element5.classList.contains("EIE")) {
        element5.classList.remove("EIE");
        element5.classList.add("noneE");
    }


    if (element6.classList.contains("IEhid")) {
        element6.classList.remove("IEhid");
        element6.classList.add("nnn");
    } else if (element6.classList.contains("nnn")) {
        element6.classList.remove("nnn");
        element6.classList.add("IEhid");
    }
}


function infoS() {
    var element4 = document.getElementById("NIE");
    var element7 = document.getElementById("SNIE");
    var element5 = document.getElementById("IE");
    var element8 = document.getElementById("ISS");


    if (element5.classList.contains("noneE")) {
        element5.classList.remove("noneE");
        element5.classList.add("infoE");
    } else if (element5.classList.contains("infoE")) {
        element5.classList.remove("infoE");
        element5.classList.add("noneE");
    }
    if (element4.classList.contains("none")) {
        element4.classList.remove("none");
        element4.classList.add("infoE");
    } else if (element4.classList.contains("infoE")) {
        element4.classList.remove("infoE");
        element4.classList.add("none");
    }

    if (element7.classList.contains("none")) {
        element7.classList.remove("none");
        element7.classList.add("infoE");
    } else if (element7.classList.contains("infoE")) {
        element7.classList.remove("infoE");
        element7.classList.add("none");
    }

    if (element8.classList.contains("IShid")) {
        element8.classList.remove("IShid");
        element8.classList.add("nnn");
    } else if (element8.classList.contains("nnn")) {
        element8.classList.remove("nnn");
        element8.classList.add("IShid");
    }



}
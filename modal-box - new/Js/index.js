    // HEADER-HATS----------------------------------------

    var header2 = document.getElementById("hat");
    if (header2) {
        var btns = header2.getElementsByClassName("hats-count");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }

    // FOOTER-MOBILE----------------------------------------

    var header1 = document.getElementById("hats1");
    if (header1) {
        var btns = header1.getElementsByClassName("hats-count1");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active1");
                current[0].className = current[0].className.replace(" active1", "");
                this.className += " active1";
            });
        }
    }

    // REFRESH----------------------------------------
    const element = document.getElementById("r");
    if (element) {
        element.addEventListener("click", myFunction);

        function myFunction() {
            var element = document.getElementById("r");
            element.classList.toggle("refresh");
        }
    }

    const elements = document.getElementsByClassName("choose-star");
    if (elements) {
        elements.addEventListener("click", myFunction1);

        function myFunction1() {
            var element1 = this;
            element1.classList.toggle("choose-star-border");
        }
    }
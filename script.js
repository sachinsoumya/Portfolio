function validateForm() {
    let x = document.forms["myForm"]["name"].value
    let y = document.forms["myForm"]["mail"].value
    let z = document.forms["myForm"]["phone"].value
    let a = document.forms["myForm"]["message"].value

    // console.log(x);

    if (x == "" && y == "" && z == "" && a == "") {

        // let e1 = document.querySelector(".one");
        // e1.classList.add('invalid-feedback ');
        // e1.innerHTML = "Please fill out the field";
        // let e2 = document.querySelector(".two");
        // e2.classList.add('invalid-feedback ');
        // e2.innerHTML = "Please fill out the field";
        // let e3 = document.querySelector(".three");
        // e3.classList.add('invalid-feedback ');
        // e3.innerHTML = "Please fill out the field";
        // let e4 = document.querySelector(".four");
        // e4.classList.add('invalid-feedback ');
        // e4.innerHTML = "Please fill out the field";

        document.querySelector(".one").innerHTML = "Please fill out the field";
        document.querySelector(".two").innerHTML = "Please fill out the field";
        document.querySelector(".three").innerHTML = "Please fill out the field";
        document.querySelector(".four").innerHTML = "Please fill out the field";
        return false;

    } else {
        if (x == "") {
            document.querySelector(".one").innerHTML = "Please fill out the field";
            return false;
        } else if (y == "") {
            document.querySelector(".two").innerHTML = "Please fill out the field";
            return false;
        } else if (z == "") {
            document.querySelector(".three").innerHTML = "Please fill out the field";
            return false;
        } else if (a == "") {
            document.querySelector(".four").innerHTML = "Please fill out the field";
            return false;
        }
    }

}
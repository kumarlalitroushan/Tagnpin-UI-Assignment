
const rect = document.querySelectorAll('.rectangle');
const compt = document.querySelectorAll('.compt');
const trust = document.querySelectorAll('.trust');
const cust = document.querySelectorAll('.cust');
const output1=document.querySelector('.output1')
const output2=document.querySelector('.output2')
const output3=document.querySelector('.output3')
const output4=document.querySelector('.output4')


for (x = 0; x < rect.length; x++) {
    rect[x].rectValue = (x + 1);
    ["click", "mouseover", "mouseout"].forEach(function (e) {
        rect[x].addEventListener(e, showRating);
    })
}
function showRating(e) {
    let type = e.type;
    let rectValue = this.rectValue;
    
    if(type ==='click'){
        if(rectValue > 1){
            output1.innerHTML="you rated "+ rectValue;
            console.log('Responsiveness - ' + rectValue);
        }
    }
    rect.forEach(function (elem, ind) {
        if (type === 'click') {
            if (ind < rectValue) {
                elem.classList.add("green");
            } else {
                elem.classList.remove("green");
            }
        }

        if (type === 'mouseover') {
            if (ind < rectValue) {
                elem.classList.add("lightgreen");
            } else {
                elem.classList.remove("lightgreen");
            }
        }

        if (type === 'mouseout') {
            elem.classList.remove("lightgreen");
        }
    })

}

// Compt Value
for (x = 0; x < compt.length; x++) {
    compt[x].comptValue = (x + 1);
    ["click", "mouseover", "mouseout"].forEach(function (e) {
        compt[x].addEventListener(e, showRating2);
    })
}
function showRating2(e) {
    let type = e.type;
    //console.log(type);
    let comptValue = this.comptValue;
  
    if(type ==='click'){
        if(comptValue > 1){
            output2.innerHTML="you rated "+ comptValue;
            console.log('Competency - ' + comptValue);
        }
    }

    compt.forEach(function (elem, ind) {
        if (type === 'click') {
            if (ind < comptValue) {
                elem.classList.add("red");
            } else {
                elem.classList.remove("red");
            }
        }

        if (type === 'mouseover') {
            if (ind < comptValue) {
                elem.classList.add("lightred");
            } else {
                elem.classList.remove("lightred");
            }
        }

        if (type === 'mouseout') {
            elem.classList.remove("lightred");
        }
    })

}

//trust

for (x = 0; x < trust.length; x++) {
    trust[x].trustValue = (x + 1);
    ["click", "mouseover", "mouseout"].forEach(function (e) {
        trust[x].addEventListener(e, showRating3);
    })
}
function showRating3(e) {
    let type = e.type;
    let trustValue = this.trustValue;

    if(type ==='click'){
        if(trustValue > 1){
            output3.innerHTML="you rated "+ trustValue;
            console.log('TrustWorthiness - ' + trustValue);
        }
    }

    trust.forEach(function (elem, ind) {
        if (type === 'click') {
            if (ind < trustValue) {
                elem.classList.add("green");
            } else {
                elem.classList.remove("green");
            }
        }

        if (type === 'mouseover') {
            if (ind < trustValue) {
                elem.classList.add("lightgreen");
            } else {
                elem.classList.remove("lightgreen");
            }
        }

        if (type === 'mouseout') {
            elem.classList.remove("lightgreen");
        }
    })

}

//cust


for (x = 0; x < cust.length; x++) {
    cust[x].custValue = (x + 1);
    ["click", "mouseover", "mouseout"].forEach(function (e) {
        cust[x].addEventListener(e, showRating4);
    })
}
function showRating4(e) {
    let type = e.type;
    let custValue = this.custValue;

    if(type ==='click'){
        if(custValue > 1){
            output4.innerHTML="you rated "+ custValue;
            console.log('Customer service and support - ' +custValue);
            
        }
    }

    cust.forEach(function (elem, ind) {
        if (type === 'click') {
            if (ind < custValue) {
                elem.classList.add("red");
            } else{
                elem.classList.remove("red");
            }
        }

        if (type === 'mouseover') {
            if (ind < custValue) {
                elem.classList.add("lightred");
            } else {
                elem.classList.remove("lightred");
            }
        }

        if (type === 'mouseout') {
            elem.classList.remove("lightred");
        }
    })

}


let citiesCountries = {
    Iran:['Iran City 1','Iran City 2','Iran City 3'],
    USA:['USA City 1','USA City 2','USA City 3'],
    Canada:['Canada City 1','Canada City 2','Canada City 3'],
    Turkey:['Turkey City 1','Turkey City 2','Turkey City 3']
}

let countriesSelectBox = document.querySelector('.countries');
let citiesSelectBox = document.querySelector('.cities')

countriesSelectBox.addEventListener('change',function(){
    if(countriesSelectBox.value==="Select Country") {
        citiesSelectBox.innerHTML='';
        citiesSelectBox.innerHTML += '<option>Select City</option>'
    } else {
        let countriesSelectName=countriesSelectBox.value;
        let citiesSelectName=citiesCountries[countriesSelectName];
        citiesSelectBox.innerHTML='';
        citiesSelectName.forEach(function(city){
        citiesSelectBox.innerHTML += '<option>'+city+'</option>'
        })
    }
})
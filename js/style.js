"use strict";
const price = {
    copy: {
        a4black: 5,
        a4color: 12,
        a3black: 10,
        a3color: 24
    },
    photo: {
        photo10x15: [10, 8, 7],
        photo13x18: [20, 15, 10],
        photo15x21: [25, 20, 15],
        photo21x30: [35, 30, 25]
    },
    other: {
        lamination: 40,
        laminationA3: 70
    }
}
const input = document.querySelectorAll('.inp');

input.forEach(item => {
    item.addEventListener('input', () => {
        console.log('Hi');
        const other = +document.querySelector('.other__price').value,
            copyA4Black = resultPrice('.copy__a4black', price.copy.a4black),
            copyA4Color = resultPrice('.copy__a4color', price.copy.a4color),
            copyA3Black = resultPrice('.copy__a3black', price.copy.a3black),
            copyA3Color = resultPrice('.copy__a3color', price.copy.a3color),
            photo10x15 = resultPricePhoto('.photo__10x15', price.photo.photo10x15),
            photo13x18 = resultPricePhoto('.photo__13x18', price.photo.photo13x18),
            photo15x21 = resultPricePhoto('.photo__15x21', price.photo.photo15x21),
            photo21x30 = resultPricePhoto('.photo__21x30', price.photo.photo21x30),
            lamination = resultPrice('.other__lamination', price.other.lamination),
            laminationA3 = resultPrice('.other__lamination-a3', price.other.laminationA3),
            costCopies = copyA4Black + copyA4Color + copyA3Black + copyA3Color,
            costPhotos = photo10x15 + photo13x18 + photo15x21 + photo21x30;
            document.querySelector('.price').innerHTML = other + costCopies + costPhotos + lamination +laminationA3;
    });
       
});

function resultPricePhoto (nameClass, price) {
    const value = +document.querySelector(nameClass).value;
    let pricePhoto = quantityPhoto(value, price);
    console.log(value);
    return pricePhoto;
}

function resultPrice (nameClass, price) {
    const value = +document.querySelector(nameClass).value;
    let priceOther = calculator(value, price);
    console.log(priceOther);
    return priceOther;
    
}

function calculator (inputValue, inpPrice) {
    return inputValue * inpPrice;
}

function quantityPhoto (photo, pricePhoto) {
    let pricePh = 0;
    if (photo < 100) {
        pricePh = photo * pricePhoto[0];
    } else if (photo > 99 && photo < 300) {
        pricePh = photo * pricePhoto[1];
    } else {
        pricePh = photo * pricePhoto[2];
    }

    return pricePh;
}
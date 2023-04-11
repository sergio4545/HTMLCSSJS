"use strict";
const price = {
    copy: {
        a4black: 5,
        a4color: 12,
        a3black: 10,
        a3clor: 24
    },
    photo: {
        photo10x15: [10, 8, 7],
        photo13x18: [20, 15, 10],
        photo15x21: [25, 20, 15],
        photo21x30: [35, 30, 25]
    },
    other: {
        lamination: [40, 70]
    }
}
let priceSpan = +document.querySelector('.price').textContent;

document.querySelector('.copy__a4black').addEventListener('input', () => {
    const value = +document.querySelector('.copy__a4black').value;
    let valueCopyA4Black = calculator(value, price.copy.a4black);
    document.querySelector('.price').innerHTML = valueCopyA4Black;
});

document.querySelector('.copy__a4color').addEventListener('input', () => {
    //const priceSpan = +document.querySelector('.price').textContent;
    const value = +document.querySelector('.copy__a4color').value;
    let valueCopyA4Color = calculator(value, price.copy.a4color);
    document.querySelector('.price').innerHTML = valueCopyA4Color + priceSpan;
});

document.querySelector('.photo__10x15').addEventListener('input', () => {
    //const priceSpan = +document.querySelector('.price').textContent;
    const value = +document.querySelector('.photo__10x15').value;
    console.log(value);
    let valueCopyA4Color = quantityPhoto(value, price.photo.photo10x15);
    document.querySelector('.price').innerHTML = valueCopyA4Color;
});


function calculator (inputValue, inpPrice) {
    //const priceSpan = +document.querySelector('.price').textContent;
    return inputValue * inpPrice;
}

function quantityPhoto (photo, pricePhoto) {
    console.log(photo);
    console.log(pricePhoto[0]);
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
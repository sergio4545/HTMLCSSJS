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

const copyInput = document.querySelectorAll();

function calculator (inputValue, inpPrice) {
    return inputValue * inpPrice;
}

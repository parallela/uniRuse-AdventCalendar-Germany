const mode = 'prod';

document.getElementById(`bg-task`).addEventListener("click", hide);
// Set the volume of the music to 0.2
const bgmusic = document.getElementById('backgroundAudio');
bgmusic.volume = 0.2

setTimeout(() => {
    $("#info").modal('toggle');
}, 2000);


/*
 * ES5 imports
 */
const mammoth = require("mammoth");
const path = require('path');
const fs = require('fs');


function getImagesByDate(day) {
    document.getElementById(`images-show${day}`).innerHTML = '';
    let directoryPath = path.join(__dirname, `/vendor/img/dates/${day}/`);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return alert('Проблем с четенето на системните файлове!');
        }
        files.forEach(function (file) {
            // Взимаме всичко файлове с даден extension
            if (path.extname(file) == ".jpg" || path.extname(file) == ".png" || path.extname(file) == ".jpeg") {
                document.getElementById(`images-show${day}`).innerHTML += `
                <div class="col-sm mt-2 mb-2">
                    <a data-fancybox="gallery" href="vendor/img/dates/${day}/${path.basename(file)}">
                        <img class="img_v" src="vendor/img/dates/${day}/${path.basename(file)}">
                    </a>
                </div>
                `
            }
            ;
        });
    });

}


const notOpenMsg = " Все още не може да отворите тази дата 🍫🎅🏼";
const year = mode === "dev" ? 2000 : new Date().getFullYear();

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y", "z"];

function hide() {
    document.getElementById(`bg-task`).style.display = "none";
    $(`#bg-task > div`).hide();
}


function greetings(day) {
    mammoth.convertToHtml({path: __dirname + `/vendor/img/dates/${day}/${day}.docx`})
        .then(result => {
            document.getElementById(`pojelanie${day}`).innerHTML = result.value;
        })
        .done();
}

function openAudio() {
    const openAudio = document.getElementById('openAudio');
    openAudio.play();
}

function setupModals() {
    document.getElementById('bg-task').innerHTML = '';
    alphabet.forEach((val, key) => {
        document.getElementById('bg-task').innerHTML +=
            `
        <div id="${val}" style="display: none">
            <div class="row" id="images-show${key + 1}">
            </div>
            <div class="d-flex justify-content-center text-center mt-2 mb-2">
                <p class="greetings" id="pojelanie${key + 1}"> </p>
            </div>
        </div>
            `;
    });
}

setupModals();

document.getElementById(`1`).addEventListener(`click`, a);

function a() {
    let GivenDate = `${year}-12-01`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`a`).style.display = "block";
    }
    greetings(1);
    getImagesByDate(1);
    openAudio();
}


document.getElementById(`2`).addEventListener(`click`, b);

function b() {
    let GivenDate = `${year}-12-02`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`b`).style.display = "block";
    }
    greetings(2);
    getImagesByDate(2);
    openAudio();
}

document.getElementById(`3`).addEventListener(`click`, c);

function c() {
    let GivenDate = `${year}-12-03`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`c`).style.display = "block";
    }

    greetings(3);
    getImagesByDate(3)
    openAudio();
}

document.getElementById(`4`).addEventListener(`click`, d);

function d() {
    let GivenDate = `${year}-12-04`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`d`).style.display = "block";
    }

    greetings(4);
    getImagesByDate(4)
    openAudio()
}

document.getElementById(`5`).addEventListener(`click`, e);

function e() {
    let GivenDate = `${year}-12-05`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`e`).style.display = "block";
    }

    greetings(5);
    getImagesByDate(5)
    openAudio()
}

document.getElementById(`6`).addEventListener(`click`, f);

function f() {
    let GivenDate = `${year}-12-06`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`f`).style.display = "block";
    }

    greetings(6);
    getImagesByDate(6)
    openAudio()
}

document.getElementById(`7`).addEventListener(`click`, g);

function g() {
    let GivenDate = `${year}-12-07`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`g`).style.display = "block";
    }
    greetings(7)
    getImagesByDate(7)
    openAudio()
}

document.getElementById(`8`).addEventListener(`click`, h);

function h() {
    let GivenDate = `${year}-12-08`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`h`).style.display = "block";
    }
    greetings(8)
    getImagesByDate(8)
    openAudio()
}

document.getElementById(`9`).addEventListener(`click`, i);

function i() {
    let GivenDate = `${year}-12-09`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`i`).style.display = "block";
    }

    greetings(9)
    getImagesByDate(9)
    openAudio();
}

document.getElementById(`10`).addEventListener(`click`, j);

function j() {
    let GivenDate = `${year}-12-10`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`j`).style.display = "block";
    }

    greetings(10)
    getImagesByDate(10)
    openAudio();
}

document.getElementById(`11`).addEventListener(`click`, k);

function k() {
    let GivenDate = `${year}-12-11`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`k`).style.display = "block";
    }

    greetings(11)
    getImagesByDate(11)
    openAudio();
}

document.getElementById(`12`).addEventListener(`click`, l);

function l() {
    let GivenDate = `${year}-12-12`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`l`).style.display = "block";
    }

    greetings(12)
    getImagesByDate(12)
    openAudio();
}

document.getElementById(`13`).addEventListener(`click`, m);

function m() {
    let GivenDate = `${year}-12-13`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`m`).style.display = "block";
    }

    greetings(13)
    getImagesByDate(13)
    openAudio();
}

document.getElementById(`14`).addEventListener(`click`, n);

function n() {
    let GivenDate = `${year}-12-14`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`n`).style.display = "block";
    }

    greetings(14)
    getImagesByDate(14)
    openAudio();
}

document.getElementById(`15`).addEventListener(`click`, o);

function o() {
    let GivenDate = `${year}-12-15`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`o`).style.display = "block";
    }
    openAudio();
    greetings(15)
    getImagesByDate(15)
}

document.getElementById(`16`).addEventListener(`click`, p);

function p() {
    let GivenDate = `${year}-12-16`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`p`).style.display = "block";
    }
    openAudio();
    greetings(16)
    getImagesByDate(16)
}

document.getElementById(`17`).addEventListener(`click`, r);

function r() {
    let GivenDate = `${year}-12-17`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`r`).style.display = "block";
    }
    openAudio();
    greetings(17)
    getImagesByDate(17)
}

document.getElementById(`18`).addEventListener(`click`, s);

function s() {
    let GivenDate = `${year}-12-18`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`s`).style.display = "block";
    }
    openAudio();
    greetings(18)
    getImagesByDate(18)
}

document.getElementById(`19`).addEventListener(`click`, t);

function t() {
    let GivenDate = `${year}-12-19`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`t`).style.display = "block";
    }
    openAudio();
    greetings(19)
    getImagesByDate(19)
}

document.getElementById(`20`).addEventListener(`click`, u);

function u() {
    let GivenDate = `${year}-12-20`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`u`).style.display = "block";
    }
    openAudio();
    greetings(20)
    getImagesByDate(20)
}

document.getElementById(`21`).addEventListener(`click`, w);

function w() {
    let GivenDate = `${year}-12-21`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`w`).style.display = "block";
    }
    openAudio();
    greetings(21)
    getImagesByDate(21)
}

document.getElementById(`22`).addEventListener(`click`, x);

function x() {
    let GivenDate = `${year}-12-22`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`x`).style.display = "block";
    }
    openAudio();
    greetings(22)
    getImagesByDate(22)
}

document.getElementById(`23`).addEventListener(`click`, y);

function y() {
    let GivenDate = `${year}-12-23`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`y`).style.display = "block";
    }
    openAudio();
    greetings(23)
    getImagesByDate(23)
}

document.getElementById(`24`).addEventListener(`click`, z);

function z() {
    let GivenDate = `${year}-12-24`;
    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(`z`).style.display = "block";
    }
    openAudio();
    greetings(24)
    getImagesByDate(24)
}

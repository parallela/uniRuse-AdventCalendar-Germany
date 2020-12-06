/*
 * This software is under the MIT license.
 * Creators: Lubomir Stankov
 * For: University Of Ruse "Angel Kanchev"
 *
 * Website links:
 * UR "Angel Kanchev": www.uni-ruse.bg
 * Lubomir Stankov Personal Website: www.lstankov.me
 *
 */


/*
 * ES5 imports
 */
const mammoth = require("mammoth");
const path = require('path');
const fs = require('fs');

// Program development mode.
const mode = require(__dirname+'/config/app');

if (mode == "dev") {
    alert(
        `
       Програмата е стартирана в "development" режим.
       Всички дати са отворени. 
        `
    );
}


// Setup the main UI effects
function setupUI() {
    document.getElementById(`bg-task`).addEventListener("click", hide);
    // Set the volume of the music to 0.2
    const bgmusic = document.getElementById('backgroundAudio');
    bgmusic.volume = 0.2

    setTimeout(() => {
        $("#info").modal('toggle');
    }, 2000);
}

// Static variables
const notOpenMsg = " Все още не може да отворите тази дата 🍫🎅🏼";
const year = mode === "dev" ? 2000 : new Date().getFullYear();

// We need uniques id's for every modal.
// So i choose to be the english alphabet.
// Every modal have id from A-Z
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y", "z"];

// Hide the tasks on click.
function hide() {
    document.getElementById(`bg-task`).style.display = "none";
    $(`#bg-task > div`).hide();
}

// Get the images by given day.
// It's scan directory for the current day, and show all of the images in there.
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

// Setup the click events
function setupClickEvents() {
    const boxes = dates.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", () => openDay(alphabet[i], i + 1));
    }
}

// Get the file with greeting according to day.
// We use mammoth library to get the content from docx files.
// Every directory is named with the number from the calender.
function greetings(day) {
    mammoth.convertToHtml({path: __dirname + `/vendor/img/dates/${day}/${day}.docx`})
        .then(result => {
            document.getElementById(`pojelanie${day}`).innerHTML = result.value;
        })
        .done();
}

//Open sound effect
function openAudio() {
    const openAudio = document.getElementById('openAudio');
    openAudio.play();
}

// Setup all of the modals for the greeting.
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

// Open the modal for the current day
function openDay(char, day) {
    console.log(day);
    let GivenDate = `${year}-12-${day}`;

    let CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        alert(notOpenMsg);
    } else {
        openAudio();
        greetings(day);
        getImagesByDate(day);

        document.getElementById(`bg-task`).style.display = "block";
        document.getElementById(char).style.display = "block";
    }
}


// Run the app
setupUI();
setupClickEvents();
setupModals();

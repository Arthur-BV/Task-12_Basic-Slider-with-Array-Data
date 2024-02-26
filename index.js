const images = [
    "./images/01.jpg",
    "./images/02.jpg",
    "./images/03.jpg",
    "./images/04.jpg",
    "./images/05.jpg",
    "./images/06.jpg",
    "./images/07.jpg",
];
const slides_count = 7;

const change = function () {
    const display = document.getElementById(arguments[0]);
    const direction = arguments[1];
    let current = display.src;
    let filename = current.substring(
        current.lastIndexOf("/") + 1,
        current.lastIndexOf(".")
    );

    if (direction === "next") {
        if (parseInt(filename) === slides_count) {
            filename = "01";
        } else {
            filename = (parseInt(filename) + 1).toString().padStart(2, "0");
        }
    }

    if (direction === "prev") {
        if (parseInt(filename) === 1) {
            filename = slides_count.toString().padStart(2, "0");
        } else {
            filename = (parseInt(filename) - 1).toString().padStart(2, "0");
        }
    }

    let next_file = "/images/" + filename + ".jpg";

    display.src = next_file;
    // console.log(current);
    // console.log(next_file);
};

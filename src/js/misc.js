const select = document.getElementById('colorSelect');

function applyFilter(color) {
    const elements = document.querySelectorAll(
        '.a, .b, .c, .d, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .p, .q, .r, .s, .t, .u, .v, .w, .x, .y, .z'
    );


    let filter;
    switch (color) {
        case "green":
            filter = "grayscale(100%) brightness(100%) sepia(100%) hue-rotate(90deg) saturate(800%)";
            break;
        case "blue":
            filter = "grayscale(100%) brightness(100%) sepia(100%) hue-rotate(200deg) saturate(500%)";
            break;
        case "yellow":
            filter = "grayscale(100%) brightness(100%) sepia(100%) hue-rotate(0deg) saturate(500%)";
            break;
    }

    elements.forEach(el => {
        el.style.filter = filter;
    });
}

applyFilter(select.value);

select.addEventListener("change", () => applyFilter(select.value));

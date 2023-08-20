const slider = document.getElementById("slider");

const slide = document.querySelector(".slide");

var index = 0;

const prev = document.getElementById("previous-slide");
const next = document.getElementById("next-slide");

next.onclick = function()
{
    var width = slide.clientWidth;

    switch(index)
    {
        case 2:
            slider.scrollLeft -= 3 * width;
            index = 0;
            break;

        default:
            slider.scrollLeft += width;
            index += 1;
            break;
    }
};

prev.onclick = function()
{
    var width = slide.clientWidth;

    switch(index)
    {
        case 0:
            slider.scrollLeft += 3 * width;
            index = 2;
            break;

        default:
            slider.scrollLeft -= width;
            index -= 1;
            break;
    }
};

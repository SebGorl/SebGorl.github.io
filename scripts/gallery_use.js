document.getElementById('gallery-button').onclick = function()
{
    const container = document.getElementById("container");
    const fadeout = document.getElementById('fadeout');
                            
    if (fadeout.style.display !== 'none')
    {
        fadeout.style.display = 'none';
        container.style.height = 'auto';
        document.getElementById('gallery-button').innerText = 'Zwiń ↑';
    }
    else
    {
        container.style.height = '';
        fadeout.style.display = 'block';
        document.getElementById('gallery-button').innerText = 'Rozwiń ↓';
    }
};
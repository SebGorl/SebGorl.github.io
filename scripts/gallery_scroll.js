document.getElementById("intro-gallery").onclick = function()
{
    const projects = document.getElementById("projects");

    projects.scrollIntoView({behavior: "smooth"});
};
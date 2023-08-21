const button = document.getElementById("gallery-button");
const projects = document.getElementById("projects");
const article = document.getElementById("projects-article");
const container = document.getElementById("container");
const fadeout = document.getElementById("fadeout");

const expandContainer = () => 
{
    container.style.transition = "height 0.5s ease";
    container.style.height = container.scrollHeight + "px";
    fadeout.style.display = "none";
};

const collapseContainer = () => 
{
    container.style.transition = "height 0.5s ease";
    container.style.height = "700px";
    fadeout.style.display = "block";
};

button.onclick = function() 
{
    if (container.style.height === "" || container.style.height === "700px") 
    {
        expandContainer();
        this.innerText = "Zwiń ↑";
    } 
    else 
    {
        collapseContainer();
        article.scrollIntoView({ behavior: "smooth"});
        this.innerText = "Rozwiń ↓";
    }
};
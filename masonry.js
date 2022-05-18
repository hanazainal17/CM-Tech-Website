import Masonry from "masonry-layout";

//when the content loads
window.onload = () => {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid)

};
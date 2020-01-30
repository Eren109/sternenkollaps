let preload = () => {

    const blocks = document.querySelectorAll(".preloader .blocks .block");
    let interval = 0;
    blocks.forEach((block, i) => {
        setTimeout(() => {
            animate(block, i);
        }, interval);
        interval += 500;
    });

    function animate(block, index) {
        let position = index;
        setInterval(() => {
            switch (position) {
                case 0:
                    block.style.top = "40px";
                    position = 3;
                    break;
                case 1:
                    block.style.left = "40px";
                    position = 0;
                    break;
                case 2:
                    block.style.top = "0px";
                    position = 1;
                    break;
                case 3:
                    block.style.left = "0px";
                    position = 2;
                    break;
            }
        }, 1500);
    }








}

let mergeElements = () => {
    // first step of animation (duration 1s)
    let leftElements = document.querySelectorAll(".elems-left");
    leftElements.forEach((element, i) => {
        element.classList.replace("elems-left", "elems-right")
        element.classList.replace("element-h", "element-he")
    });

    // second step of animation
    setTimeout(() => {
        let leftElements = document.querySelectorAll(".elems-row2");
        leftElements.forEach((element, i) => {
            element.classList.replace("elems-row2", "elems-row1")
            element.classList.replace("element-h", "element-li")
        });
    }, 1500);

    // more stuff ...
}
document.getElementById("implosionx").addEventListener("click", mergeElements);

setTimeout(() => {
    preload();
}, 1000);
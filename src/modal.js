const isSP = window.ontouchstart !== undefined && 0 < navigator.maxTouchPoints;
export function modalTrigger() {
    let elements = document.getElementsByClassName("modalTrigger");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (isSP) {
            element.addEventListener("touchend", (e) => {
                if (document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) === element) {
                    e.preventDefault();
                    location.hash = element.getAttribute("href");
                }
            }, false);
        } else {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                location.hash = element.getAttribute("href");
            }, false);
        }
    }
}

export function modalClose() {
    let elements = document.getElementsByClassName("modalClose");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (isSP) {
            element.addEventListener("touchend", (e) => {
                if (document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) === element) {
                    e.preventDefault();
                    history.go(-1);

                }
            }, false);
        } else {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                history.go(-1);
            }, false);
        }
    }
}
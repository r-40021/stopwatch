const isSP = window.ontouchstart !== undefined && 0 < navigator.maxTouchPoints;
export function modalTrigger() {
    let elements = document.getElementsByClassName("modalTrigger");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (isSP) {
            let leave = false;
            element.addEventListener("touchstart", (e) => {
                leave = false;
                element.addEventListener("touchend",(e)=>{
                    if (!leave) {
                        e.preventDefault();
                        location.hash = element.getAttribute("href");
                    }
                })
            }, false);
            element.addEventListener("touchmove",(e)=>{
                if (document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) !== element) {
                    leave = true;
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
            let leave = false;
            element.addEventListener("touchstart", (e) => {
                leave = false;
                element.addEventListener("touchend",(e)=>{
                    if (!leave) {
                            e.preventDefault();
                            location.hash = "";
                            setTimeout(() => {
                                history.replaceState(null,null,"./");
                            }, 1);
                    }
                })
            }, false);
            element.addEventListener("touchmove",(e)=>{
                if (document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) !== element) {
                    leave = true;
                }
            }, false);
        } else {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                location.hash = "";
                setTimeout(() => {
                    history.replaceState(null,null,"./");
                }, 1);

            }, false);
        }
    }
}
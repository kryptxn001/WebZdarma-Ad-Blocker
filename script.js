document.addEventListener("DOMContentLoaded", () => {
    const hideAds = () => {
        const images = document.getElementsByTagName("img");
        for (let img of images) {
            if (img.src.includes("assetsWZ")) {
                img.style.display = "none";
                if (img.parentElement && img.parentElement.tagName === "A") {
                    img.parentElement.style.display = "none";
                }
            }
        }
    
    const links = document.querySelectorAll('a[href*="webzdarma"], a[href*="tvurcewebu"]');
        for (let link of links) {
            link.style.display = "none";
            if (link.parentElement && link.parentElement.tagName === "DIV") {
                link.parentElement.style.display = "none"; 
            }
        }
    };

    const observer = new MutationObserver(hideAds);

    observer.observe(document.body, {
        childList: true,   
        subtree: true      
    });

    hideAds();
});

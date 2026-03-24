const imageSets = [
    [ // Forest Deck
        "images/forestDeck/pic1.png",
        "images/forestDeck/pic2.jpg",
        "images/forestDeck/pic3.jpg",
        "images/forestDeck/pic4.jpg",
        "images/forestDeck/pic5.jpg",
        "images/forestDeck/pic6.jpg",
        "images/forestDeck/pic7.png",
        "images/forestDeck/pic8.png",
        "images/forestDeck/pic9.png",
        "images/forestDeck/pic10.png",
        "images/forestDeck/pic11.png",
        "images/forestDeck/pic12.png",
        "images/forestDeck/pic13.jpg",
        "images/forestDeck/pic14.jpg",
        "images/forestDeck/pic15.jpg",
        "images/forestDeck/pic16.jpg",
        "images/forestDeck/pic17.jpg",
        "images/forestDeck/pic18.jpg",
        "images/forestDeck/pic19.png",
        "images/forestDeck/pic20.png"
    ],
    [ // River Deck
        "images/riverDeck/river1.jpg",
        "images/riverDeck/river2.jpg",
        "images/riverDeck/river3.jpg",
        "images/riverDeck/river4.jpg",
        "images/riverDeck/river5.jpg",
        "images/riverDeck/river6.jpg",
        "images/riverDeck/river7.jpg",
        "images/riverDeck/river8.jpg",
        "images/riverDeck/river9.jpg",
        "images/riverDeck/river10.jpg",
        "images/riverDeck/river11.jpg",
        "images/riverDeck/river12.jpg",
        "images/riverDeck/river13.jpg",
        "images/riverDeck/river14.jpg",
        "images/riverDeck/river15.jpg",
        "images/riverDeck/river16.jpg",
        "images/riverDeck/river17.jpg",
        "images/riverDeck/river18.jpg",
        "images/riverDeck/river19.jpg",
        "images/riverDeck/river20.jpg"
    ],
    [ // Mines Deck
        "images/minesDeck/pic1.jpg",
        "images/minesDeck/pic2.jpg",
        "images/minesDeck/pic3.jpg",
        "images/minesDeck/pic4.jpg",
        "images/minesDeck/pic5.jpg",
        "images/minesDeck/pic6.jpg",
        "images/minesDeck/pic7.jpg",
        "images/minesDeck/pic8.jpg",
        "images/minesDeck/pic9.jpg",
        "images/minesDeck/pic10.jpg",
        "images/minesDeck/pic11.jpg",
        "images/minesDeck/pic12.jpg",
        "images/minesDeck/pic13.jpg",
        "images/minesDeck/pic14.jpg",
        "images/minesDeck/pic15.jpg",
        "images/minesDeck/pic16.jpg",
        "images/minesDeck/pic17.jpg",
        "images/minesDeck/pic18.jpg",
        "images/minesDeck/pic19.jpg",
        "images/minesDeck/pic20.jpg"
    ],
    [ // Ricefield Deck
        "images/riceFieldDeck/pic1.jpg",
        "images/riceFieldDeck/pic2.jpg",
        "images/riceFieldDeck/pic3.jpg",
        "images/riceFieldDeck/pic4.jpg",
        "images/riceFieldDeck/pic5.jpg",
        "images/riceFieldDeck/pic6.jpg",
        "images/riceFieldDeck/pic7.jpg",
        "images/riceFieldDeck/pic8.jpg",
        "images/riceFieldDeck/pic9.jpg",
        "images/riceFieldDeck/pic10.jpg",
        "images/riceFieldDeck/pic11.jpg",
        "images/riceFieldDeck/pic12.jpg",
        "images/riceFieldDeck/pic13.jpg",
        "images/riceFieldDeck/pic14.jpg",
        "images/riceFieldDeck/pic15.jpg",
        "images/riceFieldDeck/pic16.jpg",
        "images/riceFieldDeck/pic17.jpg",
        "images/riceFieldDeck/pic18.jpg",
        "images/riceFieldDeck/pic19.jpg",
        "images/riceFieldDeck/pic20.jpg"
    ],
    [ // Bandit Deck
        "images/banditDeck/pic1.jpg",
        "images/banditDeck/pic2.jpg",
        "images/banditDeck/pic3.jpg",
        "images/banditDeck/pic4.jpg",
        "images/banditDeck/pic5.jpg",
        "images/banditDeck/pic6.jpg",
        "images/banditDeck/pic7.jpg",
        "images/banditDeck/pic8.jpg",
        "images/banditDeck/pic9.jpg",
        "images/banditDeck/pic10.jpg",
        "images/banditDeck/pic11.jpg",
        "images/banditDeck/pic12.jpg",
        "images/banditDeck/pic13.jpg",
        "images/banditDeck/pic14.jpg",
        "images/banditDeck/pic15.jpg",
        "images/banditDeck/pic16.jpg",
        "images/banditDeck/pic17.jpg",
        "images/banditDeck/pic18.jpg",
        "images/banditDeck/pic19.jpg",
        "images/banditDeck/pic20.jpg"
    ]
];

let stackCount = 0;

function showRandom(buttonIndex) {
    const selectedSet = imageSets[buttonIndex];
    const randomIndex = Math.floor(Math.random() * selectedSet.length);

    const container = document.getElementById("imageContainer");
    const historyPanel = document.getElementById("historyPanel");

    const imgSrc = selectedSet[randomIndex];

    // 🎴 STACK CARD
    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("card");

    const positionInStack = stackCount % 10;
    const offsetX = positionInStack * 5;
    const offsetY = positionInStack * 5;
    const rotate = Math.random() * 10 - 5;

    img.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`;
    img.style.zIndex = stackCount;

    container.appendChild(img);
    stackCount++;

    if (container.children.length > 10) {
        container.removeChild(container.firstChild);
    }

    // 📜 HISTORY CARD
    const historyImg = document.createElement("img");
    historyImg.src = imgSrc;

    historyImg.addEventListener("click", () => {
        const overlay = document.getElementById("previewOverlay");
        const previewImage = document.getElementById("previewImage");

        previewImage.src = imgSrc;
        overlay.style.display = "flex";

        setTimeout(() => {
            overlay.classList.add("active");
        }, 10);
    });

    historyPanel.prepend(historyImg);

    // keep history length (account for title)
    if (historyPanel.children.length > 21) {
        historyPanel.removeChild(historyPanel.lastChild);
    }
}

// ❌ CLOSE PREVIEW
const overlay = document.getElementById("previewOverlay");

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");

    setTimeout(() => {
        overlay.style.display = "none";
    }, 200);
});
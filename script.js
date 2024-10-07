const majorArcana = [
    "Major-Arcana/the-fool.png",
    "Major-Arcana/the-magician.png",
    "Major-Arcana/the-high-priestess.png",
    "Major-Arcana/the-empress.png",
    "Major-Arcana/the-emperor.png",
    "Major-Arcana/the-hierophant.png",
    "Major-Arcana/the-lovers.png",
    "Major-Arcana/the-chariot.png",
    "Major-Arcana/strength.png",
    "Major-Arcana/the-hermit.png",
    "Major-Arcana/wheel-of-fortune.png",
    "Major-Arcana/justice.png",
    "Major-Arcana/the-hanged-man.png",
    "Major-Arcana/death.png",
    "Major-Arcana/temperance.png",
    "Major-Arcana/the-devil.png",
    "Major-Arcana/the-tower.png",
    "Major-Arcana/the-star.png",
    "Major-Arcana/the-moon.png",
    "Major-Arcana/the-sun.png",
    "Major-Arcana/judgement.png",
    "Major-Arcana/the-world.png"
];

document.addEventListener('DOMContentLoaded', () => {
    const backSides = document.querySelectorAll('.back');
    const assignedcards = [];

    backSides.forEach(back => {
        let randomIndex;

        do{
            randomIndex = Math.floor(Math.random()*majorArcana.length);
        }while (assignedcards.includes(randomIndex)){
            assignedcards.push(randomIndex);
            back.style.backgroundImage = `url(${majorArcana[randomIndex]})`;
        }
    })
})

function flipCard(cardContainer) {
    cardContainer.classList.toggle('flip');
    
}
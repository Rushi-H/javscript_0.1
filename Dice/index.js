const rollBtn = document.getElementById('roll-btn');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

rollBtn.addEventListener('click', () => {
    // Add shake class
    img1.classList.add('shake');
    img2.classList.add('shake');

    // Generate random numbers 1-6
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

    // Update images (using a dice-styled API for this demo)
    setTimeout(() => {
        img1.src = `https://api.dicebear.com/7.x/initials/svg?seed=${random1}`;
        img2.src = `https://api.dicebear.com/7.x/initials/svg?seed=${random2}`;
        
        // Remove shake class so it can be re-applied
        img1.classList.remove('shake');
        img2.classList.remove('shake');

        // Logic for winner
        if (random1 > random2) {
            h1.innerHTML = "🚩 Player 1 Wins!";
        } else if (random2 > random1) {
            h1.innerHTML = "Player 2 Wins! 🚩";
        } else {
            h1.innerHTML = "It's a Draw! 🤝";
        }
    }, 500); 
});
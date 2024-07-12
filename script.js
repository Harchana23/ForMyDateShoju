let noClickCount = 0;

document.getElementById('no-button').addEventListener('click', function() {
    let noButton = document.getElementById('no-button');
    let yesButton = document.getElementById('yes-button');

    noClickCount++;

    // Make "Yes" button progressively bigger
    let newSize = 16 + noClickCount * 10; // Initial size is 16px, increase by 4px with each click
    yesButton.style.fontSize = newSize + 'px';

    if (noClickCount < 3) {
        // Randomly position "No" button
        noButton.style.position = 'absolute';
        noButton.style.top = Math.random() * window.innerHeight + 'px';
        noButton.style.left = Math.random() * window.innerWidth + 'px';
    } else {
        // Hide the "No" button after 3 clicks
        noButton.style.display = 'none';
    }
});

document.getElementById('yes-button').addEventListener('click', function() {
    let container = document.querySelector('.container');
    let emoji = document.createElement('div');
    emoji.innerHTML = '😘';
    emoji.style.fontSize = '50px';
    container.appendChild(emoji);

    // Add falling rose petals
    addRosePetals();

    // Hide image and buttons
    document.getElementById('invitation-image').style.display = 'none';
    document.getElementById('buttons-container').style.display = 'none';

    // Show itinerary table
    document.getElementById('itinerary').style.display = 'block';
});

function addRosePetals() {
    for (let i = 0; i < 30; i++) { // Number of petals
        createPetal();
    }
}

function createPetal() {
    let petal = document.createElement('div');
    petal.classList.add('rose-petal');
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.top = -30 + 'px'; // Start above the viewport
    petal.style.backgroundImage = 'url("rose-petal.png")'; // Replace with your petal image
    document.body.appendChild(petal);

    // Animate petals
    petal.animate([
        { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight}px) rotate(360deg)`, opacity: 1 }
    ], {
        duration: Math.random() * 3000 + 3000,
        iterations: Infinity, // Loop indefinitely
        easing: 'ease-in'
    });
}

// Access the audio element
let bgm = document.getElementById('bgm');

// Stop BGM when clicking "No"
document.getElementById('no-button').addEventListener('click', function() {
    bgm.pause(); // Pause playback
});

// Example: Resume BGM when clicking "Yes"
document.getElementById('yes-button').addEventListener('click', function() {
    bgm.play(); // Resume playback
});

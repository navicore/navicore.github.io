// Mystery text decoder
const mysteryElement = document.getElementById('mystery');
const originalText = "∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎";
const decodedText = "PATCHING THE COSMOS...";
let isDecoded = false;

mysteryElement.addEventListener('click', function() {
    if (isDecoded) return;
    
    let currentIndex = 0;
    const decodeInterval = setInterval(() => {
        if (currentIndex < decodedText.length) {
            const randomChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
            const decodedPart = decodedText.substring(0, currentIndex + 1);
            const remainingLength = originalText.length - currentIndex - 1;
            let randomPart = '';
            
            for (let i = 0; i < remainingLength; i++) {
                randomPart += randomChars[Math.floor(Math.random() * randomChars.length)];
            }
            
            mysteryElement.textContent = decodedPart + randomPart;
            currentIndex++;
        } else {
            clearInterval(decodeInterval);
            mysteryElement.textContent = decodedText;
            isDecoded = true;
            mysteryElement.style.cursor = 'default';
        }
    }, 100);
});

mysteryElement.style.cursor = 'pointer';

// Add random glitch effects
setInterval(() => {
    const glitch = document.querySelector('.glitch');
    if (Math.random() < 0.1) {
        glitch.style.animation = 'none';
        setTimeout(() => {
            glitch.style.animation = '';
        }, 200);
    }
}, 3000);

// Terminal typing effect enhancement
document.querySelectorAll('.typing').forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
});

// Add hover effect to symbols
document.querySelectorAll('.symbol').forEach(symbol => {
    symbol.addEventListener('mouseenter', function() {
        this.style.color = 'rgba(255, 255, 0, 0.8)';
        this.style.textShadow = '0 0 20px #ff0';
    });
    
    symbol.addEventListener('mouseleave', function() {
        this.style.color = 'rgba(0, 255, 255, 0.3)';
        this.style.textShadow = 'none';
    });
});

// Console easter egg
console.log('%c' + `
███╗   ██╗ █████╗ ██╗   ██╗██╗ ██████╗ ██████╗ ██████╗ ███████╗
████╗  ██║██╔══██╗██║   ██║██║██╔════╝██╔═══██╗██╔══██╗██╔════╝
██╔██╗ ██║███████║██║   ██║██║██║     ██║   ██║██████╔╝█████╗  
██║╚██╗██║██╔══██║╚██╗ ██╔╝██║██║     ██║   ██║██╔══██╗██╔══╝  
██║ ╚████║██║  ██║ ╚████╔╝ ██║╚██████╗╚██████╔╝██║  ██║███████╗
╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

Welcome, curious explorer. You found the console.
`, 'color: #0ff; font-family: monospace; font-size: 12px; line-height: 1.2');

// Random background star generation
function generateStars() {
    const stars = document.querySelector('.stars');
    const starCount = 100;
    let starsHtml = '';
    
    for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2;
        const duration = Math.random() * 3 + 1;
        
        starsHtml += `<div class="star" style="
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            left: ${x}%;
            top: ${y}%;
            animation: twinkle ${duration}s infinite;
        "></div>`;
    }
    
    stars.innerHTML += starsHtml;
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

generateStars();

// Synth-inspired hover sounds (visual feedback only)
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Create a visual "ping" effect
        const ping = document.createElement('div');
        ping.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #0ff;
            border-radius: 50%;
            left: ${event.pageX - 10}px;
            top: ${event.pageY - 10}px;
            pointer-events: none;
            animation: ping 0.5s ease-out forwards;
            z-index: 1000;
        `;
        document.body.appendChild(ping);
        setTimeout(() => ping.remove(), 500);
    });
});

// Add ping animation
if (!document.querySelector('#ping-style')) {
    const pingStyle = document.createElement('style');
    pingStyle.id = 'ping-style';
    pingStyle.textContent = `
        @keyframes ping {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(pingStyle);
}

// Make the oscilloscope more reactive
let wavePhase = 0;
function animateWave() {
    const wave = document.querySelector('.wave');
    if (wave) {
        wavePhase += 0.05;
        const d = `M0,50 Q${100 + Math.sin(wavePhase) * 20},${50 + Math.cos(wavePhase * 2) * 30} 200,50 T400,50`;
        wave.setAttribute('d', d);
    }
    requestAnimationFrame(animateWave);
}
animateWave();

// Add modular synth reference to console
console.log('%c' + `
╔═══════════════════════════════════════╗
║  SERGE MODULAR SYSTEM STATUS: ONLINE  ║
║  CV: ±5V  |  AUDIO: PATCHED          ║
║  OSCILLATORS: DRIFTING BEAUTIFULLY   ║
╚═══════════════════════════════════════╝
`, 'color: #f0f; background: #000; padding: 5px; font-family: monospace;');
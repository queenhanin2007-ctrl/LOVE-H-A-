let counts = { 1: 2616, 2: 266, 3: 66234590 };

function updateDisplay(id) {
    const el = document.getElementById('count-display-' + id);
    if (el) el.innerText = counts[id];
}

function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

function unlockSite() {
    const pass = document.getElementById("site-password-input").value;
    const modal = document.getElementById("site-lock-modal");
    const content = document.getElementById("main-content");
    const errorMsg = document.getElementById("site-error-msg");

    if (pass === "25.2") {
        modal.classList.add("opacity-0", "pointer-events-none");
        setTimeout(() => modal.style.display = "none", 500);
        content.classList.remove("opacity-0", "pointer-events-none");
    } else {
        errorMsg.classList.remove("hidden");
        const card = modal.querySelector(".glass-card");
        card.classList.add("animate-shake");
        setTimeout(() => card.classList.remove("animate-shake"), 400);
    }
}

// دعم زرار Enter في خانة الباسورد الرئيسية
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("site-password-input");
    if (passwordInput) {
        passwordInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                unlockSite();
            }
        });
    }
});

function verifyCounterPassword(id) {
    const pass = document.getElementById("pass-" + id).value;
    if (pass === "200016") {
        document.getElementById("unlock-area-" + id).classList.add("hidden");
        document.getElementById("controls-" + id).classList.remove("hidden");
        document.getElementById("lock-icon-" + id).className = "fa-solid fa-lock-open text-lg text-emerald-500";
    } else {
        alert("الباسورد خطأ يا حبيبي 🌸");
    }
}

function adjustCount(id, amount) {
    counts[id] += amount;
    if (counts[id] < 0) counts[id] = 0;
    updateDisplay(id);
    localStorage.setItem('ahmed_romance_count_' + id, counts[id]);
}

// دالة فتح البردية الفرعونية
function toggleScrollMessage() {
    const content = document.getElementById("pharaoh-scroll-content");
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
    } else {
        content.classList.add("hidden");
    }
}

// التواريخ الدقيقة للعدادات (باستخدام أسلوب آمن مستحيل يصفر)
const timeKnowing = new Date(2026, 1, 25, 0, 0, 0).getTime(); // 25 فبراير 2026
const timePromise = new Date(2026, 2, 5, 0, 0, 0).getTime();  // 5 مارس 2026
const timeMeeting = new Date(2026, 3, 26, 0, 0, 0).getTime(); // 26 أبريل 2026

window.onload = function() {
    for (let i = 1; i <= 3; i++) {
        const saved = localStorage.getItem('ahmed_romance_count_' + i);
        if (saved !== null) {
            counts[i] = parseInt(saved, 10);
        }
        updateDisplay(i);
    }

    setInterval(() => {
        const now = new Date().getTime();
        
        // Timer 1
        let diff1 = now - timeKnowing;
        if (diff1 < 0) diff1 = 0;
        let s1 = Math.floor(diff1 / 1000);
        let days1 = Math.floor(s1 / (3600 * 24));
        let hours1 = Math.floor((s1 % (3600 * 24)) / 3600);
        let mins1 = Math.floor((s1 % 3600) / 60);
        let secs1 = s1 % 60;
        let ms1 = diff1 % 1000;

        if(document.getElementById('days-1')) {
            document.getElementById('days-1').innerText = days1;
            document.getElementById('hours-1').innerText = hours1;
            document.getElementById('minutes-1').innerText = mins1;
            document.getElementById('seconds-1').innerText = secs1;
            document.getElementById('ms-1').innerText = String(ms1).padStart(3, '0');
        }

        // Timer 2
        let diff2 = now - timePromise;
        if (diff2 < 0) diff2 = 0;
        let s2 = Math.floor(diff2 / 1000);
        let days2 = Math.floor(s2 / (3600 * 24));
        let hours2 = Math.floor((s2 % (3600 * 24)) / 3600);
        let mins2 = Math.floor((s2 % 3600) / 60);
        let secs2 = s2 % 60;
        let ms2 = diff2 % 1000;

        if(document.getElementById('days-2')) {
            document.getElementById('days-2').innerText = days2;
            document.getElementById('hours-2').innerText = hours2;
            document.getElementById('minutes-2').innerText = mins2;
            document.getElementById('seconds-2').innerText = secs2;
            document.getElementById('ms-2').innerText = String(ms2).padStart(3, '0');
        }

        // Timer 3
        let diff3 = now - timeMeeting;
        if (diff3 < 0) diff3 = 0;
        let s3 = Math.floor(diff3 / 1000);
        let days3 = Math.floor(s3 / (3600 * 24));
        let hours3 = Math.floor((s3 % (3600 * 24)) / 3600);
        let mins3 = Math.floor((s3 % 3600) / 60);
        let secs3 = s3 % 60;
        let ms3 = diff3 % 1000;

        if(document.getElementById('days-3')) {
            document.getElementById('days-3').innerText = days3;
            document.getElementById('hours-3').innerText = hours3;
            document.getElementById('minutes-3').innerText = mins3;
            document.getElementById('seconds-3').innerText = secs3;
            document.getElementById('ms-3').innerText = String(ms3).padStart(3, '0');
        }
    }, 50);
};
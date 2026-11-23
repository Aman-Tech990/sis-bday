/**
 * ============================================================================
 * A LITTLE UNIVERSE MADE FOR YOU — CONFIGURATION & INTERACTIVE ENGINE
 * ============================================================================
 * Edit SITE_CONFIG below to customize her name, photo paths, captions,
 * reasons, roasts, and wishes without touching the rest of the application.
 */

const SITE_CONFIG = {
    sisterName: "Arpi",
    audioSrc: "assets/behna-meri-pyari.mp3",

    // Featured Section Images
    heroPrimaryPhoto: "assets/photo1.jpeg",
    heroSecondaryPhoto: "assets/photo2.jpeg",
    centerpiecePhoto: "assets/photo3.jpeg",
    surprisePhoto: "assets/photo5.jpeg",
    finalPhoto: "assets/photo6.jpeg",

    // Scrapbook & Lightbox Gallery Photos
    photos: [
        {
            src: "assets/photo1.jpeg",
            caption: "One of my favorite memories — always smiling when we're together.",
            category: "together",
            date: "Us · Always",
            featured: true
        },
        {
            src: "assets/photo2.jpeg",
            caption: "Warm evening lights and effortless grace.",
            category: "portraits",
            date: "Evening Out",
            featured: true
        },
        {
            src: "assets/photo3.jpeg",
            caption: "Out exploring under open skies, side by side.",
            category: "together",
            date: "Day Trip",
            featured: true
        },
        {
            src: "assets/photo4.jpeg",
            caption: "A flower in your hair and golden afternoon light.",
            category: "portraits",
            date: "Rooftop Breeze",
            featured: false
        },
        {
            src: "assets/photo5.jpeg",
            caption: "Pure happiness — one of those days I wish I could relive.",
            category: "together",
            date: "Garden Walk",
            featured: true
        },
        {
            src: "assets/photo6.jpeg",
            caption: "Celebrating you — you deserve every bit of sweetness.",
            category: "portraits",
            date: "Celebration",
            featured: true
        },
        {
            src: "assets/photo7.jpeg",
            caption: "Soft pastel vibes and that quiet, thoughtful smile.",
            category: "portraits",
            date: "Candid Frame",
            featured: false
        },
        {
            src: "assets/photo8.jpeg",
            caption: "My favorite kind of chaos in one frame.",
            category: "portraits",
            date: "At Home",
            featured: false
        },
        {
            src: "assets/photo9.jpeg",
            caption: "Unrehearsed, natural, and completely you.",
            category: "portraits",
            date: "Afternoon Light",
            featured: false
        },
        {
            src: "assets/photo10.jpeg",
            caption: "Where it all started — the little girl with the pink bow.",
            category: "throwback",
            date: "Childhood Throwback",
            featured: true
        }
    ],

    // Section 5: Little Things I Love About You
    reasons: [
        "Your smile can change the mood of an entire room.",
        "You make ordinary days memorable.",
        "Nobody can replace the chaos you bring into my life.",
        "You care more than you let people notice.",
        "You are stronger than you think.",
        "You make family feel like home.",
        "You have a talent for making me laugh at the most inappropriate moments.",
        "Life would genuinely be less beautiful without you.",
        "You listen without judging, even when I make zero sense.",
        "You celebrate my smallest wins like they’re huge milestones.",
        "Even on tough days, your presence makes things lighter.",
        "You’ve grown into someone I genuinely admire."
    ],

    // Section 6A: Sibling Roasts
    roasts: [
        "You act like you're the CEO of this house.",
        "Your talent for annoying me is genuinely world-class.",
        "We should probably never tell anyone half the things we have done.",
        "You steal things and somehow act like you're doing me a favor.",
        "You are annoying. Unfortunately, I love you.",
        "You say 'two minutes' and then take forty-five.",
        "Somehow every argument ends with you acting completely innocent."
    ],

    // Section 6D: Random Memory Captions
    randomCaptions: [
        "Partners in crime since day one.",
        "We were so unserious here.",
        "Proof that we occasionally get along.",
        "Different moods, same chaotic energy.",
        "Core memory unlocked ✨",
        "One of those moments I never want to forget."
    ],

    // Section 8: Wishing Sky Wishes (12 Wishes)
    wishes: [
        "May you always find reasons to smile.",
        "May you never settle for less than the happiness you deserve.",
        "May your dreams become bigger than your fears.",
        "May you find people who love you as genuinely as you love others.",
        "May life surprise you with beautiful things.",
        "May you always remember how special you are.",
        "May you never lose the beautiful person you are becoming.",
        "May every hard day end with peace in your heart.",
        "May your laughter always stay loud, warm, and effortless.",
        "May you walk into every room knowing your worth.",
        "May good health, luck, and gentle days follow you everywhere.",
        "May you always know you have a brother cheering for you."
    ]
};

/* ============================================================================
   IMAGE FALLBACK HANDLER (Prevents Broken Images If Local Files Aren't Added Yet)
   ============================================================================ */
function createFallbackSVG(label = "Memory Frame") {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="720" viewBox="0 0 600 720">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f6e7e4"/>
          <stop offset="100%" stop-color="#eee9f5"/>
        </linearGradient>
      </defs>
      <rect width="600" height="720" fill="url(#g)"/>
      <circle cx="300" cy="310" r="88" fill="none" stroke="#c9a25e" stroke-width="1.5" stroke-dasharray="4 6"/>
      <text x="300" y="318" text-anchor="middle" font-family="Georgia, serif" font-size="26" fill="#6e2639">✦</text>
      <text x="300" y="445" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="#6e2639">${label}</text>
      <text x="300" y="478" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#64525c">Add photo in assets/photos/</text>
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function attachSafeImage(imgEl, src, fallbackLabel) {
    if (!imgEl) return;
    imgEl.src = src;
    imgEl.onerror = () => {
        imgEl.onerror = null;
        imgEl.src = createFallbackSVG(fallbackLabel);
    };
}

/* ============================================================================
   INITIALIZATION
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    initConfiguredImages();
    initGrandIntroduction(prefersReducedMotion);
    initMusicPlayer();
    initAmbientParticles(prefersReducedMotion);
    initCursorGlow(prefersReducedMotion);
    initHeroParallax(prefersReducedMotion);
    initScrapbookGallery();
    initLightbox();
    initScrollReveals();
    initUnsaidLines();
    initReasonsGrid();
    initChaosInteractions();
    initDigitalLetter();
    initWishingSky();
    initSurpriseModal(prefersReducedMotion);
    initNavigationControls();
});

/* ============================================================================
   POPULATE STATIC FEATURED IMAGES
   ============================================================================ */
function initConfiguredImages() {
    document.getElementById("introName").textContent = SITE_CONFIG.sisterName;
    attachSafeImage(document.getElementById("heroMainImg"), SITE_CONFIG.heroPrimaryPhoto, "Us Together");
    attachSafeImage(document.getElementById("heroSecondaryImg"), SITE_CONFIG.heroSecondaryPhoto, "Sweety");
    attachSafeImage(document.getElementById("centerpieceImg"), SITE_CONFIG.centerpiecePhoto, "Our Bond");
    attachSafeImage(document.getElementById("surprisePhotoImg"), SITE_CONFIG.surprisePhoto, "Special Memory");
    attachSafeImage(document.getElementById("finalPhotoImg"), SITE_CONFIG.finalPhoto, "Celebration");
}

/* ============================================================================
   1. GRAND INTRODUCTION & STARFIELD CANVAS
   ============================================================================ */
function initGrandIntroduction(reducedMotion) {
    const overlay = document.getElementById("introOverlay");
    const line1 = document.getElementById("introLine1");
    const line2 = document.getElementById("introLine2");
    const nameEl = document.getElementById("introName");
    const enterBtn = document.getElementById("enterUniverseBtn");
    const canvas = document.getElementById("introStarCanvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let boostStars = false;
    let animId;

    const stars = Array.from({ length: reducedMotion ? 45 : 130 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        alpha: Math.random(),
        speed: Math.random() * 0.25 + 0.05,
        twinkle: Math.random() * 0.02 + 0.005
    }));

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function renderIntroStars() {
        ctx.clearRect(0, 0, width, height);
        for (const s of stars) {
            s.alpha += s.twinkle;
            if (s.alpha > 1 || s.alpha < 0.15) s.twinkle *= -1;
            s.y -= boostStars ? s.speed * 14 : s.speed;
            if (s.y < 0) {
                s.y = height;
                s.x = Math.random() * width;
            }
            ctx.beginPath();
            ctx.arc(s.x, s.y, boostStars ? s.r * 1.5 : s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(248, 236, 212, ${Math.max(0.15, Math.min(1, s.alpha))})`;
            ctx.fill();
        }
        animId = requestAnimationFrame(renderIntroStars);
    }
    renderIntroStars();

    // Staged poetic entrance
    setTimeout(() => line1.classList.add("visible"), 350);
    setTimeout(() => line2.classList.add("visible"), 1450);
    setTimeout(() => nameEl.classList.add("visible"), 2450);
    setTimeout(() => enterBtn.classList.add("visible"), 3200);

    enterBtn.addEventListener("click", () => {
        boostStars = true;
        overlay.classList.add("is-entering");

        // Start music gently after explicit user interaction
        if (window.universeAudioPlayer) {
            window.universeAudioPlayer.playWithFadeIn();
        }

        setTimeout(() => {
            overlay.classList.add("is-hidden");
            document.body.classList.remove("intro-locked");
            cancelAnimationFrame(animId);
        }, 950);
    });
}

/* ============================================================================
   MUSIC PLAYER ("Behna Meri Pyari")
   ============================================================================ */
function initMusicPlayer() {
    const audio = document.getElementById("bgAudio");
    const playBtn = document.getElementById("musicPlayBtn");
    const playIcon = document.getElementById("playIcon");
    const muteBtn = document.getElementById("musicMuteBtn");
    const muteIcon = document.getElementById("muteIcon");
    const progress = document.getElementById("musicProgress");
    const timeDisplay = document.getElementById("musicTime");
    const trackName = document.getElementById("musicTrackName");

    let audioAvailable = true;

    audio.addEventListener("error", () => {
        audioAvailable = false;
        trackName.textContent = "Behna Meri Pyari (Add MP3)";
    });

    function formatTime(sec) {
        if (!Number.isFinite(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    }

    function updateUI() {
        playIcon.textContent = audio.paused ? "▶" : "❚❚";
        muteIcon.textContent = audio.muted ? "🔇" : "🔊";
    }

    function playWithFadeIn() {
        if (!audioAvailable) return;
        audio.volume = 0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    updateUI();
                    let vol = 0;
                    const fade = setInterval(() => {
                        vol = Math.min(0.75, vol + 0.05);
                        audio.volume = vol;
                        if (vol >= 0.75) clearInterval(fade);
                    }, 120);
                })
                .catch(() => {
                    updateUI();
                });
        }
    }

    playBtn.addEventListener("click", () => {
        if (!audioAvailable) return;
        if (audio.paused) {
            playWithFadeIn();
        } else {
            audio.pause();
            updateUI();
        }
    });

    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        updateUI();
    });

    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            progress.value = (audio.currentTime / audio.duration) * 100;
            timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        }
    });

    progress.addEventListener("input", () => {
        if (audio.duration) {
            audio.currentTime = (progress.value / 100) * audio.duration;
        }
    });

    window.universeAudioPlayer = { playWithFadeIn };
}

/* ============================================================================
   AMBIENT FLOATING PETALS & SPARKLES
   ============================================================================ */
function initAmbientParticles(reducedMotion) {
    if (reducedMotion) return;
    const canvas = document.getElementById("ambientCanvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const petals = Array.from({ length: 24 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 3,
        speedY: Math.random() * 0.45 + 0.2,
        sway: Math.random() * 0.8 + 0.3,
        angle: Math.random() * Math.PI * 2,
        color: Math.random() > 0.4 ? "rgba(212, 154, 158, 0.28)" : "rgba(201, 162, 94, 0.24)"
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (const p of petals) {
            p.angle += 0.012;
            p.y += p.speedY;
            p.x += Math.sin(p.angle) * p.sway;
            if (p.y > height + 10) {
                p.y = -10;
                p.x = Math.random() * width;
            }
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            ctx.restore();
        }
        requestAnimationFrame(animate);
    }
    animate();
}

/* ============================================================================
   CURSOR GLOW & HERO PARALLAX
   ============================================================================ */
function initCursorGlow(reducedMotion) {
    if (reducedMotion) return;
    const glow = document.getElementById("cursorGlow");
    window.addEventListener("pointermove", (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
}

function initHeroParallax(reducedMotion) {
    if (reducedMotion) return;
    const stage = document.getElementById("heroParallaxStage");
    if (!stage) return;

    const layers = stage.querySelectorAll("[data-depth]");
    window.addEventListener("pointermove", (e) => {
        if (window.innerWidth < 920) return;
        const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
        const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

        layers.forEach((layer) => {
            const depth = Number(layer.dataset.depth) || 15;
            const baseRotate = layer.classList.contains("hero-floating-polaroid") ? " rotate(-6deg)" : "";
            layer.style.transform = `translate3d(${-xRatio * depth}px, ${-yRatio * depth}px, 0)${baseRotate}`;
        });
    });
}

/* ============================================================================
   3. SCRAPBOOK GALLERY & FILM STRIP
   ============================================================================ */
let currentFilteredPhotos = [...SITE_CONFIG.photos];

function initScrapbookGallery() {
    const galleryEl = document.getElementById("scrapbookGallery");
    const filmstripEl = document.getElementById("filmstripTrack");
    const filterBtns = document.querySelectorAll(".filter-pill");

    function renderGallery(filter = "all") {
        currentFilteredPhotos =
            filter === "all"
                ? [...SITE_CONFIG.photos]
                : SITE_CONFIG.photos.filter((p) => p.category === filter);

        galleryEl.innerHTML = "";
        currentFilteredPhotos.forEach((photo, idx) => {
            const item = document.createElement("article");
            item.className = "scrapbook-item";
            item.tabIndex = 0;
            item.setAttribute("role", "button");
            item.setAttribute("aria-label", `Open photo: ${photo.caption}`);

            const photoWrap = document.createElement("div");
            photoWrap.className = "scrapbook-photo-wrap";
            const img = document.createElement("img");
            img.loading = "lazy";
            img.alt = photo.caption;
            attachSafeImage(img, photo.src, photo.date || "Memory");
            photoWrap.appendChild(img);

            const noteBar = document.createElement("div");
            noteBar.className = "scrapbook-note";
            noteBar.innerHTML = `
        <span class="handwritten-note">${photo.caption}</span>
        <span class="scrapbook-tag">${photo.date || ""}</span>
      `;

            item.appendChild(photoWrap);
            item.appendChild(noteBar);

            const openHandler = () => openLightboxAt(idx, currentFilteredPhotos);
            item.addEventListener("click", openHandler);
            item.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openHandler();
                }
            });

            galleryEl.appendChild(item);
        });
    }

    // Render Film Strip
    SITE_CONFIG.photos.forEach((photo, idx) => {
        const frame = document.createElement("div");
        frame.className = "film-frame";
        frame.tabIndex = 0;
        const img = document.createElement("img");
        img.loading = "lazy";
        img.alt = photo.caption;
        attachSafeImage(img, photo.src, "35mm Frame");
        frame.appendChild(img);
        frame.addEventListener("click", () => openLightboxAt(idx, SITE_CONFIG.photos));
        filmstripEl.appendChild(frame);
    });

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderGallery(btn.dataset.filter);
        });
    });

    renderGallery("all");
}

/* ============================================================================
   FULLSCREEN PHOTO LIGHTBOX
   ============================================================================ */
let lightboxList = [];
let lightboxIndex = 0;

function openLightboxAt(index, list) {
    lightboxList = list;
    lightboxIndex = index;
    updateLightboxView();

    const lb = document.getElementById("photoLightbox");
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
}

function updateLightboxView() {
    const photo = lightboxList[lightboxIndex];
    if (!photo) return;
    const img = document.getElementById("lightboxImg");
    attachSafeImage(img, photo.src, "Memory");
    img.alt = photo.caption;
    document.getElementById("lightboxDate").textContent = photo.date || "Captured Memory";
    document.getElementById("lightboxCaption").textContent = photo.caption;
    document.getElementById("lightboxCounter").textContent = `${lightboxIndex + 1} / ${lightboxList.length}`;
}

function initLightbox() {
    const lb = document.getElementById("photoLightbox");
    const closeBtn = document.getElementById("lightboxClose");
    const backdrop = document.getElementById("lightboxBackdrop");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    const closeLb = () => {
        lb.classList.remove("is-open");
        lb.setAttribute("aria-hidden", "true");
    };

    const stepLb = (dir) => {
        if (!lightboxList.length) return;
        lightboxIndex = (lightboxIndex + dir + lightboxList.length) % lightboxList.length;
        updateLightboxView();
    };

    closeBtn.addEventListener("click", closeLb);
    backdrop.addEventListener("click", closeLb);
    prevBtn.addEventListener("click", () => stepLb(-1));
    nextBtn.addEventListener("click", () => stepLb(1));

    document.addEventListener("keydown", (e) => {
        if (!lb.classList.contains("is-open")) return;
        if (e.key === "Escape") closeLb();
        if (e.key === "ArrowLeft") stepLb(-1);
        if (e.key === "ArrowRight") stepLb(1);
    });
}

/* ============================================================================
   SCROLL REVEALS & SECTION 4 ("THINGS I NEVER SAY ENOUGH")
   ============================================================================ */
function initScrollReveals() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.14 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
}

function initUnsaidLines() {
    const lines = document.querySelectorAll(".unsaid-line");
    const lineObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-lit");
                }
            });
        },
        { threshold: 0.65, rootMargin: "0px 0px -10% 0px" }
    );

    lines.forEach((line) => lineObserver.observe(line));
}

/* ============================================================================
   5. THE LITTLE THINGS I LOVE ABOUT YOU
   ============================================================================ */
function initReasonsGrid() {
    const grid = document.getElementById("reasonsGrid");
    const openAllBtn = document.getElementById("revealAllReasonsBtn");

    SITE_CONFIG.reasons.forEach((reason, i) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "reason-card";
        card.setAttribute("aria-expanded", "false");
        card.innerHTML = `
      <span class="reason-number">Note #${String(i + 1).padStart(2, "0")}</span>
      <span class="reason-prompt">Tap to unfold</span>
      <span class="reason-text">${reason}</span>
    `;

        card.addEventListener("click", () => {
            const isOpen = card.classList.toggle("is-open");
            card.setAttribute("aria-expanded", String(isOpen));
        });

        grid.appendChild(card);
    });

    openAllBtn.addEventListener("click", () => {
        const cards = grid.querySelectorAll(".reason-card");
        const anyClosed = Array.from(cards).some((c) => !c.classList.contains("is-open"));
        cards.forEach((c) => {
            c.classList.toggle("is-open", anyClosed);
            c.setAttribute("aria-expanded", String(anyClosed));
        });
        openAllBtn.textContent = anyClosed ? "Fold notes back" : "Open all notes at once";
    });
}

/* ============================================================================
   6. A LITTLE CHAOS — FUN SISTER INTERACTIONS
   ============================================================================ */
function initChaosInteractions() {
    // A) Expose a Memory
    const exposeBtn = document.getElementById("exposeMemoryBtn");
    const roastDisplay = document.getElementById("roastDisplay");
    let lastRoastIndex = -1;

    exposeBtn.addEventListener("click", () => {
        let idx;
        do {
            idx = Math.floor(Math.random() * SITE_CONFIG.roasts.length);
        } while (idx === lastRoastIndex && SITE_CONFIG.roasts.length > 1);
        lastRoastIndex = idx;
        roastDisplay.innerHTML = `<p class="handwritten-note">“${SITE_CONFIG.roasts[idx]}”</p>`;
    });

    // B) Who is more annoying? Quiz
    const quizChoices = document.querySelectorAll(".quiz-choice");
    const quizResult = document.getElementById("quizResult");
    const quizResponses = {
        sister: "Correct. Thank you for finally admitting it in writing.",
        brother: "Nice try, but the judges overruled this answer immediately.",
        both: "Honestly? Fair. Together we’re an unstoppable menace."
    };

    quizChoices.forEach((btn) => {
        btn.addEventListener("click", () => {
            quizChoices.forEach((b) => b.classList.remove("selected"));
            btn.classList.add("selected");
            quizResult.textContent = quizResponses[btn.dataset.choice] || "";
        });
    });

    // C) Miss Our Old Days
    const oldDaysBtn = document.getElementById("oldDaysBtn");
    const nostalgiaCard = document.getElementById("nostalgiaCard");
    const nostalgiaReveal = document.getElementById("nostalgiaReveal");

    oldDaysBtn.addEventListener("click", () => {
        nostalgiaCard.classList.toggle("is-nostalgic");
        const isHidden = nostalgiaReveal.hasAttribute("hidden");
        if (isHidden) {
            nostalgiaReveal.removeAttribute("hidden");
            oldDaysBtn.textContent = "Back to present day";
        } else {
            nostalgiaReveal.setAttribute("hidden", "");
            oldDaysBtn.textContent = "Press this if you miss our old days";
        }
    });

    // D) Random Memory Caption
    const captionBtn = document.getElementById("randomCaptionBtn");
    const captionDisplay = document.getElementById("captionDisplay");
    let lastCapIdx = -1;

    captionBtn.addEventListener("click", () => {
        let idx;
        do {
            idx = Math.floor(Math.random() * SITE_CONFIG.randomCaptions.length);
        } while (idx === lastCapIdx && SITE_CONFIG.randomCaptions.length > 1);
        lastCapIdx = idx;
        captionDisplay.innerHTML = `<p class="handwritten-note">“${SITE_CONFIG.randomCaptions[idx]}”</p>`;
    });
}

/* ============================================================================
   7. A DIGITAL LETTER (INTERACTIVE ENVELOPE)
   ============================================================================ */
function initDigitalLetter() {
    const section = document.getElementById("letter");
    const envelope = document.getElementById("envelopeWrapper");
    const letterPaper = document.getElementById("letterPaper");
    const closeLetterBtn = document.getElementById("closeLetterBtn");

    function openLetter() {
        envelope.classList.add("is-open");
        envelope.setAttribute("aria-expanded", "true");
        section.classList.add("letter-opened");

        setTimeout(() => {
            envelope.classList.add("is-hidden");
            letterPaper.classList.add("is-visible");
            letterPaper.setAttribute("aria-hidden", "false");
        }, 520);
    }

    function closeLetter() {
        letterPaper.classList.remove("is-visible");
        letterPaper.setAttribute("aria-hidden", "true");
        envelope.classList.remove("is-hidden", "is-open");
        envelope.setAttribute("aria-expanded", "false");
        section.classList.remove("letter-opened");
    }

    envelope.addEventListener("click", openLetter);
    envelope.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLetter();
        }
    });
    closeLetterBtn.addEventListener("click", closeLetter);
}

/* ============================================================================
   8. A WISHING SKY — INTERACTIVE CONSTELLATION & SHOOTING STARS
   ============================================================================ */
function initWishingSky() {
    const skyStage = document.getElementById("skyStage");
    const wishText = document.getElementById("wishText");
    const wishCounter = document.getElementById("wishCounter");
    const canvas = document.getElementById("wishingCanvas");
    const ctx = canvas.getContext("2d");

    const discovered = new Set();
    const totalWishes = SITE_CONFIG.wishes.length;
    wishCounter.textContent = `0 / ${totalWishes} wishes discovered`;

    // Place interactive stars in a pleasing constellation arc
    const starCoordinates = [
        { x: 10, y: 28 }, { x: 22, y: 65 }, { x: 30, y: 22 }, { x: 40, y: 52 },
        { x: 48, y: 20 }, { x: 56, y: 72 }, { x: 64, y: 34 }, { x: 73, y: 62 },
        { x: 81, y: 24 }, { x: 89, y: 55 }, { x: 16, y: 45 }, { x: 70, y: 18 }
    ];

    SITE_CONFIG.wishes.forEach((wish, i) => {
        const pos = starCoordinates[i % starCoordinates.length];
        const starBtn = document.createElement("button");
        starBtn.type = "button";
        starBtn.className = "wish-star-node";
        starBtn.style.left = `${pos.x}%`;
        starBtn.style.top = `${pos.y}%`;
        starBtn.style.animationDelay = `${(i * 0.35) % 2.5}s`;
        starBtn.setAttribute("aria-label", `Reveal wish ${i + 1}`);
        starBtn.textContent = i % 3 === 0 ? "✦" : "★";

        starBtn.addEventListener("click", () => {
            skyStage.querySelectorAll(".wish-star-node").forEach((n) => n.classList.remove("is-active"));
            starBtn.classList.add("is-active", "is-discovered");
            discovered.add(i);
            wishText.textContent = `“${wish}”`;
            wishCounter.textContent = `${discovered.size} / ${totalWishes} wishes discovered`;
        });

        skyStage.appendChild(starBtn);
    });

    // Periodic background shooting stars on canvas
    let width = (canvas.width = skyStage.offsetWidth || window.innerWidth);
    let height = (canvas.height = skyStage.offsetHeight || 500);
    const meteors = [];

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = 640;
    });

    setInterval(() => {
        if (meteors.length < 2) {
            meteors.push({
                x: Math.random() * width * 0.8,
                y: Math.random() * height * 0.35,
                len: Math.random() * 90 + 60,
                speed: Math.random() * 7 + 6,
                alpha: 1
            });
        }
    }, 2800);

    function renderMeteors() {
        ctx.clearRect(0, 0, width, height);
        for (let i = meteors.length - 1; i >= 0; i--) {
            const m = meteors[i];
            m.x += m.speed;
            m.y += m.speed * 0.45;
            m.alpha -= 0.016;

            const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.len, m.y - m.len * 0.45);
            grad.addColorStop(0, `rgba(234, 212, 164, ${m.alpha})`);
            grad.addColorStop(1, "rgba(234, 212, 164, 0)");

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(m.x - m.len, m.y - m.len * 0.45);
            ctx.stroke();

            if (m.alpha <= 0) meteors.splice(i, 1);
        }
        requestAnimationFrame(renderMeteors);
    }
    renderMeteors();
}

/* ============================================================================
   10. FULLSCREEN SURPRISE SEQUENCE
   ============================================================================ */
function initSurpriseModal(reducedMotion) {
    const openBtn = document.getElementById("surpriseBtn");
    const closeBtn = document.getElementById("closeSurpriseBtn");
    const modal = document.getElementById("surpriseModal");
    const canvas = document.getElementById("surpriseParticlesCanvas");
    const ctx = canvas.getContext("2d");

    let animId;
    let particles = [];

    function spawnCelebrationParticles() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = Array.from({ length: reducedMotion ? 15 : 55 }, () => ({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 120,
            size: Math.random() * 14 + 10,
            speedY: Math.random() * 1.6 + 0.8,
            drift: Math.random() * 1.2 - 0.6,
            symbol: Math.random() > 0.45 ? "♥" : "✦",
            color: Math.random() > 0.5 ? "rgba(234, 212, 164, 0.65)" : "rgba(212, 154, 158, 0.7)"
        }));
    }

    function animateCelebration() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
            p.y -= p.speedY;
            p.x += p.drift;
            if (p.y < -20) {
                p.y = canvas.height + 20;
                p.x = Math.random() * canvas.width;
            }
            ctx.font = `${p.size}px serif`;
            ctx.fillStyle = p.color;
            ctx.fillText(p.symbol, p.x, p.y);
        }
        animId = requestAnimationFrame(animateCelebration);
    }

    openBtn.addEventListener("click", () => {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        spawnCelebrationParticles();
        animateCelebration();
    });

    function closeSurprise() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        cancelAnimationFrame(animId);
    }

    closeBtn.addEventListener("click", closeSurprise);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) closeSurprise();
    });
}

/* ============================================================================
   11. BACK TO TOP & REPLAY JOURNEY
   ============================================================================ */
function initNavigationControls() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    const replayBtn = document.getElementById("replayBtn");

    window.addEventListener("scroll", () => {
        backToTopBtn.classList.toggle("visible", window.scrollY > 600);
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    replayBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
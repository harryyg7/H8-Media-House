(function() {
    // custom cursor
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .btn, .artist-card, .service-card, .btn-outline, .dropdown-menu a, .lang-switch button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // language data
    const langData = {
        en: {
            home: 'HOME', services: 'SERVICES', artists: 'ARTISTS', about: 'ABOUT', contact: 'CONTACT',
            heroTitle: 'H8<span> Media House</span>',
            heroTag: 'script · direction · sound · vision',
            heroDesc: 'We craft raw narratives – from advertisements and music videos to full-scale production and events. Your story, amplified with edge.',
            servicesTitle: 'our services',
            aboutTitle: 'about us',
            contactTitle: "let's collide",
        },
        hi: {
            home: 'होम', services: 'सेवाएं', artists: 'कलाकार', about: 'हमारे बारे में', contact: 'संपर्क',
            heroTitle: 'H8<span> मीडिया हाउस</span>',
            heroTag: 'स्क्रिप्ट · निर्देशन · ध्वनि · दृष्टि',
            heroDesc: 'हम विज्ञापनों से लेकर संगीत वीडियो और इवेंट तक कच्ची कहानियाँ गढ़ते हैं। आपकी कहानी, धार के साथ प्रवर्धित।',
            servicesTitle: 'हमारी सेवाएं',
            aboutTitle: 'हमारे बारे में',
            contactTitle: 'आइए जुड़ें',
        }
    };

    // updated artists (8 total: DJs and Singers)
    const artists = [
        { id: 1, name: 'DJ Mavi', type: 'DJ', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', intro: 'High-energy DJ spinning house and techno.', bio: 'DJ Mavi is a dynamic and electrifying DJ artist with three years of experience behind the decks, known for transforming every performance into an unforgettable vibe. With a keen sense of rhythm and crowd energy, she seamlessly blends beats that keep audiences moving from start to finish. Her passion for music and ability to read the room allow her to bring life to any stage she steps on, making every show not just a performance, but an experience.', portfolioImages: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'], portraitVideo: 'https://player.vimeo.com/external/458648234.sd.mp4?s=2b9e5b1c5d5e5d5e5d5e5d5e5d5e5d5e&profile_id=139&oauth2_token_id=57447761' },
        { id: 2, name: 'Mirza Yaar', type: 'Singer', image: 'https://images.unsplash.com/photo-1494790108777-296ef3a4f1b6?w=400&h=400&fit=crop', intro: 'Soulful singer with a flair for Sufi and folk.', bio: 'Mirza Yaar is a powerful and soulful singer known for his commanding vocals and captivating stage presence. With over seven years of live performance experience, he has consistently delivered performances that resonate deeply with audiences. Having collaborated with renowned labels like White Hill Music, he brings both industry credibility and artistic depth to his craft. His ability to blend emotion with energy makes every performance memorable, leaving a lasting impact wherever he performs.', portfolioImages: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600', 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600'], portraitVideo: 'https://player.vimeo.com/external/371361761.sd.mp4?s=1e9b85f2c0f2e2b7f1d1d5d5e5d5e5d&profile_id=139&oauth2_token_id=57447761' },
        { id: 3, name: 'DJ Neha', type: 'DJ', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop', intro: 'EDM and Bollywood fusion DJ.', bio: 'DJ Neha is an emerging and energetic DJ artist with two years of experience, known for bringing fresh vibes to every performance. With a growing command over beats and a natural flair for reading the crowd, she creates sets that keep the energy flowing throughout. Her passion for music and evolving style allow her to light up any stage she performs on, making every event lively, engaging, and memorable.', portfolioImages: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'], portraitVideo: 'https://player.vimeo.com/external/458648234.sd.mp4?s=2b9e5b1c5d5e5d5e5d5e5d5e5d5e5d5e&profile_id=139&oauth2_token_id=57447761' },
        { id: 4, name: 'DJ Sherry', type: 'DJ', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', intro: 'Commercial and party anthems.', bio: 'DJ Sherry is an energetic and versatile DJ artist with two years of experience, known for delivering engaging and crowd-pleasing sets. With a strong sense of timing and a passion for music, he skillfully blends tracks to keep the atmosphere alive and dynamic. His ability to connect with the audience ensures every performance is filled with energy, making each event an unforgettable experience.', portfolioImages: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'], portraitVideo: 'https://player.vimeo.com/external/458648234.sd.mp4?s=2b9e5b1c5d5e5d5e5d5e5d5e5d5e5d5e&profile_id=139&oauth2_token_id=57447761' },
        { id: 5, name: 'DJ Monika', type: 'DJ', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', intro: 'House and techno specialist.', bio: 'DJ Monika is a dynamic and versatile DJ artist with 3.5 years of experience, known for crafting electrifying sets that keep the crowd hooked. With a strong ear for music and an instinct for reading the room, she seamlessly blends tracks to create an immersive and high-energy atmosphere. Her passion and stage presence allow her to elevate every performance, turning any event into a vibrant and unforgettable experience.', portfolioImages: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'], portraitVideo: 'https://player.vimeo.com/external/458648234.sd.mp4?s=2b9e5b1c5d5e5d5e5d5e5d5e5d5e5d5e&profile_id=139&oauth2_token_id=57447761' },
        { id: 6, name: 'DJ Phantom', type: 'DJ', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', intro: 'Trap and bass music.', bio: 'DJ Phantom is a fresh and promising DJ artist with one year of experience, quickly making his mark with energetic and engaging performances. With a growing command over sound and a keen sense of crowd dynamics, he delivers sets that keep the vibe alive and evolving. His passion for music and drive to refine his craft make every performance exciting, leaving audiences wanting more.', portfolioImages: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'], portraitVideo: 'https://player.vimeo.com/external/458648234.sd.mp4?s=2b9e5b1c5d5e5d5e5d5e5d5e5d5e5d5e&profile_id=139&oauth2_token_id=57447761' },
        { id: 7, name: 'DJ Shanshila', type: 'DJ', image: 'https://images.unsplash.com/photo-1531427186627-4fd39a9e9fe6?w=400&h=400&fit=crop', intro: 'Where beats meet energy.', bio: 'DJ Sanshila Pradhan is a vibrant and high-energy DJ artist with four years of experience, known for turning every set into a powerful musical journey. With a strong command over diverse genres and an instinctive ability to connect with her audience, she creates an atmosphere that keeps the crowd fully engaged. Her passion for sound and commanding stage presence allow her to elevate any event she performs at, delivering not just music, but an unforgettable experience.', portfolioImages: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'], portraitVideo: 'https://player.vimeo.com/external/458648234.sd.mp4?s=2b9e5b1c5d5e5d5e5d5e5d5e5d5e5d5e&profile_id=139&oauth2_token_id=57447761' },
        { id: 8, name: 'Yash Soni', type: 'Singer', image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=400&fit=crop', intro: 'Bollywood and romantic vocals.', bio: 'Yash Soni is a melodious singer known for his smooth vocals and contemporary lyrical style that resonates with today’s audience. Blending emotion with trend-driven expression, he crafts performances that feel both relatable and refreshing. His ability to deliver soulful tunes with a modern touch makes every performance engaging, leaving listeners connected and captivated.', portfolioImages: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600', 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600'], portraitVideo: 'https://player.vimeo.com/external/371361761.sd.mp4?s=1e9b85f2c0f2e2b7f1d1d5d5e5d5e5d&profile_id=139&oauth2_token_id=57447761' }
    ];

    let currentLang = 'en';
    const contentDiv = document.getElementById('main-content');
    const dropdownMenu = document.getElementById('artistDropdown');
    const langEn = document.getElementById('lang-en');
    const langHi = document.getElementById('lang-hi');

    function buildDropdown() {
        let html = '<a data-page="artist-list">🎤 All Artists</a>';
        html += '<hr style="border-color:#f97316; margin:0.5rem 0;">';
        artists.forEach(a => {
            html += `<a data-page="artist" data-artist-id="${a.id}">${a.name}</a>`;
        });
        dropdownMenu.innerHTML = html;
    }
    buildDropdown();

    langEn.addEventListener('click', () => {
        currentLang = 'en';
        langEn.classList.add('active');
        langHi.classList.remove('active');
        router();
    });
    langHi.addEventListener('click', () => {
        currentLang = 'hi';
        langHi.classList.add('active');
        langEn.classList.remove('active');
        router();
    });

    function router() {
        const hash = window.location.hash.substring(1);
        if (hash.startsWith('artist-')) {
            const id = hash.split('-')[1];
            loadPage('artist', id);
        } else if (hash === 'artists') {
            loadPage('artist-list');
        } else if (hash === 'services') {
            loadPage('services');
        } else if (hash === 'about') {
            loadPage('about');
        } else if (hash === 'contact') {
            loadPage('contact');
        } else {
            loadPage('home');
        }
    }

    function loadPage(page, artistId = null) {
        let html = '';
        if (page === 'home') html = homePage();
        else if (page === 'services') html = servicesPage();
        else if (page === 'about') html = aboutPage();
        else if (page === 'contact') html = contactPage();
        else if (page === 'artist-list') html = artistListPage();
        else if (page === 'artist' && artistId) {
            const artist = artists.find(a => a.id == artistId);
            html = artist ? artistDetailPage(artist) : '<h2>Artist not found</h2>';
        } else html = homePage();
        contentDiv.innerHTML = html;
        attachNavListeners();
        updateActiveNav(page);
    }

    function homePage() {
        const d = langData[currentLang];
        return `
            <div class="hero-banner">
                <div class="hero-content">
                    <h2>${d.heroTitle}</h2>
                    <p class="hero-tagline">${d.heroTag}</p>
                    <p class="hero-description">${d.heroDesc}</p>
                    <a class="btn" data-page="services">${currentLang==='en'?'EXPLORE SERVICES':'सेवाएं देखें'}</a>
                </div>
            </div>
            <div style="margin-top:4rem;">
                <h2 class="section-title">${d.servicesTitle}</h2>
                <div class="services-grid">
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600" alt="Ad"><div class="content"><h3>Advertisement</h3><p>High-impact TV, digital & social ads.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1579165466742-7b7e894c29c7?w=600" alt="MV"><div class="content"><h3>Music Videos</h3><p>Visually stunning narratives.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600" alt="Prod"><div class="content"><h3>Music Production</h3><p>Recording, mixing & mastering.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600" alt="Lyrics"><div class="content"><h3>Lyrics Writing</h3><p>Top-liners, ghostwriting.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600" alt="Edit"><div class="content"><h3>Video Editing</h3><p>Seamless cuts, VFX, color.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600" alt="Events"><div class="content"><h3>Event Management</h3><p>Full-scale production & logistics.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600" alt="Script"><div class="content"><h3>Script Writing</h3><p>Compelling scripts for films & ads.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600" alt="Direction"><div class="content"><h3>Direction</h3><p>Expert direction for video projects.</p></div></div>
                    <div class="service-card"><img src="https://images.unsplash.com/photo-1511795409834-432e31197aac?w=600" alt="Artist Management"><div class="content"><h3>Artist Management</h3><p>Full artist development, bookings, and career strategy.</p>
                        <a class="btn-outline btn-small" data-page="artist-list">${currentLang==='en'?'Our Artists':'हमारे कलाकार'}</a>
                        <a class="btn-outline btn-small" data-page="contact">${currentLang==='en'?'Contact & Book':'संपर्क और बुकिंग'}</a>
                    </div></div>
                </div>
            </div>
        `;
    }

    function servicesPage() { return homePage(); }

    function aboutPage() {
        return `
            <div class="about-grid">
                <div class="about-text">
                    <h2 class="section-title">${langData[currentLang].aboutTitle}</h2>
                    <p><strong>H8 Media House</strong> ${currentLang==='en'?'is a collective of filmmakers, writers, producers, and event architects. We don’t just execute — we provoke.':'फिल्म निर्माताओं, लेखकों, निर्माताओं और इवेंट आर्किटेक्ट्स का एक समूह है। हम सिर्फ निष्पादित नहीं करते — हम उकसाते हैं।'}</p>
                    <p>${currentLang==='en'?'We put <strong>story writing</strong> at the heart of everything.':'हम <strong>कहानी लेखन</strong> को हर चीज के केंद्र में रखते हैं।'}</p>
                    <div style="margin:2rem 0;">
                        ${['✍️ Story writing','🎥 Screenwriting','🎬 Creative direction','🎚️ Audio engineering','📝 Lyrics','📖 Script doctoring','🎡 Event storytelling','🔥 Brand narrative','📽️ Direction'].map(s => `<span class="skill-badge">${s}</span>`).join('')}
                    </div>
                    <p>${currentLang==='en'?'Based in Delhi NCR with a global mindset.':'दिल्ली एनसीआर में स्थित, वैश्विक सोच के साथ।'}</p>
                </div>
                <div class="about-image"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Team"></div>
            </div>
        `;
    }

    function contactPage() {
        return `
            <h2 class="section-title">${langData[currentLang].contactTitle}</h2>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>h8<span class="orange">.studio</span></h3>
                    <p>${currentLang==='en'?'We’re ready when you are. Hit us up.':'हम आपके लिए तैयार हैं। संपर्क करें।'}</p>
                    <div class="contact-detail">
                        <p><i class="fas fa-map-marker-alt"></i> Delhi NCR, India</p>
                        <p><i class="fas fa-phone-alt"></i> +91 7870455069</p>
                        <p><i class="fas fa-envelope"></i> gyanendra0710@gmail.com</p>
                    </div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-x-twitter"></i></a>
                        <a href="#"><i class="fab fa-soundcloud"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <form action="https://formsubmit.co/gyanendra0710@gmail.com" method="POST">
                        <input type="text" name="name" placeholder="${currentLang==='en'?'your name':'आपका नाम'}" required>
                        <input type="email" name="email" placeholder="email" required>
                        <textarea name="message" placeholder="${currentLang==='en'?'tell us about your vision...':'अपना विजन बताएं...'}" required></textarea>
                        <button type="submit" class="btn">${currentLang==='en'?'send spark':'संदेश भेजें'}</button>
                    </form>
                </div>
            </div>
        `;
    }

    function artistListPage() {
        return `
            <h2 class="section-title">${currentLang==='en'?'our artists':'हमारे कलाकार'}</h2>
            <div class="artists-grid">
                ${artists.map(a => `
                    <div class="artist-card" data-page="artist" data-artist-id="${a.id}">
                        <img src="${a.image}" alt="${a.name}">
                        <h4>${a.name}</h4>
                        <p>${a.type}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function artistDetailPage(artist) {
        return `
            <div class="artist-detail">
                <div class="artist-header">
                    <img src="${artist.image}" alt="${artist.name}">
                    <div class="artist-intro">
                        <h1>${artist.name}</h1>
                        <p class="artist-bio">${artist.bio}</p>
                        <a class="btn" data-page="contact">${currentLang==='en'?'Get a Quote':'कोटा प्राप्त करें'}</a>
                    </div>
                </div>
                <h3 style="color:#f97316; margin:2rem 0 1rem;">${currentLang==='en'?'Performance Videos':'प्रदर्शन वीडियो'}</h3>
                <div class="portfolio-grid">
                    <div class="portfolio-item"><video src="${artist.portraitVideo}" muted loop autoplay playsinline style="width:100%;height:100%;object-fit:cover;"></video></div>
                    ${artist.portfolioImages.map(url => `<div class="portfolio-item"><img src="${url}" alt="portfolio"></div>`).join('')}
                </div>
                <div style="text-align:center; margin:3rem 0;">
                    <a class="btn btn-small" data-page="contact">${currentLang==='en'?'Book '+artist.name:artist.name+' को बुक करें'}</a>
                </div>
            </div>
        `;
    }

    function attachNavListeners() {
        document.querySelectorAll('[data-page]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const page = el.getAttribute('data-page');
                if (page === 'artist') {
                    const id = el.getAttribute('data-artist-id');
                    window.location.hash = id ? `artist-${id}` : 'artists';
                } else if (page === 'artist-list') {
                    window.location.hash = 'artists';
                } else {
                    window.location.hash = page;
                }
            });
        });
        document.querySelectorAll('[data-artist-id]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const id = el.getAttribute('data-artist-id');
                window.location.hash = `artist-${id}`;
            });
        });
    }

    function updateActiveNav(page) {
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        if (page !== 'artist-list' && page !== 'artist') {
            const activeLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
})();
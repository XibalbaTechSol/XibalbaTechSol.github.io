document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const iconMoon = document.querySelector(".icon-moon");
    const iconSun = document.querySelector(".icon-sun");


    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.documentElement.classList.toggle("light-mode");
            if (document.documentElement.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // Navigation Scroll Effect
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            const isActive = hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
        });
        
        // Close menu on link click
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-in').forEach((el) => {
        observer.observe(el);
    });

    // Scrollspy Navigation Highlights
    const sections = document.querySelectorAll("section, header.hero");
    const navItems = document.querySelectorAll(".nav-links a");

    const scrollspyOptions = {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0
    };

    const scrollspyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navItems.forEach(link => {
                    const href = link.getAttribute("href");
                    if (href === `#${id}` || (id === "problem" && href === "#value-prop") || (!id && href === "#")) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, scrollspyOptions);

    sections.forEach(sec => scrollspyObserver.observe(sec));

    // FAQ Accordion Toggle Behavior
    const faqTriggers = document.querySelectorAll(".faq-trigger");
    faqTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const isExpanded = trigger.getAttribute("aria-expanded") === "true";
            const item = trigger.closest(".faq-item");
            const content = item.querySelector(".faq-content");

            // Close all other open items for a clean single-open accordion feel
            faqTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger && otherTrigger.getAttribute("aria-expanded") === "true") {
                    otherTrigger.setAttribute("aria-expanded", "false");
                    otherTrigger.querySelector(".faq-icon").textContent = "+";
                    const otherItem = otherTrigger.closest(".faq-item");
                    otherItem.querySelector(".faq-content").style.maxHeight = "0px";
                    otherItem.classList.remove("faq-active");
                }
            });

            // Toggle current item
            if (isExpanded) {
                trigger.setAttribute("aria-expanded", "false");
                trigger.querySelector(".faq-icon").textContent = "+";
                content.style.maxHeight = "0px";
                item.classList.remove("faq-active");
            } else {
                trigger.setAttribute("aria-expanded", "true");
                trigger.querySelector(".faq-icon").textContent = "−";
                content.style.maxHeight = content.scrollHeight + "px";
                item.classList.add("faq-active");
            }
        });
    });

    // Scenario Card — tap-to-toggle on touch/mobile devices
    const scenarioCards = document.querySelectorAll(".scenario-card");
    scenarioCards.forEach(card => {
        card.addEventListener("click", () => {
            const wasExpanded = card.classList.contains("expanded");
            // Close all other expanded cards
            scenarioCards.forEach(other => other.classList.remove("expanded"));
            // Toggle current card
            if (!wasExpanded) {
                card.classList.add("expanded");
            }
        });
    });

    // ==========================================
    // INTERACTIVE MATHEMATICAL 2D GRAPHS & 3D MANIFOLD
    // ==========================================
    if (typeof Chart !== 'undefined' && typeof THREE !== 'undefined') {

        // State parameters
        let paramVariance = 0.25;
        let paramHgi = 0.85;
        let paramGpuHours = 250;
        let zkEnabled = true;
        let complianceVal = 0.92;

        // Formula calculation helpers
        const getEntropy = (v) => Math.exp(-1.5 * v) * 1000;
        const getGrounding = (h) => h * 1000;
        const getSacrifice = (g) => Math.min(1000, (g / 500) * 1000);
        const getCompliance = (c) => c * 1000;

        const computeCompositeAis = (v, h, g, c, zk) => {
            const sE = getEntropy(v);
            const sG = getGrounding(h);
            const sS = getSacrifice(g);
            const sC = getCompliance(c);
            const zkB = zk ? 1.08 : 1.0;
            const base = (sE * 0.50) + (sG * 0.20) + (sS * 0.15) + (sC * 0.15);
            return Math.min(1000, Math.round(base * zkB));
        };

        const getTierDetails = (score) => {
            if (score >= 850) return { label: 'TIER 3 — INSTITUTIONAL (TEE BOUND)', color: '#10B981' };
            if (score >= 700) return { label: 'TIER 2 — LINKED CREDIT READY', color: '#3B82F6' };
            return { label: 'TIER 1 — SOVEREIGN (PSEUDONYMOUS)', color: '#94A3B8' };
        };

        // --- 1. ENTROPY 2D CHART ---
        const entropyCanvas = document.getElementById('entropyChartCanvas');
        let entropyChart = null;
        if (entropyCanvas) {
            const vLabels = [];
            const vData = [];
            for (let v = 0; v <= 1.0; v += 0.02) {
                vLabels.push(v.toFixed(2));
                vData.push(Math.round(getEntropy(v)));
            }

            entropyChart = new Chart(entropyCanvas, {
                type: 'line',
                data: {
                    labels: vLabels,
                    datasets: [
                        {
                            label: 'Entropy Score (S_entropy)',
                            data: vData,
                            borderColor: '#3B82F6',
                            borderWidth: 2,
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.3,
                            pointRadius: 0,
                            pointHoverRadius: 4
                        },
                        {
                            label: 'Active Point',
                            data: vLabels.map(l => parseFloat(l) === paramVariance ? Math.round(getEntropy(paramVariance)) : null),
                            borderColor: '#60A5FA',
                            backgroundColor: '#60A5FA',
                            pointRadius: 6,
                            pointHoverRadius: 8,
                            showLine: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: true } },
                    scales: {
                        x: { display: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8', font: { size: 9 } } },
                        y: { display: true, min: 0, max: 1000, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8', font: { size: 9 } } }
                    }
                }
            });
        }

        // --- 2. GROUNDING 2D CHART ---
        const groundingCanvas = document.getElementById('groundingChartCanvas');
        let groundingChart = null;
        if (groundingCanvas) {
            const hLabels = ['0.0', '0.2', '0.4', '0.6', '0.8', '1.0'];
            const hData = hLabels.map(h => parseFloat(h) * 1000);

            groundingChart = new Chart(groundingCanvas, {
                type: 'line',
                data: {
                    labels: hLabels,
                    datasets: [
                        {
                            label: 'Grounding Score (S_grounding)',
                            data: hData,
                            borderColor: '#EC4899',
                            borderWidth: 2,
                            backgroundColor: 'rgba(236, 72, 153, 0.1)',
                            fill: true,
                            tension: 0,
                            pointRadius: 0
                        },
                        {
                            label: 'Active Point',
                            data: hLabels.map(l => Math.abs(parseFloat(l) - paramHgi) < 0.1 ? Math.round(getGrounding(paramHgi)) : null),
                            borderColor: '#F472B6',
                            backgroundColor: '#F472B6',
                            pointRadius: 6,
                            showLine: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8', font: { size: 9 } } },
                        y: { display: true, min: 0, max: 1000, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8', font: { size: 9 } } }
                    }
                }
            });
        }

        // --- 3. SACRIFICE 2D CHART ---
        const sacrificeCanvas = document.getElementById('sacrificeChartCanvas');
        let sacrificeChart = null;
        if (sacrificeCanvas) {
            const gLabels = ['0', '100', '250', '500', '750', '1000'];
            const gData = gLabels.map(g => getSacrifice(parseInt(g, 10)));

            sacrificeChart = new Chart(sacrificeCanvas, {
                type: 'line',
                data: {
                    labels: gLabels,
                    datasets: [
                        {
                            label: 'Sacrifice Score (S_sacrifice)',
                            data: gData,
                            borderColor: '#F59E0B',
                            borderWidth: 2,
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            fill: true,
                            tension: 0.1,
                            pointRadius: 0
                        },
                        {
                            label: 'Active Point',
                            data: gLabels.map(l => Math.abs(parseInt(l, 10) - paramGpuHours) < 100 ? getSacrifice(paramGpuHours) : null),
                            borderColor: '#FBBF24',
                            backgroundColor: '#FBBF24',
                            pointRadius: 6,
                            showLine: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8', font: { size: 9 } } },
                        y: { display: true, min: 0, max: 1000, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8', font: { size: 9 } } }
                    }
                }
            });
        }

        // --- 4. THREE.JS 3D COMPOSITE MANIFOLD ---
        const canvas3d = document.getElementById('ais3dCanvas');
        let scene, camera, renderer, surfaceMesh, activePointMesh, controls;

        if (canvas3d) {
            const width = canvas3d.clientWidth || 700;
            const height = canvas3d.clientHeight || 420;

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x070a12);

            camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
            camera.position.set(18, 14, 22);

            renderer = new THREE.WebGLRenderer({ canvas: canvas3d, antialias: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            if (typeof THREE.OrbitControls !== 'undefined') {
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.05;
            }

            // Grid Helpers & Axis Lines
            const gridHelper = new THREE.GridHelper(20, 20, 0x3b82f6, 0x1e293b);
            gridHelper.position.y = 0;
            scene.add(gridHelper);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
            scene.add(ambientLight);
            const dirLight = new THREE.DirectionalLight(0x3b82f6, 1.2);
            dirLight.position.set(10, 20, 15);
            scene.add(dirLight);

            // Generate Parametric 3D Manifold Surface Geometry
            // X: Variance (0 to 1 -> map -8 to 8)
            // Y: HGI (0 to 1 -> map -8 to 8)
            // Z: AIS (0 to 1000 -> map 0 to 12 height)
            const segments = 35;
            const geom = new THREE.PlaneGeometry(16, 16, segments, segments);
            geom.rotateX(-Math.PI / 2); // Make flatXZ

            const pos = geom.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                const px = pos.getX(i); // range -8 to 8
                const pz = pos.getZ(i); // range -8 to 8

                // Normalize x and z to 0 -> 1
                const vNorm = (px + 8) / 16; // Variance σ²
                const hNorm = (pz + 8) / 16; // HGI

                const ais = computeCompositeAis(vNorm, hNorm, paramGpuHours, complianceVal, zkEnabled);
                const py = (ais / 1000) * 10; // Height 0 -> 10

                pos.setY(i, py);
            }
            geom.computeVertexNormals();

            const mat = new THREE.MeshPhongMaterial({
                color: 0x3b82f6,
                wireframe: true,
                transparent: true,
                opacity: 0.6,
                side: THREE.DoubleSide
            });

            surfaceMesh = new THREE.Mesh(geom, mat);
            scene.add(surfaceMesh);

            // Active State 3D Sphere Marker
            const sphereGeom = new THREE.SphereGeometry(0.5, 16, 16);
            const sphereMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
            activePointMesh = new THREE.Mesh(sphereGeom, sphereMat);
            scene.add(activePointMesh);

            // Function to sync 3D active marker position
            const update3DMarker = () => {
                if (!activePointMesh) return;
                const px = (paramVariance * 16) - 8;
                const pz = (paramHgi * 16) - 8;
                const ais = computeCompositeAis(paramVariance, paramHgi, paramGpuHours, complianceVal, zkEnabled);
                const py = (ais / 1000) * 10;
                activePointMesh.position.set(px, py, pz);
            };
            update3DMarker();

            // Render Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);
                if (controls) controls.update();
                renderer.render(scene, camera);
            };
            animate();

            // Handle Canvas Resize
            window.addEventListener('resize', () => {
                if (!canvas3d) return;
                const w = canvas3d.clientWidth;
                const h = canvas3d.clientHeight;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            });
        }

        // --- 5. DOM SLIDER EVENT LISTENERS ---
        const varSlider = document.getElementById('entropyVarSlider');
        const varValSpan = document.getElementById('entropyVarVal');
        const entOutSpan = document.getElementById('entropyScoreOut');

        const hgiSlider = document.getElementById('groundingSlider');
        const hgiValSpan = document.getElementById('groundingVal');
        const grdOutSpan = document.getElementById('groundingScoreOut');

        const gpuSlider = document.getElementById('gpuHoursSlider');
        const gpuValSpan = document.getElementById('gpuHoursVal');
        const sacOutSpan = document.getElementById('sacrificeScoreOut');

        const compositeBadge = document.getElementById('compositeAisBadge');
        const compositeTierLabel = document.getElementById('compositeTierLabel');

        const updateAllMathViews = () => {
            // Calculate outputs
            const sE = Math.round(getEntropy(paramVariance));
            const sG = Math.round(getGrounding(paramHgi));
            const sS = Math.round(getSacrifice(paramGpuHours));
            const composite = computeCompositeAis(paramVariance, paramHgi, paramGpuHours, complianceVal, zkEnabled);
            const tier = getTierDetails(composite);

            // Update DOM text
            if (varValSpan) varValSpan.textContent = paramVariance.toFixed(2);
            if (entOutSpan) entOutSpan.textContent = sE;

            if (hgiValSpan) hgiValSpan.textContent = paramHgi.toFixed(2);
            if (grdOutSpan) grdOutSpan.textContent = sG;

            if (gpuValSpan) gpuValSpan.textContent = `${paramGpuHours} hrs`;
            if (sacOutSpan) sacOutSpan.textContent = sS;

            if (compositeBadge) compositeBadge.innerHTML = `${composite} <span style="font-size: 0.9rem; color: var(--text-muted);">/ 1000</span>`;
            if (compositeTierLabel) {
                compositeTierLabel.textContent = tier.label;
                compositeTierLabel.style.color = tier.color;
            }

            // Update 2D Active Points
            if (entropyChart) {
                entropyChart.data.datasets[1].data = entropyChart.data.labels.map(l => Math.abs(parseFloat(l) - paramVariance) < 0.015 ? sE : null);
                entropyChart.update('none');
            }
            if (groundingChart) {
                groundingChart.data.datasets[1].data = groundingChart.data.labels.map(l => Math.abs(parseFloat(l) - paramHgi) < 0.1 ? sG : null);
                groundingChart.update('none');
            }
            if (sacrificeChart) {
                sacrificeChart.data.datasets[1].data = sacrificeChart.data.labels.map(l => Math.abs(parseInt(l, 10) - paramGpuHours) < 100 ? sS : null);
                sacrificeChart.update('none');
            }

            // Update 3D Surface & Active Marker
            if (surfaceMesh) {
                const pos = surfaceMesh.geometry.attributes.position;
                for (let i = 0; i < pos.count; i++) {
                    const px = pos.getX(i);
                    const pz = pos.getZ(i);
                    const vNorm = (px + 8) / 16;
                    const hNorm = (pz + 8) / 16;
                    const ais = computeCompositeAis(vNorm, hNorm, paramGpuHours, complianceVal, zkEnabled);
                    pos.setY(i, (ais / 1000) * 10);
                }
                surfaceMesh.geometry.attributes.position.needsUpdate = true;
                surfaceMesh.geometry.computeVertexNormals();
            }
            if (activePointMesh) {
                const px = (paramVariance * 16) - 8;
                const pz = (paramHgi * 16) - 8;
                const py = (composite / 1000) * 10;
                activePointMesh.position.set(px, py, pz);
            }
        };

        if (varSlider) {
            varSlider.addEventListener('input', (e) => {
                paramVariance = parseFloat(e.target.value);
                updateAllMathViews();
            });
        }
        if (hgiSlider) {
            hgiSlider.addEventListener('input', (e) => {
                paramHgi = parseFloat(e.target.value);
                updateAllMathViews();
            });
        }
        if (gpuSlider) {
            gpuSlider.addEventListener('input', (e) => {
                paramGpuHours = parseInt(e.target.value, 10);
                updateAllMathViews();
            });
        }
    }
});

const produseCatalog = [
    {
        id: 1,
        titru: "Telestrations 8 Player 2nd Edition Board Game, Award Winning Hilarious and Unpredictable Must Have Party Game with a New Look, Sketch What Your Read Then Guess What You Saw, 4-8 Players, Ages 10+",
        imagine: "telestrations1.webp",
        pret: "600 MDL",
        inStoc: true,
        categorie: "party",
        descriere: ` LAUGH-OUT-LOUD GAMEPLAY: Draw what you read,
         guess what you saw—laugh out loud fun guaranteed every round! 
         NEW LOOK, SAME CLASSIC FUN: Fresh design and updated prompts for
          even more unpredictable hilarity. 2,000+ CARD PROMPTS: A mix of 
          new and classic phrases keeps each game fresh and endlessly replayable.
          GREAT FOR GROUPS: Perfect for parties, family nights, 
          and game sessions with 4–8 players ages 10+.EASY TO LEARN, HARD TO STOP: 
          The worse your drawing, the funnier the game—no artistic skill required! `
    },
    {
        id: 2,
        titru: "Ticket to Ride Board Game - A Cross-Country Train Adventure for Friends and Family! Strategy Game for Kids & Adults, Ages 8+, 2-5 Players, 30-60 Minute Playtime, Made by Days of Wonder",
        imagine: "Ticket.jpg",
        pret: "1200 MDL",
        inStoc: true,
        categorie: "strategii",
        descriere: `Cardboard FAST-PACED STRATEGY: Race to build your train routes across iconic American cities in this award-winning board game.
                    COMPETITIVE FUN: Challenge friends and family in a 2-5 player game, where every move counts.
                    COLLECT TRAIN CARDS: Strategically gather train cards to claim routes and earn points.
                    TICKET TO SUCCESS: Plan your routes wisely with ticket cards for bonus points.
                    ENDLESS REPLAYABILITY: Enjoy hours of entertainment with this classic board game. `
    },
    {
        id: 3,
        titru: "Asmodee Takenoko Board Game, 2-4 Players, 8+ Years, Italian Edition",
        imagine: "takenoko.webp",
        pret: "750 MDL",
        inStoc: false,
        categorie: "copii",
        descriere: `A long time ago, the Emperor of China gave the Emperor of Japan a great panda, as a symbol of peace; your delicate mission is to care for the animal by running a bamboo plantation
                    Therefore, you need to cultivate soil, irrigate and grow bamboo, but pay attention to the sacred animal and its insatiable goodies for the crunchy stem of the plant
                    The player who grows more bamboo, best managing his grounds and feeding the foodie panda in the meantime, will win the game
                    Contains 28 soils, 90 bamboo sections, 20 irrigation channels, 9 upgrades, 46 cards, 4 planks, 8 tokens, 1 dice, 1 panda, 1 gardener and rules
                    Number of players: 2-4; Recommended age: 8+; Average duration: 45 min; English edition`
    },
     {
        id: 4,
        titlu: "Charterstone",
        imagine: "Chartersrone.jpg",
        pret: 1200,
        inStoc: true,
        categorie: "strategii",
        descriere: "O campanie de strategie de tip legacy unde construiești un sat permanent de-a lungul mai multor partide."
    },
    {
        id: 5,
        titlu: "Dixit",
        imagine: "Dixit.jpg",
        pret: 620,
        inStoc: true,
        categorie: "party",
        descriere: "Folosește-ți imaginația și intuiția. Un joc poetic unde o imagine ascunsă face cât o mie de cuvinte."
    },
    {
        id: 6,
        titlu: "Mousetrap",
        imagine: "Mousetrap.webp",
        pret: 450,
        inStoc: false,
        categorie: "copii",
        descriere: "Construiește o cursă de șoareci complexă și amuzantă, plină de reacții în lanț."
    },
    {
        id: 7,
        titlu: "Monopoly",
        imagine: "Monopoly.webp",
        pret: 590,
        inStoc: true,
        categorie: "strategii",
        descriere: "Tranzacționează proprietăți, acumulează monopoluri și falimentează-ți prietenii în cel mai clasic joc din lume."
    },
    {
        id: 8,
        titlu: "Cover Kingdom",
        imagine: "CoverKingdom.webp",
        pret: 680,
        inStoc: true,
        categorie: "party",
        descriere: "Condu-ți regatul cu înțelepciune și protejează-ți teritoriile de invaziile inamice."
    },
    {
        id: 9,
        titlu: "Sushi Go!",
        imagine: "sushigo.webp",
        pret: 320,
        inStoc: true,
        categorie: "party",
        descriere: "Un joc rapid de cărți de tip draft, unde scopul tău este să creezi cea mai delicioasă combinație de sushi."
    },
    {
        id: 10,
        titlu: "Just One",
        imagine: "justone.webp",
        pret: 420,
        inStoc: true,
        categorie: "party",
        descriere: "Un joc de cuvinte cooperativ extraordinar! Oferiți indicii unice pentru a-l ajuta pe coechipier să ghicească."
    },
    {
        id: 11,
        titlu: "Sur Tokens",
        imagine: "surtokens.webp",
        pret: 180,
        inStoc: true,
        categorie: "copii",
        descriere: "Set de jetoane premium pentru a îmbunătăți experiența vizuală și tactilă a jocurilor tale preferate."
    },
    {
        id: 12,
        titlu: "Bags of Gold",
        imagine: "bags.webp",
        pret: 240,
        inStoc: false,
        categorie: "copii",
        descriere: "Săculeți textili calitativi pentru stocarea și organizarea zarurilor și componentelor mici din cutii."
    },
    {
        id: 13,
        titlu: "Kin Tokens",
        imagine: "kintokens.webp",
        pret: 190,
        inStoc: true,
        categorie: "copii",
        descriere: "Componente și jetoane tematice suplimentare pentru fanii extinderilor și personalizărilor de nișă."
    },
    {
        id: 14,
        titlu: "Ice Dice",
        imagine: "icedice.webp",
        pret: 150,
        inStoc: true,
        categorie: "strategii",
        descriere: "Un set de zaruri translucide cu reflexii de gheață, gata să aducă noroc la următoarea aruncare."
    },
    {
        id: 15,
        titlu: "Sakura Dice",
        imagine: "sakuradice.webp",
        pret: 160,
        inStoc: true,
        categorie: "strategii",
        descriere: "Zaruri de colecție cu design elegant inspirat de florile de cireș japoneze."
    },
    {
        id: 16,
        titlu: "Wooden Barrels",
        imagine: "barrels.webp",
        pret: 210,
        inStoc: true,
        categorie: "copii",
        descriere: "Butoaie miniaturale din lemn pentru a înlocui jetoanele de carton în jocurile economice sau de strategie medievală."
    },
    {
        id: 17,
        titlu: "Flex Cards",
        imagine: "flexcard.webp",
        pret: 290,
        inStoc: true,
        categorie: "party",
        descriere: "Pachet de cărți flexibile și rezistente la uzură, ideale pentru sesiuni intense de joc."
    },
    {
        id: 18,
        titlu: "Mystery Box",
        imagine: "box.webp",
        pret: 990,
        inStoc: true,
        categorie: "strategii",
        descriere: "O cutie misterioasă ce conține un board game secret și accesorii surpriză cu valoare garantată."
    }
];

document.body.addEventListener('click', function(e) {
    const button = e.target.closest('#cont');
    if (button && button.querySelector('img').getAttribute('alt') === 'Cart') {
        const idProdus = parseInt(button.dataset.id);
        const produsGasit = produseCatalog.find(p => p.id === idProdus);
        
        if (produsGasit) {
            let cos = JSON.parse(localStorage.getItem('cosCumparaturi')) || [];
            const produsExistent = cos.find(item => item.id === idProdus);
            
            if (produsExistent) {
                produsExistent.cantitate += 1;
            } else {
                cos.push({ ...produsGasit, cantitate: 1 });
            }
            localStorage.setItem('cosCumparaturi', JSON.stringify(cos));
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.querySelector('.cos');
    const subtotalEl = document.querySelectorAll('.serif-price')[0];
    const shippingEl = document.querySelectorAll('.serif-price')[1];
    const totalEl = document.querySelector('.total-price');
    const COST_LIVRARE = 50; 
    const prodContainer = document.querySelector('.prod');
    const filterBox = document.querySelector('.filter');

    function afiseazaCos() {
        let cos = JSON.parse(localStorage.getItem('cosCumparaturi')) || [];
        if (!cartContainer) return;

        if (cos.length === 0) {
            cartContainer.innerHTML = '<p style="text-align:center; color:#888; font-style:italic; padding:20px;">Coșul tău este gol.</p>';
            actualizeazaRezumat(0, 0);
            return;
        }

        let htmlConstruct = '';
        let subtotal = 0;

        cos.forEach(produs => {
            const pretCurat = typeof produs.pret === 'string' ? parseInt(produs.pret.replace(/[^0-9]/g, ''), 10) : produs.pret;
            const pretNumar = parseInt(pretCurat, 10) || 0;
            const cantitate = Number(produs.cantitate) || 1;
            const totalProdus = pretNumar * cantitate;
            subtotal += totalProdus;
            
            const textDescriere = produs.descriere || 'Descriere joc...';
            const descriereScurta = textDescriere.length > 100 ? textDescriere.substring(0, 100) + '...' : textDescriere;

            htmlConstruct += `
                <div class="cart-item-card">
                    <div class="product-thumb-container">
                        <img src="${produs.imagine}" class="product-thumb" alt="${produs.titlu || produs.titru || 'Produs'}">
                    </div>
                    <div class="item-details">
                        <div class="item-header">
                            <p class="item-description">${descriereScurta}</p>
                            <button class="remove-item-btn" data-id="${produs.id}">🗑 Sterge din cos</button>
                        </div>
                        <div class="item-footer">
                            <p class="item-price">Pret: ${pretNumar} lei</p>
                            <div class="quantity-selector">
                                <button class="qty-btn minus-btn" data-id="${produs.id}">-</button>
                                <span class="qty-number">${cantitate}</span>
                                <button class="qty-btn plus-btn" data-id="${produs.id}">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        cartContainer.innerHTML = htmlConstruct;
        actualizeazaRezumat(subtotal, COST_LIVRARE);
    }

    function actualizeazaRezumat(subtotal, shipping) {
        const subtotalValid = Number(subtotal) || 0;
        const shippingValid = subtotalValid > 0 ? (Number(shipping) || 0) : 0;
        const totalValid = subtotalValid + shippingValid;

        if (subtotalEl) subtotalEl.innerText = `${subtotalValid} lei`;
        if (shippingEl) shippingEl.innerText = `${shippingValid} lei`;
        if (totalEl) totalEl.innerText = `${totalValid} lei`;
    }

    function genereazaCatalogHtml(listaProduse) {
        if (!prodContainer) return;
        prodContainer.innerHTML = ''; 
        if (listaProduse.length === 0) {
            prodContainer.innerHTML = '<p style="grid-column: span 3; text-align:center; padding: 40px; color: #888;">Niciun produs nu corespunde filtrelor.</p>';
            return;
        }

        let catalogHtmlConstruct = '';
        listaProduse.forEach(produs => {
            let numeOriginal = produs.titlu || produs.titru || "Produs fără nume";
            let descriereScurtaNume = numeOriginal.length > 30 ? numeOriginal.slice(0, 30) + '...' : numeOriginal;
            const pretAfisat = String(produs.pret).includes('MDL') ? produs.pret : `${produs.pret} MDL`;

            catalogHtmlConstruct += `
                <div class="container">
                    <a href="ProductDetailPage.html?id=${produs.id}">
                        <img src="${produs.imagine}" class="product-image" width="150px">
                    </a>
                    <div class="description">
                        <div class="text-column">
                            <a href="ProductDetailPage.html?id=${produs.id}" style="text-decoration: none; color: inherit;">
                                <p class="prod-title" title="${numeOriginal}">${descriereScurtaNume}</p>
                            </a>
                            <p class="prod-price">${pretAfisat}</p>
                        </div>
                        <div class="icon-column">
                            <button id="cont" class="btn-wishlist" data-id="${produs.id}"><img src="heart.png" width="20px" alt="Wishlist"></button>
                            <button id="cont" class="btn-cart" data-id="${produs.id}"><img src="basket1.png" width="20px" alt="Cart"></button>
                        </div>
                    </div>
                </div>
            `;
        });
        prodContainer.innerHTML = catalogHtmlConstruct;
    }

    function ruleazaFiltrele() {
        if (!filterBox) return;
        const stocDaBifat = filterBox.querySelector('.filter-text-left p:nth-of-type(1) input').checked;
        const stocNuBifat = filterBox.querySelector('.filter-text-left p:nth-of-type(2) input').checked;
        const deLaPretVal = filterBox.querySelector('.price-row input[placeholder="De la"]').value;
        const panaLaPretVal = filterBox.querySelector('.price-row input[placeholder="Pana la"]').value;
        const minimPret = deLaPretVal ? parseFloat(deLaPretVal) : 0;
        const maximPret = panaLaPretVal ? parseFloat(panaLaPretVal) : Infinity;
        const cutieCategorii = filterBox.querySelectorAll('.type-row input[type="checkbox"]');
        
        let tipuriBifate = [];
        const hartaCategorii = { 'Strategii': 'strategii', 'Pentru Copii': 'copii', 'Party Games': 'party' };
        
        cutieCategorii.forEach(casuta => {
            if (casuta.checked) {
                const numeCategorieText = casuta.parentElement.textContent.trim();
                if (hartaCategorii[numeCategorieText]) {
                    tipuriBifate.push(hartaCategorii[numeCategorieText]);
                }
            }
        });

        let catalogFiltrat = produseCatalog.filter(produs => {
            const pretNumarCurat = typeof produs.pret === 'string' ? parseInt(produs.pret.replace(/[^0-9]/g, ''), 10) : produs.pret;
            if (stocDaBifat && !stocNuBifat && !produs.inStoc) return false;
            if (!stocDaBifat && stocNuBifat && produs.inStoc) return false;
            if (!stocDaBifat && !stocNuBifat) return false;
            if (pretNumarCurat < minimPret || pretNumarCurat > maximPret) return false;
            if (tipuriBifate.length > 0 && !tipuriBifate.includes(produs.categorie)) return false;
            return true;
        });

        genereazaCatalogHtml(catalogFiltrat);
    }

    if (cartContainer) {
        cartContainer.addEventListener('click', function(e) {
            let cos = JSON.parse(localStorage.getItem('cosCumparaturi')) || [];
            const button = e.target.closest('button');
            if (!button) return;
            const idProdus = parseInt(button.dataset.id);
            const produsIndex = cos.findIndex(item => item.id === idProdus);

            if (produsIndex !== -1) {
                if (button.classList.contains('remove-item-btn')) {
                    cos.splice(produsIndex, 1);
                } else if (button.classList.contains('minus-btn')) {
                    if (cos[produsIndex].cantitate > 1) {
                        cos[produsIndex].cantitate -= 1;
                    } else {
                        cos.splice(produsIndex, 1);
                    }
                } else if (button.classList.contains('plus-btn')) {
                    cos[produsIndex].cantitate = (cos[produsIndex].cantitate || 1) + 1;
                }
                localStorage.setItem('cosCumparaturi', JSON.stringify(cos));
                afiseazaCos();
            }
        });
    }

    const clearCartBtn = document.querySelector('.clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm("Golești complet coșul?")) {
                localStorage.removeItem('cosCumparaturi');
                afiseazaCos();
            }
        });
    }

    if (filterBox) {
        filterBox.addEventListener('input', ruleazaFiltrele);
    }

    afiseazaCos();
    ruleazaFiltrele();

    const titluDetalii = document.getElementById('description1');
    const descriereDetalii = document.getElementById('description');
    const imaginePrincipala = document.getElementById('main-image');
    const containerAdaugaCos = document.querySelector('#i button');

    if (titluDetalii && descriereDetalii) { 
        const parametriUrl = new URLSearchParams(window.location.search);
        const idProdusSelectat = parseInt(parametriUrl.get('id'), 10);
        const jocGasit = produseCatalog.find(p => p.id === idProdusSelectat);
        
        if (jocGasit) {
            titluDetalii.innerText = jocGasit.titlu || jocGasit.titru || "Nume indisponibil";
            descriereDetalii.innerText = jocGasit.descriere || "Acest joc nu are încă o descriere detaliată.";
            if (imaginePrincipala) {
                imaginePrincipala.innerHTML = `<img src="${jocGasit.imagine}" width="100%" style="border-radius: 8px;">`;
            }
            const miniaturiId = ['#st-image', '#nd-image', '#rd-image', '#th-image'];
            miniaturiId.forEach(id => {
                const el = document.querySelector(id);
                if (el) el.innerHTML = `<img src="${jocGasit.imagine}" width="100%" style="opacity: 0.6; cursor: pointer;">`;
            });
            if (containerAdaugaCos) {
                containerAdaugaCos.dataset.id = jocGasit.id;
                containerAdaugaCos.classList.add('btn-cart'); 
            }
        } else {
            titluDetalii.innerText = "Produsul nu a fost găsit";
            descriereDetalii.innerText = "Ne cerem scuze, dar jocul căutat nu există în catalogul nostru.";
        }
    }
    function afiseazaEroareInput(inputElement, mesajNou) {
        if (!inputElement) return;
                if (!inputElement.dataset.originalPlaceholder) {
            inputElement.dataset.originalPlaceholder = inputElement.placeholder || "";
        }
        inputElement.value = "";
        inputElement.placeholder = mesajNou;
        inputElement.style.borderColor = '#e74c3c';
        inputElement.style.backgroundColor = '#fdf2f2';
        inputElement.onclick = function() {
            resetBlankInput(inputElement);
        };
    }

    function resetBlankInput(inputElement) {
        if (!inputElement) return;
        if (inputElement.dataset.originalPlaceholder !== undefined) {
            inputElement.placeholder = inputElement.dataset.originalPlaceholder;
        }
        inputElement.style.borderColor = '';
        inputElement.style.backgroundColor = '';
    }
    const loginCard = document.querySelector('.login-card');
    if (loginCard) {
        const emailInput = loginCard.querySelector('input[type="email"]');
        const passwordInput = loginCard.querySelector('input[type="password"]');
        const btnLogare = loginCard.querySelector('.button-group a');
        const btnInregistrare = loginCard.querySelectorAll('.btn')[1];

        function valideazaLogin() {
            const email = emailInput ? emailInput.value.trim() : "";
            const parola = passwordInput ? passwordInput.value.trim() : "";
            let esteValid = true;

            if (emailInput) resetBlankInput(emailInput);
            if (passwordInput) resetBlankInput(passwordInput);

            if (email === "") {
                afiseazaEroareInput(emailInput, "Email-ul este obligatoriu!");
                esteValid = false;
            } else if (!email.includes("@") || !email.includes(".")) {
                afiseazaEroareInput(emailInput, "Introduceți un email valid!");
                esteValid = false;
            }

            if (parola === "") {
                afiseazaEroareInput(passwordInput, "Parola este obligatorie!");
                esteValid = false;
            } else if (parola.length < 6) {
                afiseazaEroareInput(passwordInput, "Minim 6 caractere!");
                esteValid = false;
            }

            return esteValid;
        }

        if (btnLogare) {
            btnLogare.addEventListener('click', function(e) {
                if (!valideazaLogin()) {
                    e.preventDefault(); 
                }
            });
        }

        if (btnInregistrare) {
            btnInregistrare.addEventListener('click', function() {
                if (valideazaLogin()) {
                    alert("Înregistrare reușită! Acum te poți loga.");
                }
            });
        }
    }
    const orderBtn = document.querySelector('.place-order-btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            const inputNume = document.querySelector('input[placeholder="Nume Prenume"]');
            const inputTelefon = document.querySelector('input[placeholder*="Telefon"]');
            const inputEmail = document.querySelector('.form-section input[placeholder="Email"]');
            const inputStrada = document.querySelector('input[placeholder="Strada"]');
            const inputApartament = document.querySelector('input[placeholder*="Apartamentul"]');

            const toateInputurile = [inputNume, inputTelefon, inputEmail, inputStrada, inputApartament];
            toateInputurile.forEach(input => { if(input) resetBlankInput(input); });

            let areErori = false;
            let primulInputCuEroare = null;

            function verificaCampNou(inputElement, conditie, mesajEroare) {
                if (inputElement && conditie) {
                    afiseazaEroareInput(inputElement, mesajEroare);
                    areErori = true;
                    if (!primulInputCuEroare) primulInputCuEroare = inputElement;
                }
            }

            if (inputNume) {
                verificaCampNou(inputNume, inputNume.value.trim() === "", "Numele este obligatoriu!");
            }
            if (inputTelefon) {
                const telefonVal = inputTelefon.value.trim();
                const doarCifre = telefonVal.replace(/[^0-9]/g, '');
                if (telefonVal === "") {
                    verificaCampNou(inputTelefon, true, "Introduceți numărul de telefon!");
                } else if (doarCifre.length < 8) {
                    verificaCampNou(inputTelefon, true, "Număr prea scurt (ex: 06XXXXXXXX)!");
                }
            }
            if (inputEmail) {
                const emailVal = inputEmail.value.trim();
                if (emailVal === "") {
                    verificaCampNou(inputEmail, true, "Email obligatoriu!");
                } else if (!emailVal.includes("@") || !emailVal.includes(".")) {
                    verificaCampNou(inputEmail, true, "Adresă email invalidă!");
                }
            }
            if (inputStrada) {
                verificaCampNou(inputStrada, inputStrada.value.trim() === "", "Introduceți strada!");
            }
            if (inputApartament) {
                verificaCampNou(inputApartament, inputApartament.value.trim() === "", "Introduceți numărul clădirii/ap!");
            }

            if (areErori) {
                if (primulInputCuEroare) primulInputCuEroare.focus();
                return;
            }
            let cosCurent = JSON.parse(localStorage.getItem('cosCumparaturi')) || [];
            if (cosCurent.length === 0) {
                alert("Nu poți plasa o comandă cu coșul gol. Adaugă produse în coș mai întâi!");
                return;
            }

            alert("Comanda a fost plasată cu succes! Vă mulțumim!");
            localStorage.removeItem('cosCumparaturi'); 
            window.location.href = "HomePage.html"; 
        });
    }
});
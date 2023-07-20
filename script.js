const cocktails = document.querySelectorAll('.img-flex-container img');
const wrapper = document.querySelector('#wrapper1');
const active = document.querySelector('#active');
const nav = document.querySelector('ul');
const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const img = document.querySelector('.rotate');

cocktails.forEach(cocktail => {
  cocktail.addEventListener('click', change);
})

function change(e){
  if (e.target.alt === "citron celeste") {
    wrapper.classList.remove(wrapper.classList.value);
    wrapper.classList.add('citron');
    active.classList.remove(active.classList.value);
    active.classList.add('active-white');
    nav.classList.remove(nav.classList.value);
    nav.classList.add('black');
    btn.classList.remove(btn.classList.value);
    btn.classList.add('citron-btn');
    h1.style.color = "black";
    h2.textContent = "Citron Céleste";
    h2.style.color = "black";
    p1.innerHTML = "Le <strong>Citron Céleste</strong> est servi dans une coupe en cristal taillé d'une transparence éclatante. Son apparence cristalline est sublimée par une fine tranche de <strong>citron ciselée</strong>, déposée avec délicatesse sur le rebord du verre, ajoutant une touche de sophistication.";
    p1.style.color = "black";
    p2.innerHTML = "Préparé avec expertise par nos <strong>mixologues chevronnés</strong>, ce cocktail met en valeur les saveurs vives et acidulées du citron. Ils utilisent des <strong>citrons frais</strong>, soigneusement pressés pour en extraire le jus le plus pur, et ajoutent une touche de sirop de sucre pour équilibrer l'acidité naturelle du fruit";
    p2.style.color = "black";
    img.src = "Img/citron-celeste.png";
  }
  else if (e.target.alt === "ruby Royal") {
    wrapper.classList.remove(wrapper.classList.value);
    wrapper.classList.add('ruby');
    active.classList.remove(active.classList.value);
    active.classList.add('active');
    nav.classList.remove(nav.classList.value);
    nav.classList.add('white');
    btn.classList.remove(nav.classList.value);
    h1.style.color = "white";
    btn.classList.remove(btn.classList.value);
    btn.classList.add('ruby-btn');
    h2.textContent = "Ruby Royal";
    h2.style.color = "white";
    p1.innerHTML = "Le <strong>Rubis Royal</strong> se présente dans une coupe en cristal taillé, ornée d'une fine bordure dorée, accentuant ainsi son allure somptueuse. À l'intérieur, vous découvrirez un mélange harmonieux de framboises fraîchement cueillies, de <strong>fraises juteuses</strong> et de <strong>mûres sucrées</strong>, offrant une palette de couleurs éclatantes.";
    p1.style.color = "white";
    p2.innerHTML = "Le cocktail est préparé avec soin par nos <strong>mixologues talentueux</strong>, qui ajoutent une touche de <strong>liqueur de cassis</strong> pour rehausser les saveurs des fruits rouges. Ils garnissent ensuite le verre d'une fine tranche de <strong>zeste de citron</strong> pour apporter une note de fraîcheur subtile.";
    p2.style.color = "white";
    img.src = "Img/ruby-royal.png";
  }
  else if (e.target.alt === "velours pourpre") {
    wrapper.classList.remove(wrapper.classList.value);
    wrapper.classList.add('ruby');
    active.classList.remove(active.classList.value);
    active.classList.add('active');
    nav.classList.remove(nav.classList.value);
    nav.classList.add('white');
    btn.classList.remove(nav.classList.value);
    h1.style.color = "white";
    btn.classList.add('ruby-btn');
    h2.textContent = "Ruby Royal";
    h2.style.color = "white";
    p1.innerHTML = "Le <strong>Rubis Royal</strong> se présente dans une coupe en cristal taillé, ornée d'une fine bordure dorée, accentuant ainsi son allure somptueuse. À l'intérieur, vous découvrirez un mélange harmonieux de framboises fraîchement cueillies, de <strong>fraises juteuses</strong> et de <strong>mûres sucrées</strong>, offrant une palette de couleurs éclatantes.";
    p1.style.color = "white";
    p2.innerHTML = "Le cocktail est préparé avec soin par nos <strong>mixologues talentueux</strong>, qui ajoutent une touche de <strong>liqueur de cassis</strong> pour rehausser les saveurs des fruits rouges. Ils garnissent ensuite le verre d'une fine tranche de <strong>zeste de citron</strong> pour apporter une note de fraîcheur subtile.";
    p2.style.color = "white";
    img.src = "Img/ruby-royal.png";
  }
  else if (e.target.alt === "ruby Royal") {
    wrapper.classList.remove(wrapper.classList.value);
    wrapper.classList.add('ruby');
    active.classList.remove(active.classList.value);
    active.classList.add('active');
    nav.classList.remove(nav.classList.value);
    nav.classList.add('white');
    btn.classList.remove(nav.classList.value);
    h1.style.color = "white";
    btn.classList.add('ruby-btn');
    h2.textContent = "Ruby Royal";
    h2.style.color = "white";
    p1.innerHTML = "Le <strong>Rubis Royal</strong> se présente dans une coupe en cristal taillé, ornée d'une fine bordure dorée, accentuant ainsi son allure somptueuse. À l'intérieur, vous découvrirez un mélange harmonieux de framboises fraîchement cueillies, de <strong>fraises juteuses</strong> et de <strong>mûres sucrées</strong>, offrant une palette de couleurs éclatantes.";
    p1.style.color = "white";
    p2.innerHTML = "Le cocktail est préparé avec soin par nos <strong>mixologues talentueux</strong>, qui ajoutent une touche de <strong>liqueur de cassis</strong> pour rehausser les saveurs des fruits rouges. Ils garnissent ensuite le verre d'une fine tranche de <strong>zeste de citron</strong> pour apporter une note de fraîcheur subtile.";
    p2.style.color = "white";
    img.src = "Img/ruby-royal.png";
  }
}
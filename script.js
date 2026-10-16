/**
 * Crée une carte tarifaire réutilisable.
 * @param {string} title - Nom du plan
 * @param {string} price - Prix affiché
 * @param {string[]} features - Liste des fonctionnalités
 */
function createPricingCard(title, price, features) {
  const card = document.createElement("article");
  card.className = "pricing";
  const heading = document.createElement("h2");
  heading.className = "title";
  heading.textContent = title;
  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = price;
  const list = document.createElement("ul");
  list.className = "features";
  for (let i = 0; i < features.length; i++) {
    const item = document.createElement("li");
    item.textContent = features[i];
    list.appendChild(item);
  }
  const button = document.createElement("button");
  button.className = "btn";
  button.type = "button";
  button.textContent = "Start Trial";
  const message = document.createElement("p");
  message.className = "message";
  button.addEventListener("click", function () {
    button.disabled = true;
    button.textContent = "Essai activé";
    message.textContent = "Votre essai du plan « " + title + " » a commencé.";
  });
  card.appendChild(heading);
  card.appendChild(priceEl);
  card.appendChild(list);
  card.appendChild(button);
  card.appendChild(message);
  return card;
}
const cardsContainer = document.getElementById("cards");
cardsContainer.appendChild(
  createPricingCard("Plan de base", "9,99 $ / mois", [
    "1 Go de stockage",
    "Support de base",
    "Toutes les fonctionnalités principales",
  ])
);
cardsContainer.appendChild(
  createPricingCard("Plan Pro", "19,99 $ / mois", [
    "50 Go de stockage",
    "Support prioritaire",
    "Fonctionnalités avancées",
  ])
);
cardsContainer.appendChild(
  createPricingCard("Plan Entreprise", "49,99 $ / mois", [
    "Stockage illimité",
    "Support 24/7",
    "Outils d'équipe",
  ])
);
document.addEventListener("DOMContentLoaded", function () {
  var cardToggle = document.getElementById("card__toggle");
  var btnShower = document.getElementById("btn_shower");
  var open = false;

  function ShowMore() {
    open = true;
    cardToggle.classList.remove("hidden");
    btnShower.innerHTML = "Masquer les voyages";
  }

  function CloseDiv() {
    open = false;
    cardToggle.classList.add("hidden");
    btnShower.innerHTML = "Afficher plus de voyage";
  }

  btnShower.onclick = function () {
    if (!open) {
      ShowMore();
    } else {
      CloseDiv();
    }
  };

  //////////////////
  ///Suggestions de pays pour l'utilisateur
  //////////////////

  const listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Australie",
    "Autriche",
    "Azerbaïdjan",
    "Bahreïn",
    "Bangladesh",
    "Belgique",
    "Bhoutan",
    "Biélorussie",
    "Birmanie",
    "Bolivie",
    "Bosnie-Herzégovine",
    "Botswana",
    "Brésil",
    "Brunei",
    "Bulgarie",
    "Burkina Faso",
    "Burundi",
    "Cambodge",
    "Cameroun",
    "Canada",
    "Cap-Vert",
    "Chili",
    "Chine",
    "Chypre",
    "Colombie",
    "Comores",
    "Corée du Sud",
    "Costa Rica",
    "Croatie",
    "Cuba",
    "Danemark",
    "Djibouti",
    "Égypte",
    "Émirats arabes unis",
    "Équateur",
    "Érythrée",
    "Espagne",
    "Estonie",
    "États-Unis",
    "Éthiopie",
    "Fidji",
    "Finlande",
    "France",
    "Gabon",
    "Gambie",
    "Géorgie",
    "Ghana",
    "Grèce",
    "Grenade",
  ];

  //////////////////
  ///Suggestions d'actions pour l'utilisateur
  //////////////////

  const suggestionsListActions = [
    "Distribution de nourriture",
    "Construction de logements",
    "Soins médicaux",
    "Éducation",
    "Fourniture d'eau potable",
    "Autres",
  ];

  const suggestionLimit = 8;
  const suggestionsListWhere = listePays;

  const actionInput = document.getElementById("action");
  const actionSuggestionsContainer = document.getElementById("action__suggestions");
  
  setupSuggestions(actionInput, actionSuggestionsContainer, suggestionsListActions);
  
  const whereInput = document.getElementById("where");
  const whereSuggestionsContainer = document.getElementById("where__suggestions");
  
  setupSuggestions(whereInput, whereSuggestionsContainer, suggestionsListWhere);
  
  function setupSuggestions(inputElement, suggestionsContainer, suggestionsList) {
    inputElement.addEventListener("input", () =>
      handleInput(inputElement, suggestionsContainer, suggestionsList)
    );
  
    document.addEventListener("click", (event) => {
      if (event.target !== inputElement) {
        suggestionsContainer.style.display = "none";
      }
    });
  
    suggestionsContainer.addEventListener("click", (event) => {
      if (event.target.tagName === "DIV") {
        inputElement.value = event.target.innerText;
        suggestionsContainer.style.display = "none";
      }
    });
  
    inputElement.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        const firstSuggestion = suggestionsContainer.querySelector("div");
        if (firstSuggestion) {
          inputElement.value = firstSuggestion.innerText;
          event.preventDefault();
        }
        suggestionsContainer.innerHTML = "";
      }
    });
  }
  
  function handleInput(inputElement, suggestionsContainer, suggestionsList) {
    const userInput = inputElement.value.toLowerCase();
    const filteredSuggestions = suggestionsList.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(userInput)
    );
  
    displaySuggestions(filteredSuggestions, suggestionsContainer);
  }
  
  function displaySuggestions(suggestions, suggestionsContainer) {
    if (suggestions.length === 0) {
      suggestionsContainer.style.display = "none";
      return;
    }
  
    // Limiter le nombre de suggestions affichées
    const limitedSuggestions = suggestions.slice(0, suggestionLimit);
  
    const suggestionsHTML = limitedSuggestions
      .map((suggestion) => `<div id='suggestions__text'>${suggestion}</div>`)
      .join("");
    suggestionsContainer.innerHTML = suggestionsHTML;
    suggestionsContainer.style.display = "block";
  }
  console.log("Le DOM est chargé. :) ");
});

let pokemonRepository = (function() { //Creating the array of objects
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  });
  
  function add(pokemon) {
      if (
          typeof pokemon === "object" &&
          "name" in pokemon
      ){
          pokemonList.push(pokemon);
      }else{
          console.log("This Pokemon is not correct")
      }
  };



  function loadList () {
      return fetch(apiUrl).then(function (response) {
          return response.json();
      }).then(function (json) {
          json.results.forEach(function (item) {
              let pokemon = {
                  name: item.name,
                  detailsUrl: item.url
              };
              add(pokemon);
              console.log(pokemon);
          });
      }).catch(function (e) {
          console.error(e);
      })
  }
  
    function getAll() {
    return pokemonList;
  };

  function addListItem(pokemon){ 
      let pokemonList = document.querySelector(".pokemon-list"); //target the class pokemon-list in the HTML file
      let listItem = document.createElement("li"); //Creat a list itmes on the ul class pokemon-list 
      let button = document.createElement("button"); //create buttons out of the UL list
      addPokemonListener(button, pokemon);//calling the event listener function call addPokemon listener
      button.innerText = pokemon.name; // insert the pokemon names in the inner text of the button
      button.classList.add("button-class"); //link it to the button-class to target it in the CSS firl
      listItem.appendChild(button); //insert the li into the button on the webpage
      pokemonList.appendChild(listItem); //apply it to the web page
      showDetails(pokemon);//show all the details of the array
  }
      function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response){
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
      }).catch(function(e) {
          console.error(e);
      }); 
  }

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
  }();
  

  pokemonRepository.loadList().then(function () {
      pokemonRepository.getAll().forEach (function (pokemon) {
          pokemonRepository.addListItem(pokemon);
      });
  });
  
  
  //Make sure both functions "loadList() and loadDetails" are assined to the keys with the same name in the returned object of my pokemon repositor
  
  //Make sure it rendors only afteri got all the info from the server
  //call the loadList() and execute the getAll from the pokemon repository
  
  //forEach call the addListItem 
  
  //
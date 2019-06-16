document.addEventListener('DOMContentLoaded', () => {
  const $grid = document.querySelector('#grid')
  let results = [];
  fetch('https://rickandmortyapi.com/api/character/').then((response)=>{
     results.push(...response.results)
  }).catch(error => $grid.innerHTML = `<div class="notification is-danger">  Error: ${error}   </div>`);
});
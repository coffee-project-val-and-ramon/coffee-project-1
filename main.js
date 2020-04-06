"use strict"

console.log("Coffee Project");

//Ramon put the <div> and <p> here.

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td><div><h2>' + coffee.name + '</h2></div></td>';
    html += '<td><div><p>' + coffee.roast + '</p></div></td>';
    html += '</tr>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: '<h2>Light City</h2>', roast: '<p>light</p>'},
//     {id: 2, name: '<h2>Half City</h2>', roast: '<p>light,</p>'},
//     {id: 3, name: '<h2>Cinnamon</h2>', roast: '<p>light,</p>'},
//     {id: 4, name: '<h2>City</h2>', roast: '<p>medium,</p>'},
//     {id: 5, name: '<h2>American</h2>', roast: '<p>medium,</p>'},
//     {id: 6, name: '<h2>Breakfast</h2>', roast: '<p>medium,</p>'},
//     {id: 7, name: '<h2>High</h2>', roast: '<p>dark,</p>'},
//     {id: 8, name: '<h2>Continental</h2>', roast: '<p>dark,</p>'},
//     {id: 9, name: '<h2>New Orleans</h2>', roast: '<p>dark,</p>'},
//     {id: 10, name: '<h2>European</h2>', roast: '<p>dark,</p>'},
//     {id: 11, name: '<h2>Espresso</h2>', roast: '<p>dark,</p>'},
//     {id: 12, name: '<h2>Viennese</h2>', roast: '<p>dark,</p>'},
//     {id: 13, name: '<h2>Italian</h2>', roast: '<p>dark,</p>'},
//     {id: 14, name: '<h2>French</h2>', roast: '<p>dark,</p>'},
// ];

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
/*Ramon added console.logs to see how to call the ids*/
console.log('coffees.id' , coffees[0].id);
console.log('coffees.id' , coffees[1].id);

// var coffees = [
//     {id: 14, name: 'French', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
    // {id: 6, name: 'Breakfast', roast: 'medium'},
    // {id: 7, name: 'High', roast: 'dark'},
    // {id: 8, name: 'Continental', roast: 'dark'},
    // {id: 9, name: 'New Orleans', roast: 'dark'},
    // {id: 10, name: 'European', roast: 'dark'},
    // {id: 11, name: 'Espresso', roast: 'dark'},
    // {id: 12, name: 'Viennese', roast: 'dark'},
    // {id: 13, name: 'Italian', roast: 'dark'},
    // {id: 14, name: 'French', roast: 'dark'},
// ];

/*Ramon added the console.logs to see what was going on at each step.*/

var tbody = document.querySelector('#coffees');
console.log('tbody' , tbody);
tbody.reverse();
console.log('tbody.reverse()' , tbody.reverse());
var submitButton = document.querySelector('#submit');
console.log('submitButton' , submitButton);
var roastSelection = document.querySelector('#roast-selection');
console.log('roastSelection' , roastSelection);

tbody.innerHTML = renderCoffees(coffees);
console.log('renderCoffees(coffees)' , tbody.innerHTML);

submitButton.addEventListener('click', updateCoffees);

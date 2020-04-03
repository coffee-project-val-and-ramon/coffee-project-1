"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
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
var coffees = [
    {id: 1, name: '<h2>Light City</h2>', roast: '<p>light</p>'},
    {id: 2, name: '<h2>Half City</h2>', roast: '<p>light,</p>'},
    {id: 3, name: '<h2>Cinnamon</h2>', roast: '<p>light,</p>'},
    {id: 4, name: '<h2>City</h2>', roast: '<p>medium,</p>'},
    {id: 5, name: '<h2>American</h2>', roast: '<p>medium,</p>'},
    {id: 6, name: '<h2>Breakfast</h2>', roast: '<p>medium,</p>'},
    {id: 7, name: '<h2>High</h2>', roast: '<p>dark,</p>'},
    {id: 8, name: '<h2>Continental</h2>', roast: '<p>dark,</p>'},
    {id: 9, name: '<h2>New Orleans</h2>', roast: '<p>dark,</p>'},
    {id: 10, name: '<h2>European</h2>', roast: '<p>dark,</p>'},
    {id: 11, name: '<h2>Espresso</h2>', roast: '<p>dark,</p>'},
    {id: 12, name: '<h2>Viennese</h2>', roast: '<p>dark,</p>'},
    {id: 13, name: '<h2>Italian</h2>', roast: '<p>dark,</p>'},
    {id: 14, name: '<h2>French</h2>', roast: '<p>dark,</p>'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

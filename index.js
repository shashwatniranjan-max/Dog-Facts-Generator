let factItem = [];
async function fact() {
    const response = await fetch("https://dogapi.dog/api/v2/facts");
    const value = await response.json();
    factItem.push({
        value : value.data[0].attributes.body
    })
    render();
}
function createFactComponent(fact) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerHTML = fact.value;
    div.appendChild(span);
    return div;
}



 function render() {
 document.getElementById("fact").innerHTML = "";
 let div = createFactComponent(factItem[0]);
 document.getElementById("fact").appendChild(div);
 factItem.length = 0;
}
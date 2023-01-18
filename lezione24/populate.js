/**
 *
 * @param tbody
 * @param template
 * @param code
 * @param productName
 */
function populateTable(tbody, template, code, productName) {
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    td[0].textContent = code;
    td[1].textContent = productName;
    tbody.appendChild(clone);
}
if ("content" in document.createElement("template")) {
    var tbody = document.querySelector("tbody");
    var template = document.querySelector("#productrow");
    if (tbody !== null && template !== null) {
        var myArray = { 5645562: "ddd", 323223: "fff", 111: "xxx", 6634763: "aaabc" };
        for (var key in myArray) {
            // template= <HTMLTemplateElement>template;
            populateTable(tbody, template, key, myArray[key]);
        }
    }
}
else {
    console.log("non supportato");
}

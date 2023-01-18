/**
 * 
 * @param tbody 
 * @param template 
 * @param code 
 * @param productName 
 */
function populateTable(
    tbody: HTMLTableSectionElement,
    template: any,
    code: string,
    productName: string
  ): void {
    const clone = template.content.cloneNode(true);
  
    let td = clone.querySelectorAll("td");
    td[0].textContent = code;
    td[1].textContent = productName;
    tbody.appendChild(clone);
  }
  
  if ("content" in document.createElement("template")) {
    const tbody = document.querySelector("tbody");
    let template = document.querySelector("#productrow");
    if (tbody !== null && template !== null)
    {
      let myArray: any = { 5645562: "ddd", 323223: "fff", 111: "xxx", 6634763: "aaabc" };
      for (let key in myArray) {
         // template= <HTMLTemplateElement>template;
        populateTable(tbody, template, key, myArray[key]);
      }
    }
  
  } else {
    console.log("non supportato");
  }
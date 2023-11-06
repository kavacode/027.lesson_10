const data = [1, 2, [2.1, 2.2, 2.3], 3, 4, 5, [5.1, 5.2]];

function generateList(array) {
  let result = "<ul>";
  for (let item of array) {
    if (Array.isArray(item)) {
      result += "<li>" + generateList(item) + "</li>";
    } else {
      result += `<li>${item}</li>`;
    }
  }
  result += "</ul>";
  return result;
}

const html = generateList(data);
document.body.innerHTML = html;

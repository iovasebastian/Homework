const container = document.getElementById('container');
function add(){
    let input = document.getElementById('input').value.trim();
    const element = document.createElement('div');
    const checkbox = document.createElement('input');
    element.classList.add('div');
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', () => {
        const textElement = element.querySelector('p');
        textElement.classList.toggle('checked');
      });

    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = input;
    if(input!=''){
    element.appendChild(checkbox);
    element.appendChild(text);
    container.appendChild(element);
    }
    document.getElementById('input').value = '';
}
function remove(){
    const lastChild = container.lastChild;
    container.removeChild(lastChild);
}
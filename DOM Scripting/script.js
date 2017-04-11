const form = document.querySelector('#registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener('submit', function(event) {
    // Prevents form submission
    event.preventDefault();
    
    // Vars
    const text = input.value;
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);

    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
        // Button Edit
        const buttonEdit = document.createElement('button');
        buttonEdit.className = 'edit';
        buttonEdit.type = 'button';
        buttonEdit.textContent = 'Edit';
        // Button Remove
        const buttonRemove = document.createElement('button');
        buttonRemove.className = 'remove';
        buttonRemove.type = 'button';
        buttonRemove.textContent = 'Remove';

    // Appending values into vars
    label.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(buttonEdit);
    li.appendChild(buttonRemove);
    ul.appendChild(li);
    input.value = '';
});

// Event: List
ul.addEventListener('change', function(event) {
    // Vars
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    // Adds class to selected list item
    if (checked) {
        listItem.className = 'responded';
    }
    else {
        listItem.className = '';
    }
});

// Event: Buttons
ul.addEventListener('click', function(event) {
    // Vars
    const button  = event.target
    const li = event.target.parentNode;
    const ul = event.target.parentNode.parentNode;

    // Button remove
    if (button.className == 'remove') {
        ul.removeChild(li);
    }
    // Button edit
    else if (button.className == 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;

        button.className = 'complete';
        button.textContent = 'submit';

        li.insertBefore(input, span);
        li.removeChild(span);

        // Button submit
        if (button.className == 'complete') {

        }
    }
});
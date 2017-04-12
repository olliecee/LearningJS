document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#registrar');
    const input = document.querySelector('input');
    const ul = document.getElementById('invitedList');
    const check = document.querySelector('.check');

    // Event: Hide or show invitees
    check.addEventListener('change', (event) => {
        // Vars
        const checkbox = event.target;
        const listItem = ul.children;

        // Hides non-confirmed invitees
        if (checkbox.type == 'checkbox' && checkbox.checked) {
            for (let i = 0; i < listItem.length; i++) {
                if (listItem[i].className == 'responded') {
                    listItem[i].style.display = 'block';
                }
                else {
                    listItem[i].style.display = 'none';
                }
            }
        }

        // Shows all
        if (checkbox.type == 'checkbox' && checkbox.checked == false) {
            for (let i = 0; i < listItem.length; i++) {
                listItem[i].style.display = 'block';
            }
        }
    });

    // Event: Form
    form.addEventListener('submit', (event) => {
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

    // Event: ul, List
    ul.addEventListener('change', (event) => {
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
    ul.addEventListener('click', (event) => {
        // Vars
        const button  = event.target
        const li = event.target.parentNode;
        const ul = event.target.parentNode.parentNode;

        // Button remove
        if (button.className == 'remove') {
            ul.removeChild(li);
        }
        // Button edit
        if (button.className == 'edit') {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;

            const buttonEdit = document.querySelector('.edit');
            const buttonSubmit = document.createElement('button');
            buttonSubmit.textContent = 'submit';
            buttonSubmit.className = 'complete';

            li.insertBefore(buttonSubmit, buttonEdit);
            li.insertBefore(input, span);
            li.removeChild(buttonEdit);
            li.removeChild(span);
        }

        // Button submit
        if (button.className == 'complete') {
            const span = document.createElement('span');
            const input = li.firstElementChild;
            span.textContent = input.value;
            
            button.className = 'edit';
            button.textContent = 'edit';

            li.insertBefore(span, input);
            li.removeChild(input);
        }
    });

});
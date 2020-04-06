// Event listener for form submit
document.querySelector('form').addEventListener('submit', e => {
   e.preventDefault();
   checkError();
});

checkError = () => {
   // Get form input
   let bin = document.querySelector('#binary').value;
   // String method to check if valid binary & not empty
   if ((bin.includes('0') || bin.includes('1')) && bin.length > 0) {
      bin2Dec(bin);
   } else {
      showError();
   }
};

bin2Dec = bin => {
   let dec = 0;
   for (let i in bin) {
      dec *= 2;
      dec += parseInt(bin[i]);
   }
   showResult(bin, dec);
};

showError = () => {
   // Create p element
   const p = document.createElement('p');
   // Set error id
   p.id = 'error';
   // Set text
   p.textContent = 'Please enter a valid binary number';
   // Get binary input field
   const input = document.querySelector('#binary');
   // Insert p after input
   input.insertAdjacentElement('afterend', p);
   // Remove error message after 3 seconds
   removeElement(p);
};

showResult = (bin, dec) => {
   // Create div
   const div = document.createElement('div');
   // Add results id
   div.id = 'results';
   // Add HTML
   div.innerHTML = `
   <p> ${bin} in decimal form is:</p>
   <p>${dec}</p>
   `;
   // Get form element
   const form = document.querySelector('form');
   // Insert div after form
   form.insertAdjacentElement('afterend', div);
   // Remove div after 3 seconds
   removeElement(div);
};

removeElement = el => {
   setTimeout(() => el.remove(), 3000);
   document.querySelector('#binary').value = '';
};

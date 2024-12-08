import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Funcție pentru salvarea stării formularului în local storage
const saveFormState = throttle(() => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

// Funcție pentru completarea câmpurilor cu datele salvate
const populateFormFields = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
};

// La încărcarea paginii, populați câmpurile formularului dacă există date salvate
populateFormFields();

// Eveniment pentru salvarea stării la modificarea câmpurilor
form.addEventListener('input', saveFormState);

// Eveniment pentru submit: ștergeți starea din local storage și logați datele
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});



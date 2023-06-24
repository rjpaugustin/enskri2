const inputPrenom = document.querySelector('input[name="prenom"]');

inputPrenom.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Tanpri tape  w');
    }
});

inputPrenom.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
});


const inputName = document.querySelector('input[name="nom"]');

inputName.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Tanpri tape siyati w');
    }
})

inputName.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
})

const inputEmail = document.querySelector('input[name="email"]');

inputEmail.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Tanpri tape email w w');
    }
    else if (event.target.validity.typeMismatch) {
    event.target.setCustomValidity('Tanpri gade si email ou a bon');
  }
})

inputEmail.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
})
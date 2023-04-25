const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, (event) => {
    event.preventDefault();

    const formData = {};
    const formElements = event.target.elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];

        if (element.tagName === `INPUT`) { 
            const name = element.getAttribute(`name`);
            const value = element.value.trim();

            if (!value) {
                alert('Всі поля повинні бути заповнені!');
                return
            }

            formData[name] = value;
        }
    }

    console.log(formData);
});

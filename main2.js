const mainBody = document.getElementById('main-body');
const styleIcon = document.getElementById('style-icon');
const sideBar = document.getElementById('side-bar');
const listItems = sideBar.querySelectorAll('li');




// View Templates
function viewLogin() {
    mainBody.innerHTML = `
        <form id="login-form" class="form">
            <h1>Log in</h1>
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">
            <button type="submit" id="submit-login">Submit</button>
            <a href="#" id="forgot-password">Forgot password?</a>
            <a href="#" id="do-not-have-account">Don't have an account?</a>
        </form>
    `;
    attachLoginListeners();
}

function viewRegister() {
    mainBody.innerHTML = `
        <form id="register-form" class="form">
            <h1>Register</h1>
            <input type="text" id="username" placeholder="Username">
            <input type="email" id="email" placeholder="Email">
            <input type="password" id="password" placeholder="Password">
            <input type="password" id="password2" placeholder="Confirm Password">
            <button type="submit" id="submit-register">Submit</button>
            <a href="#" id="have-account">Already have an account?</a>
        </form>
    `;
    attachRegisterListeners();
}

// Event Listeners
function attachLoginListeners() {
    const doNotHaveAccount = document.getElementById('do-not-have-account');
    doNotHaveAccount.addEventListener('click', viewRegister);
}

function attachRegisterListeners() {
    const haveAccount = document.getElementById('have-account');
    haveAccount.addEventListener('click', viewLogin);
}

// Sidebar Toggle
styleIcon.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
});

// Initialize with Login View
viewLogin();



listItems.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(`You clicked on style: ${item.id}`);
        const form = document.getElementsByClassName('form')[0];

        function removingStyle() {
            form.classList.remove('style1', 'style2', 'style3');
        }
        removingStyle();

        switch (item.id) {
            case 'style1':
                form[0].classList.add('style1');
                break;
            case 'style2':
                form[0].classList.add('style2');
                break;
            case 'style3':
                form[0].classList.add('style3');

                break;

        }
    });
});
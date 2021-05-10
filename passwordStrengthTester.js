const passwordInput = document.querySelector('#password-input')
const firstMilestone = document.querySelector('#first-milestone')

globalClickEventListener('click', 'test', event => {
  const element = event.target.id;

  switch(element) {
    case 'test':
      passwordStrengthTester()
      break; 
  }
})

function passwordStrengthTester() {
  if (passwordInput.value.length >= 8) {
    console.log('Hello World')

    firstMilestone.classList.add('class', 'met')
  } else {
    firstMilestone.classList.remove('class', 'met')
  }
}

function globalClickEventListener(type, selector, callback) {
  document.addEventListener(type, event => {
    const element = event.target.id;

    switch(element) {
      case selector:
        callback(event);
        break; 
    }
  })
}
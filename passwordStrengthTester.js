const passwordInput = document.querySelector('#password-input')
const firstMilestone = document.querySelector('#first-milestone')
const secondMilestone = document.querySelector('#second-milestone')
const thirdMilestone = document.querySelector('#third-milestone')
const fourthMilestone = document.querySelector('#fourth-milestone')
const fifthMilestone = document.querySelector('#fifth-milestone')

globalClickEventListener('click', 'test', event => {
  const element = event.target.id;

  switch(element) {
    case 'test':
      passwordStrengthTester()
      break; 
  }
})

globalClickEventListener('click', 'visibility', event => {
  const element = event.target.id;

  switch(element) {
    case 'visibility':
      visibilityToggler()
      break; 
  }
})

function passwordStrengthTester() {
  if (passwordInput.value.length >= 8) {
    firstMilestone.classList.add('class', 'met')
  } else {
    firstMilestone.classList.remove('class', 'met')
  }

  let regexSpecialCharacters = /^[A-Za-z0-9]+$/
  let isValidSpecialCharacters = regexSpecialCharacters.test(passwordInput.value);

  if (!isValidSpecialCharacters && passwordInput.value.length !== 0) {
    secondMilestone.classList.add('class', 'met')
  } else {
    secondMilestone.classList.remove('class', 'met')
  }

  let regrexNumbers = /\d/
  let isValidNumbers = regrexNumbers.test(passwordInput.value);

  if (isValidNumbers && passwordInput.value.length !== 0) {
    thirdMilestone.classList.add('class', 'met')
  } else {
    thirdMilestone.classList.remove('class', 'met')
  }

  let regrexLowercaseLetters = /[a-z]/
  let isValidLowercaseLetters = regrexLowercaseLetters.test(passwordInput.value);

  if (isValidLowercaseLetters && passwordInput.value.length !== 0) {
    fourthMilestone.classList.add('class', 'met')
  } else {
    fourthMilestone.classList.remove('class', 'met')
  }

  let regrexUppercaseLetters = /[A-Z]/
  let isValidUppercaseLetters = regrexUppercaseLetters.test(passwordInput.value);

  if (isValidUppercaseLetters && passwordInput.value.length !== 0) {
    fifthMilestone.classList.add('class', 'met')
  } else {
    fifthMilestone.classList.remove('class', 'met')
  }
}

function visibilityToggler() {
  const element = document.querySelector('#password-input')

  const elemnetData = element.dataset

  if (elemnetData.state === "public") {
    element.setAttribute("type", "password")
    element.setAttribute('data-state', 'privet')
  } else {
    element.setAttribute("type", "text")
    element.setAttribute('data-state', 'public')
  }
}

function globalClickEventListener(type, selector, callback, selectorSecond, callbackSecond) {
  document.addEventListener(type, event => {
    const element = event.target.id;

    switch(element) {
      case selector:
        callback(event);
        break;
      case selectorSecond:
        callbackSecond(event)
        break
    }
  })
}
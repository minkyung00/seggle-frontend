function getUserType () {
  return window.localStorage.getItem('UserType')
}

function getUserClasses () {
  return JSON.parse(window.localStorage.getItem('Classes'))
}

function getUserCompetitions () {
  return JSON.parse(window.localStorage.getItem('Competitions'))
}

function saveUserInfo (usertype, classes, competitions) {
  window.localStorage.setItem('UserType', usertype)
  window.localStorage.setItem('Classes', classes)
  window.localStorage.setItem('Competitions', competitions)
}

function deleteUserInfo () {
  window.localStorage.removeItem('UserType')
  window.localStorage.removeItem('Classes')
  window.localStorage.removeItem('Competitions')
}

export {
  getUserType,
  getUserClasses,
  getUserCompetitions,
  saveUserInfo,
  deleteUserInfo
}

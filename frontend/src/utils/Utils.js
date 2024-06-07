import Cookie from 'universal-cookie';

export function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

export function setCookie(name, value) {
  const cookie = new Cookie()
  const expires24hours = (new Date(Date.now() + 86400 * 1000))

  cookie.set(name, value, { path: '/', expires: expires24hours })
}

export function removeCookie(name) {
  const cookie = new Cookie()
  cookie.remove(name)
}

export function isNumber(value) {
  return !isNaN(value)
}
const buttonNavbar = document.querySelectorAll('#btn-navbar')
const pathname = location.pathname

url = pathname.split('/')

  buttonNavbar.forEach((button) => {
    if (button.getAttribute('href') == url[url.length - 1]) {
      button.classList.add('active')
    }
  })

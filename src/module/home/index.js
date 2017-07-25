const pathname = window.location.pathname
var split = pathname.split('/')
if (pathname !== '/' && split.length === 2) {
  window.location.href = split[1] + '.html'
}

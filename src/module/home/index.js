const pathname = window.location.pathname
var split = pathname.split('/')
if (split.length === 2) {
  window.location.href = split[1] + '.html'
}

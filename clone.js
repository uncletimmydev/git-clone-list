var items = document.querySelectorAll('a[data-testif="group-name"]')
var cmdList = Array.from(items).map(c=>`gitclone -b develop https://github.com${c.getAttribute('href')}`)
console.log(cmdList.join('\n'))
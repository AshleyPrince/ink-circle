let allP = document.querySelectorAll('p');

allP.forEach((element) => {
    let str = element.outerHTML
    newStr = str.replace(/ß/g, '<span class="neu">ẞ</span>')
    element.outerHTML = newStr
})
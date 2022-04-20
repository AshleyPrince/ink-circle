let allP = document.querySelectorAll('p');

allP.forEach((element) => {
    let str = element.outerHTML
    newStr = str.replace(/ß/g, '<span class="fix-s-z">ẞ</span>')
    element.outerHTML = newStr
})
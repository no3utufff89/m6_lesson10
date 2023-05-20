const task1 = () => {
    const arr = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
    const resArr = [];
    arr.forEach(item => {
        const regExp = /.\.(js|jsx|ts)/i;
        const res = regExp.test(item)
        res === true ? resArr.push(item) : null;
    })
    return resArr;
}
console.log(task1());

const task2 = () => {
    const arr = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io','my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];
    const resArr = [];
    arr.forEach(item => {
        const regExp = /(\w+@([a-zA-Z_]+){3,}?\.[a-zA-Z]{2,5})/;
        const res = regExp.test(item);
        res === true ? resArr.push(item) : null;
    })
    return resArr;
}
console.log(task2());

const task3 = () => {
    const str = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';
    const regExp = /\(.+?\)+?/g
    return str.match(regExp);
  }
console.log(task3());

const task4 = (str) => {
    const regExpText = /(http:\/\/|https:\/\/)\w+\.(ru|com)/g;
    const regExpLink = /\w+\.(ru|com)/g;
  
    const matchingLink = str.match(regExpText); 
    const matchingText = str.match(regExpLink); 
  
    str = str.replace(regExpText, '*');
    for (i=0; i< matchingLink.length; i++) {
      str = str.replace('*', `<a href="${matchingLink[i]}">${matchingText[i]}</a>`);
    }
    return str;
  }
  console.log(task4('http://site.ru  https://site.com '))


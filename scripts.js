arrkeys = []
let keys = []
let current_sel = 'all'
const NUMBER_OF_ARRAYS = 42
let arrays = {};
let selected = [];

function filter(key) {
  let sortkeys = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'alear', 'misc', 'all'];
  let index = sortkeys.indexOf(key)
  sortkeys.splice(index, 1);
  for (let j = 0; j < sortkeys.length; j++) {
    let nodes = document.getElementsByClassName(`${sortkeys[j]}`)
    for (let i = 0; i < nodes.length; i++) {
      let hero = nodes[i];
      hero.style.display = 'none';
    }
    let id = `${sortkeys[j]}img`
    let file = `sortIcons/${sortkeys[j]}Sort.png`
    document.getElementById(id).src = file;
  }
  let keep = document.getElementsByClassName(key)
  for (let i = 0; i < keep.length; i++) {
    let hero = keep[i];
    hero.style.display = 'inline-block';
  }
  let id = `${key}img`;
  let file = `sortIcons/${key}Glow.png`;
  document.getElementById(id).src = file;
  current_sel = key
}

function showAll() {
  let sortkeys = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'alear', 'misc', 'all'];
  for (let j = 0; j < sortkeys.length; j++) {
    let nodes = document.getElementsByClassName(`${sortkeys[j]}`)
    for (let i = 0; i < nodes.length; i++) {
      let hero = nodes[i];
      hero.style.display = 'inline-block';
    }
    let id = `${sortkeys[j]}img`
    let file = `sortIcons/${sortkeys[j]}Sort.png`
    document.getElementById(id).src = file;
  }
  document.getElementById('allimg').src = `sortIcons/allGlow.png`
  current_sel = 'all'
}

async function generate() {
  let tempStr = ''
  let games = await Object.keys(data)
  for (let i = 0; i < games.length; i++) {
    let chars = data[games[i]]
    for (let k = 0; k < chars.length; k++) {
      let file = chars[k].substring(1, chars[k].length - 1) + '.png'
      //tempStr += `<button class="test" onclick="addToBar('${flair[k]}')"> <img src="./all/${file}"> </button>`
      tempStr += `<button class="${games[i]}" onclick="addToBar('${chars[k]}')"> <img src="./images/${file}"> </button>`
    }
  }
  document.getElementById("main").innerHTML = tempStr
}

function random() {
  let sel = keys[Math.floor(Math.random() * keys.length)];
  addToBar(sel)
}

function addToBar(flaircode) {
  if (selected.length == 4) {
    window.alert('You can only select up to 4 characters.')
    return;
  } else {
    selected.push(flaircode)
    let tempstr = "<button id='clear' onclick='clearSelects()'><img src=\"./assets/clear.png\"></button>"
    for (let i = 0; i < selected.length; i++) {
      let file = selected[i].substring(1, selected[i].length - 1) + '.png'
      tempstr += `<img src="./images/${file}">`
    }
    tempstr += `<button id='go' onclick='request()'> <img src="./assets/go.png"> </button>`
    document.getElementById("portraitBox").innerHTML = tempstr
  }
}

function clearSelects() {
  selected.pop();
  buttonhtml1 = `<button id='clear' onclick='clearSelects()'><img src=\"./assets/clear.png\"></button>`
  buttonhtml2 = `<button id='go' onclick='request()'> <img src="./assets/go.png"> </button>`
  flairhtml = document.getElementById('portraitBox').innerHTML
  let index = flairhtml.indexOf('</button>');
  flairhtml = flairhtml.substring(index + 9, flairhtml.length);
  flairhtml = flairhtml.split('<button')
  flairhtml = flairhtml[0]
  arr = flairhtml.split('>');
  arr.pop();
  arr.pop();
  if (arr.length == 0) {
    flairhtml = "";
  } else {
    flairhtml = arr.join('>')
    flairhtml += '>'
  }
  document.getElementById('portraitBox').innerHTML = buttonhtml1 + flairhtml + buttonhtml2
}

function request() {
  let url = `https://www.reddit.com/message/compose/?to=Sothis_Bot&subject=Request%20a%20Flair&message=`
  for (let i = 0; i < selected.length; i++) {
    url += selected[i]
    url += '%0a'
  }
  url = url.slice(0, -3)
  console.log(url)
  window.open(url, '_blank');
}
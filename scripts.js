const classguide = {
  0: "alfonse",
  1: "alfonse",
  2: "alfonse",
  3: "alfonse",
  4: "alfonse",
  5: "alfonse",
  6: "alfonse",
  7: "alfonse",
  8: "alfonse",
  9: "alfonse",
  10: "alfonse",
  80: "alfonse",
  89: "alfonse",
  99: "alfonse",
  110: "marth",
  120: "alm",
  141: "seliph",
  142: "seliph",
  143: "seliph",
  150: "leif",
  160: "roy",
  170: "lyn",
  180: "ephraim",
  191: "ike",
  192: "ike",
  193: "ike",
  1101: "micaiah",
  1102: "micaiah",
  1103: "micaiah",
  1104: "micaiah",
  1131: "chrom",
  1132: "chrom",
  1139: "chrom",
  1141: "corrin",
  1142: "corrin",
  1143: "corrin",
  1144: "corrin",
  1161: "sothis",
  1162: "sothis",
  1163: "sothis",
  1164: "sothis",
  1165: "sothis",
  1166: "sothis",
  1167: "sothis",
  1171: "itsuki",
  1180: "alear",
  1181: "alear",
  8888: "misc",
  9999: "misc"
}
arrkeys = []
let keys = []
let current_sel = 'all'
//const SORT_KEYS = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'all'];
const NUMBER_OF_ARRAYS = 42
let arrays = {};
let selected = [];

function selectionSort(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = parseInt(data[arr[i]].substring(data[arr[i]].indexOf('_') + 1))
  }
  var minIdx, temp, temp2;
  let len = arr.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr2[j] < arr2[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    temp2 = arr2[i]
    arr2[i] = arr2[minIdx];
    arr2[minIdx] = temp2;
  }
  return arr;
}



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
  let flairs = data;
  let arr = [];
  keys = Object.keys(flairs)
  for (let i = 0; i < keys.length; i++) {
    let img = flairs[keys[i]]
    let gamecode = parseInt(img.substring(0, img.indexOf('_')))
    let object = keys[i]
    if (!arrays.hasOwnProperty(gamecode)) {
      arrays[gamecode] = [];
      arrkeys.push(gamecode)
    }
    arrays[gamecode].push(object)
  }
  let tempStr = ""
  arrkeys.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < arrkeys.length; i++) {
    let classID = classguide[arrkeys[i]]
    let arr = arrays[arrkeys[i]]
    arr = selectionSort(arr)
    for (let j = 0; j < arr.length; j++) {
  
      tempStr += `<button class="${classID}" onclick="addToBar('${arr[j]}')"> <img src="./images/${data[arr[j]]}"> </button>`
    }
  }
  document.getElementById("main").innerHTML = tempStr


}

function random(){

     let sel = keys[Math.floor(Math.random() * keys.length)];
  addToBar(sel)

  
    


 
}

function addToBar(flaircode){
 

  if (selected.length == 4){
    window.alert('You can only select up to 4 characters.')
    return;
  }

  else {
    selected.push(flaircode)
     console.log(selected)
    let tempstr = "<button id='clear' onclick='clearSelects()'><img src=\"./assets/clear.png\"></button>"
    for (let i = 0; i < selected.length; i++) {
      tempstr += `<img src="./images/${data[selected[i]]}">`
    }

    tempstr += `<button id='go' onclick='request()'> <img src="./assets/go.png"> </button>`

    document.getElementById("portraitBox").innerHTML = tempstr
  }


}

function clearSelects(){


  selected.pop();

   buttonhtml1= `<button id='clear' onclick='clearSelects()'><img src=\"./assets/clear.png\"></button>`
    buttonhtml2= `<button id='go' onclick='request()'> <img src="./assets/go.png"> </button>`

  flairhtml = document.getElementById('portraitBox').innerHTML
 
  let index = flairhtml.indexOf('</button>');
  flairhtml = flairhtml.substring(index+9, flairhtml.length);
 
  flairhtml = flairhtml.split('<button')
  flairhtml = flairhtml[0] 

  arr = flairhtml.split('>');

  arr.pop();
    arr.pop();

  if(arr.length == 0){
    flairhtml = "";
  }
  else {
     flairhtml = arr.join('>')
     flairhtml += '>'
  }

  document.getElementById('portraitBox').innerHTML =    buttonhtml1 + flairhtml + buttonhtml2







}

function request(){
  let url = `https://www.reddit.com/message/compose/?to=Sothis_Bot&subject=Request%20a%20Flair&message=`
  for (let i = 0; i < selected.length; i++) {
    url += selected[i]
    url += '%0a'
  }
  url = url.slice(0, -3)

  console.log(url)

  window.open(url,'_blank');





}


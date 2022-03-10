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
  80: "alfonse",
  89: "alfonse",
  99: "alfonse",
  110: "marth",
   119: "marth",
   120: "alm",
   129: "alm",
   141: "seliph",
   142: "seliph",
   143: "seliph",
   149: "seliph",
   150: "leif",
   159: "leif",

   160: "roy",
   169: "roy",

   170: "lyn",
   179: "lyn",

    180: "ephraim",
   189: "ephraim",

191: "ike",
192: "ike",
193: "ike",
199: "ike",

1101: "micaiah",
1102: "micaiah",
1103: "micaiah",
1104: "micaiah",
1109: "micaiah",

1131: "chrom",
1132: "chrom",
1139: "chrom",

1141: "corrin",
1142: "corrin",
1143: "corrin",
1144: "corrin",
1149: "corrin",

1161: "sothis",
1162: "sothis",
1163: "sothis",
1164: "sothis",
1165: "sothis",
1166: "sothis",
1167: "sothis",
1169: "sothis",
1171: "itsuki",
9999: "all",

}

arrkeys = []
//const SORT_KEYS = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'all'];
const NUMBER_OF_ARRAYS = 42
let arrays = {};

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
  let sortkeys = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'all'];
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
}

function showAll() {
  let sortkeys = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'all'];
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
}


async function generate() {

  let flairs = data;
  let arr = [];

  let keys = Object.keys(flairs)

  for (let i = 0; i < keys.length; i++) {
    let img = flairs[keys[i]]
    let gamecode = parseInt(img.substring(0, img.indexOf('_')))
    console.log(gamecode)
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
  console.log(arrkeys)

  for (let i = 0; i < arrkeys.length; i++) {
    let classID = classguide[arrkeys[i]]
    let arr = arrays[arrkeys[i]]
    arr = selectionSort(arr)

    for (let j = 0; j < arr.length; j++) {
      tempStr += `<a href="https://www.reddit.com/message/compose/?to=Sothis_Bot&subject=Request%20a%20Flair&message=${arr[j]}" target="_blank" class="${classID}"> <img src="./images/${data[arr[j]]}" alt="" /></a>`
    }
  }
  document.getElementById("main").innerHTML = tempStr
}
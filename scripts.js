const classguide = {
	0 : "alfonse",
	1 : "alfonse",
	2 : "alfonse",
	3 : "alfonse",
	4 : "alfonse",
	5 : "alfonse",
	6 : "alfonse",
	7 : "alfonse",
	8 : "alfonse",
	9 : "alfonse",
	10 : "alfonse",
	11 : "alfonse",
	12 : "marth",
	13 : "alm",
	14 : "seliph",
	15 : "seliph",
	16 : "seliph",
	17 : "leif",
	18 : "roy",
	19 : "lyn",
	20 : "ephraim",
	21 : "ike",
	22 : "ike",
	23 : "micaiah",
	24 : "micaiah",
	25 : "micaiah",
	26 : "micaiah",
	27 : "chrom",
	28 : "chrom",
	29 : "corrin",
	30 : "corrin",
	31 : "corrin",
	32 : "corrin",
	33 : "sothis",
	34 : "sothis",
	35 : "sothis",
	36 : "sothis",
	37 : "sothis",
	38 : "sothis",
	39 : "sothis",
	40 : "itsuki",
	41 : "all"
}

//const SORT_KEYS = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'all'];

const NUMBER_OF_ARRAYS = 42

 function selectionSort(arr){
 	let arr2 = [];
 	for (let i = 0; i < arr.length; i++){
 		arr2[i] = parseInt(data[arr[i]].substring(data[arr[i]].indexOf('_')+1))
 		
 	}

    var minIdx, temp, temp2;
    let len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
        if(arr2[j]<arr2[minIdx]){
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

function filter(key){


	let sortkeys = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'all'];
	let index = sortkeys.indexOf(key)
	sortkeys.splice(index, 1);

	for (let j = 0; j < sortkeys.length; j++){
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

function showAll(){
	let sortkeys = ['alfonse', 'marth', 'alm', 'seliph', 'leif', 'roy', 'lyn', 'ephraim', 'ike', 'micaiah', 'chrom', 'corrin', 'sothis', 'itsuki', 'all'];
	for (let j = 0; j < sortkeys.length; j++){
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

function generate(){

	let flairs = data;
	let arr = [];


	for (let i = 0; i < NUMBER_OF_ARRAYS; i++){
		arr[i] = []
	}

	let keys = Object.keys(flairs)

	for (let i = 0; i < keys.length; i++){
		let img = flairs[keys[i]]
		let gamecode = img.substring(0, img.indexOf('_'))
		let object = keys[i]
		//object.sortcode = parseInt(object.image.substring(object.image.indexOf('_')+1))
		switch(gamecode){
			case '00': arr[0].push(object)
			break;
			case '1': arr[1].push(object)
			break;
			case '2': arr[2].push(object)
			break;
			case '3': arr[3].push(object)
			break;
			case '4': arr[4].push(object)
			break;
			case '5': arr[5].push(object)
			break;
			case '6': arr[6].push(object)
			break;
			case '7': arr[7].push(object)
			break;
			case '8': arr[8].push(object)
			break;
			case '9': arr[9].push(object)
			break;
			case '80': arr[10].push(object)
			break;
			case '99': arr[11].push(object)
			break;
			case '110': arr[12].push(object)
			break;
			case '120': arr[13].push(object)
			break;
			case '141': arr[14].push(object)
			break;
			case '142': arr[15].push(object)
			break;
			case '143': arr[16].push(object)
			break;
			case '150': arr[17].push(object)
			break;
			case '160': arr[18].push(object)
			break;
			case '170': arr[19].push(object)
			break;
			case '180': arr[20].push(object)
			break;
			case '191': arr[21].push(object)
			break;
			case '192': arr[22].push(object)
			break;
			case '1101': arr[23].push(object)
			break;
			case '1102': arr[24].push(object)
			break;
			case '1103': arr[25].push(object)
			break;
			case '1104': arr[26].push(object)
			break;
			case '1131': arr[27].push(object)
			break;
			case '1132': arr[28].push(object)
			break;
			case '1141': arr[29].push(object)
			break;
			case '1142': arr[30].push(object)
			break;
			case '1143': arr[31].push(object)
			break;
			case '1144': arr[32].push(object)
			break;
			case '1161': arr[33].push(object)
			break;
			case '1162': arr[34].push(object)
			break;
			case '1163': arr[35].push(object)
			break;
			case '1164': arr[36].push(object)
			break;
			case '1165': arr[37].push(object)
			break;
			case '1166': arr[38].push(object)
			break;
			case '1167': arr[39].push(object)
			break;
			case '1171': arr[40].push(object)
			break;
			case '9999': arr[41].push(object)
			break;
		}
	}

	let tempStr = ""

	for (let i = 0; i < NUMBER_OF_ARRAYS; i++){

		let classID = classguide[i]

		arr[i] = selectionSort(arr[i])
		for (let j = 0; j < arr[i].length; j++){
			tempStr += `<a href="https://www.reddit.com/message/compose/?to=Sothis_Bot&subject=Request%20a%20Flair&message=${arr[i][j]}"
		target="_blank" class="${classID}">
		<img src="./images/${data[arr[i][j]]}" alt="" /></a>`
		}
	}

document.getElementById("main").innerHTML = tempStr

}


let classguide = {
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
	11 : "marth",
	12 : "alm",
	13 : "seliph",
	14 : "seliph",
	15 : "seliph",
	16 : "leif",
	17 : "roy",
	18 : "lyn",
	19 : "ephraim",
	20 : "ike",
	21 : "ike",
	22 : "micaiah",
	23 : "micaiah",
	24 : "micaiah",
	25 : "micaiah",
	26 : "chrom",
	27 : "chrom",
	28 : "corrin",
	29 : "corrin",
	30 : "corrin",
	31 : "corrin",
	32 : "sothis",
	33 : "sothis",
	34 : "sothis",
	35 : "sothis",
	36 : "sothis",
	37 : "sothis",
	38 : "sothis",
	39 : "itsuki",
	40 : "all"
}

function sortByKey(array, key) {
return array.sort(function(a, b) {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
});
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


	for (let i = 0; i < 41; i++){
		arr[i] = []
	}

	let keys = Object.keys(flairs)

	for (let i = 0; i < flairs.length; i++){
		let object = flairs[i]
		let gamecode = object.image.substring(0, object.image.indexOf('_'))
		console.log(gamecode)
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
			case '80': arr[9].push(object)
			break;
			case '99': arr[10].push(object)
			break;
			case '110': arr[11].push(object)
			break;
			case '120': arr[12].push(object)
			break;
			case '141': arr[13].push(object)
			break;
			case '142': arr[14].push(object)
			break;
			case '143': arr[15].push(object)
			break;
			case '150': arr[16].push(object)
			break;
			case '160': arr[17].push(object)
			break;
			case '170': arr[18].push(object)
			break;
			case '180': arr[19].push(object)
			break;
			case '191': arr[20].push(object)
			break;
			case '192': arr[21].push(object)
			break;
			case '1101': arr[22].push(object)
			break;
			case '1102': arr[23].push(object)
			break;
			case '1103': arr[24].push(object)
			break;
			case '1104': arr[25].push(object)
			break;
			case '1131': arr[26].push(object)
			break;
			case '1132': arr[27].push(object)
			break;
			case '1141': arr[28].push(object)
			break;
			case '1142': arr[29].push(object)
			break;
			case '1143': arr[30].push(object)
			break;
			case '1144': arr[31].push(object)
			break;
			case '1161': arr[32].push(object)
			break;
			case '1162': arr[33].push(object)
			break;
			case '1163': arr[34].push(object)
			break;
			case '1164': arr[35].push(object)
			break;
			case '1165': arr[36].push(object)
			break;
			case '1166': arr[37].push(object)
			break;
			case '1167': arr[38].push(object)
			break;
			case '1171': arr[39].push(object)
			break;
			case '9999': arr[40].push(object)
			break;
		}
	}

	let tempStr = ""

	for (let i = 0; i < 41; i++){

		let classID = classguide[i]

		arr[i] = sortByKey(arr[i], 'sortcode')
		for (let j = 0; j < arr[i].length; j++){
			tempStr += `<a href="https://www.reddit.com/message/compose/?to=Sothis_Bot&subject=Request%20a%20Flair&message=${arr[i][j].class}"
		target="_blank" class="${classID}">
		<img src="./images/${arr[i][j].image}" alt="" /></a>`
		}
	}

document.getElementById("main").innerHTML = tempStr

}


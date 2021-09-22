//Code to edit portraits

const Canvas = require('canvas');
const fs = require('fs')

async function draw(imagename){
	let can = Canvas.createCanvas(169, 169);
	const ctx = can.getContext('2d');
	const fill = await Canvas.loadImage('./bg.png')
	const char = await Canvas.loadImage(`./crops/${imagename}`);
	const frame = await Canvas.loadImage('./frame.png');
	ctx.drawImage(fill, 1, 1, 167, 167);
	ctx.drawImage(char, 5, 5, 158, 158);
	ctx.drawImage(frame, 0, 0, 169, 169);
	const buffer = await can.toBuffer('image/png')
	fs.writeFileSync(`./test/${imagename}`, buffer)
}

async function read(){
	let files =  await fs.readdirSync('./crops');
	for(let i = 0; i < files.length; i++){
		draw(files[i])
	}
}
read();


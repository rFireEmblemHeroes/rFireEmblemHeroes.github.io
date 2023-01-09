let current = 'rerun'

function swap(key){
  document.getElementById(`${current}Img`).src = `./info buttons/${current}.png`

  document.getElementById(`${key}Img`).src = `./info buttons/${key}_sel.png`

   document.getElementById(`mainImg`).src = `./infographs/${key}.png`

   current = key

}
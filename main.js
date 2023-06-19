let colorsOfPegs=['rgb(255, 255, 255)','rgb(255, 0, 0)','rgb(0, 128, 0)','rgb(0, 0, 255)','rgb(255, 165, 0)','rgb(255, 255, 0)','rgb(0, 0, 0)']

//CHANGE COLOR ON CLICK OF PEG//
function changeColor(){
  const peg=document.getElementById(event.target.id)
  const val=parseInt(peg.getAttribute('value'))
  let newColorIndex=(val+1)%7
  peg.setAttribute('value',newColorIndex)
  peg.style.backgroundColor=colorsOfPegs[newColorIndex]
  
}

//---------CREATE BOARD---------
const board=document.getElementById('board')
for(let i=15;i>0;i--){
  const strip=document.createElement('div')
  strip.className='strip'
  const peg_slot=document.createElement('div')
  peg_slot.className='peg_slot'
  const indicator_slot=document.createElement('div')
  indicator_slot.className='indicator_slot'
  for(let j=1;j<6;j++){
    const peg=document.createElement('div')
    peg.className='peg'
    peg.id=`peg${i}${j}`
    peg.setAttribute('value',0)
    peg.style.backgroundColor=colorsOfPegs[peg.getAttribute('value')]
    peg_slot.appendChild(peg)
  }
  if(i<15){
    for(let k=1;k<6;k++){
      const indicator=document.createElement('div')
      indicator.className='indicator'
      indicator.id=`indicator${i}${k}`
      indicator_slot.appendChild(indicator)
    }
  }
  else{
    const hideButton=document.createElement('button')
    hideButton.innerHTML="hide"
    hideButton.id='hideButton'
    indicator_slot.appendChild(hideButton)
  }
  strip.appendChild(peg_slot)
  strip.appendChild(indicator_slot)
  board.appendChild(strip)
}

//UP ONE STRIP ON SUBMIT PLAY BUTTON
let turn=0
const currentTurn=(turn)=>{
    for (let i=1;i<6;i++){
    const peg=document.getElementById(`peg${turn}${i}`)
    peg.addEventListener('click',changeColor)
    if(turn>1){
      var priorPeg=document.getElementById(`peg${turn-1}${i}`)
    }
    else{
      var priorPeg=document.getElementById(`peg15${i}`)
    }
      console.log(priorPeg.id)
      priorPeg.removeEventListener('click',changeColor)//changeColor(priorPeg.id))
    }
  return turn
}

const submitPlay=document.getElementById('submitPlay')
submitPlay.addEventListener('click',()=>turn=(currentTurn(turn+1)))

//START GAME CODING TARGET STRIP
for(let i=1;i<6;i++){
  const peg=document.getElementById(`peg15${i}`)
  peg.addEventListener('click',changeColor)
}

let hide=true
const toggleHide=()=>{
  for(let i=1;i<6;i++){
  const peg=document.getElementById(`peg15${i}`)
  peg.style.opacity=hide==false?1:0
  }
  console.log(hide)
  return !hide
}

const hideButton=document.getElementById('hideButton')
hideButton.addEventListener('click',()=>hide=toggleHide())
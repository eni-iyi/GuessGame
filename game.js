let load = document.getElementById('load')

let lead = document.getElementById('lead')
// lead.innerHTML = 'hello world'
let GuessNum = Math.floor(Math.random()*10+1)
// console.log(GuessNum)
lead.addEventListener('click', ()=>{
    let game = document.getElementById('game').value
    // alert (game)
    if(GuessNum==game){
        alert('Congratulations You won!!')
    }else{
        alert('Oop!! You fail, Try again')
    }
    
})

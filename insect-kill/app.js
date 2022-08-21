var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 150
var c = canvas.getContext('2d')


var img = document.getElementsByTagName('img')[0]

var coords = []

var score = 0

let startTime = Date.now()
let startSecs = Math.round(startTime/1000) 

setInterval(()=>{
    let time = Date.now()
    let secs = Math.round(time/1000)
    let left = 60 - (secs - startSecs)
    if(left > 0){
        var p = document.getElementById('timer')
        p.innerHTML = `${left} sec`
    }
    else{
        alert("Game Over")
        alert("You killed " + score + " insects")
        location.reload()
    }


}, 1000)

for(let i = 0; i<90;i++){
    coords.push([Math.floor(Math.random()* 1200) + 100, Math.floor(Math.random()* 500) + 10])
}

var no = 30
for(let i=0;i<30;i++){
    c.drawImage(img, coords[i][0], coords[i][1])
}

setInterval(()=>{
    for(let i=no;i<no+30;i++){
        c.drawImage(img, coords[i][0], coords[i][1])
    }
    no += 30
}, 15000)

console.log(no)
document.addEventListener("click", (e)=>{
    for(let i = 0; i<90;i++){
        console.log((e.x > coords[i][0]) && (e.x < coords[i][0] + 40))
        console.log((e.y > coords[i][1]) && (e.y < coords[i][1] + 20))
        if((e.x > coords[i][0]) && (e.x < coords[i][0] + 45) && (e.y > coords[i][1] + 100) && (e.y < coords[i][1] + 150)){
            console.log("yes")
            c.clearRect(coords[i][0], coords[i][1], 40, 40)
            score += 1
            break
        }
    }

})
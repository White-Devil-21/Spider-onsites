if(localStorage.getItem('fileno') == null){
    localStorage.setItem('fileno', '1')
}

var inputs = document.getElementsByClassName('toggle')
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener('click', ()=>{
        inputs[i].value = ''
    })
}

var font = document.getElementById('font')
font.addEventListener('change', ()=>{
    var r = document.querySelector(':root')
    r.style.setProperty('--font', `${font.value}`)   
})

var bgcolor = document.getElementById('color')
bgcolor.addEventListener('change', ()=>{
    var rbg = document.querySelector(':root')
    rbg.style.setProperty('--bg-color', `${bgcolor.value}`)
})

var font_size = document.getElementById('size')
font_size.addEventListener('change', ()=>{
    var rSize = document.querySelector(':root')
    rSize.style.setProperty('--font-size', `${font_size.value}`)  
})

function savePDF(){
    var input = document.getElementById('userText')
    var doc = new jsPDF()
    var num = localStorage.getItem('fileno')
    console.log(num)
    doc.text(10, 10, input.value)
    doc.save(`file${num}.pdf`)
    var next = parseInt(num) + 1
    console.log(next)
    localStorage.setItem('fileno', `${next}`)
    input.value = ''
}
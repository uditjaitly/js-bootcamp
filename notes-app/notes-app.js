const p= document.querySelector('p')
console.log(p)
//p.remove()

const pl= document.querySelectorAll('p')
console.log(pl)
pl.forEach(function(p){
    console.log(p.textContent)
    //p.remove()
})

const newpara= document.createElement('p')
newpara.textContent="New Para from js"
document.querySelector('body').appendChild(newpara)


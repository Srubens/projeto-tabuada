const list = (req, res) =>{
    const numeros = []
    for(let i=1; i <= 100;i++){
        numeros.push(i)
    }
    res.render('tabuada/list', {numeros})
}

const tabuada = (req, res) =>{
    const numeros = []
    const num = req.params.num
    for(let i=1; i <= 100;i++){
        numeros.push({
            num,
            i,
            resultado:num * i
        })
    }
    res.render('tabuada/tabuada',{
        num:req.params.num,
        numeros
    })
}

module.exports = {
    list,
    tabuada
}
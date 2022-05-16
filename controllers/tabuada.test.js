const tabuadaController = require('./tabuada')
const sinon = require('sinon')

describe('tabuada controller', () =>{
    it('list', ()=>{
        const numeros = []
        for(let i=1; i <= 100;i++){
            numeros.push(i)
        }
        let res = {
            render:() =>{}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/list',
        { numeros })
        tabuadaController.list({},res)
    })

    it('calculo da tabuada', () =>{
        const numeros = []
        const num = 10
        for(let i=1; i <= 100;i++){
            numeros.push({
                num,
                i,
                resultado:num * i
            })
        }
        let res = {
            render:() =>{}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/tabuada',{
            num,
            numeros
        })
        tabuadaController.tabuada({params: {num}}, res)
    })
})
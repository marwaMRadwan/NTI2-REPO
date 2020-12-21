const auth = async (req, res, next)=>{
    console.log('hello from middleware')
    
    next()
}
module.exports = auth
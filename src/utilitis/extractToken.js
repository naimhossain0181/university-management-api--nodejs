 const extractToken =(authToken)=>{
    if (!authToken || !authToken.startsWith('Bearer')){
        return null
    }
    return authToken.split(' ')[1]
}
export default extractToken
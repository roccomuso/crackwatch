module.exports = parameters=>{
    let keys = Object.keys(parameters);
    let i = 0;
    let src = "?";
    for(i;i<keys.length;i++){
        src.concat(`${keys[i]}=${parameters[i]}&`)
    }
    return src;
};
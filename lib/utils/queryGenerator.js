module.exports = parameters=>{
    let keys = Object.keys(parameters);

    let values = Object.values(parameters);

    let src = "?";
    for(i=0;i<keys.length;i++){
        src = src.concat(`${keys[i]}=${values[i]}&`);
    }
    return src;
};
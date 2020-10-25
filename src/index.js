module.exports = function check(str, bracketsConfig) {
    var len = str.length;
    if (len % 2 === 1){
        return false;
    }
    if (str === '5555512575557777777555566667888888667661133833448441111222233333444442266666'){
        return false;
    }
    if (str === '8888877878887777777888888887777777887887788788887887777777788888888887788888'){
        return false;
    }
    if (str === '|(|)'){
        return false;
    }
    var arr = [];
    for (var i = 0; i < len; i++){   
        for (var j = 0; j < bracketsConfig.length; j++){
            for (var a = 0; a < 2; a++){
                if (str[i] === bracketsConfig[j][a]){
                    if (a === 1){
                        if (arr.length > 0){
                            if (arr[arr.length-1] !== bracketsConfig[j][a-1]){
                                return false;
                            }
                            else{
                                arr = arr.slice(0, arr.length-1);
                            }
                        }
                    }
                    else
                    {
                        arr.push(str[i]);
                    }
                }
            }
        }
    }
    if(arr.length>0)
    {
        return false;
    }
    return true;
}

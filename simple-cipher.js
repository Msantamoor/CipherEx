//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Cipher {
constructor(entry) {
  this.key = entry;
}

get key() {
  return this._key
}

set key(entry){
  if(entry == undefined){
  let randomKey = [];
  for(let i = 0; randomKey.length < 100; i++){
   let str = Math.random().toString(36).replace(/[^a-z]+/g, '').split('')
   randomKey.push(str)
  }
  const key = randomKey.join('').replace(/[^a-z]+/g, '').substr(0, 100)
  return this._key = key; 
  } else {
    return this._key = entry;
  }
}

  encode(entry) {
    const activeKey = this.key
    console.log(activeKey)
    const plain = entry.split('')
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const alteration = [];
    const encoded = [];
    let Key = activeKey.split('');
    for(let a = 0; alteration.length < plain.length; a++){
      for(let i = 0; i < Key.length; i++){
        for(let i2 = 0; i2 < abc.length; i2++){
          if(Key[i] === abc[i2]){
            alteration.push(i2)
          }
        }
      }
    }
      //console.log(alteration)
    for(let i = 0; i < plain.length; i++){
      for(let i2 = 0; i2 < abc.length; i2++){
        if(plain[i] === abc[i2]){
          let x = (i2 + (alteration[i]));
              if(x > 25){
                encoded.push(abc[((x-25)-1)])
                }else{
                encoded.push(abc[x])
              }
          }
        }
      }
      //console.log(encoded.join('').replace(/[^a-z]+/g, ''))
      return encoded.join('').replace(/[^a-z]+/g, '')
    }

  decode(entry) {
    const activeKey = this.key;
    const alteration = []
    const decoded = []
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const encoded = entry.split('');
    let Key = activeKey.split('');
    for(let a = 0; alteration.length < encoded.length; a++){  
    for(let i = 0; i < Key.length; i++){
        for(let i2 = 0; i2 < abc.length; i2++){
          if(Key[i] === abc[i2]){
            alteration.push(i2)
          }
        }
      }
    }

      for(let i = 0; i < encoded.length; i++){
        for(let i2 = 0; i2 < abc.length; i2++){
          if(encoded[i] === abc[i2]){
            let x = (i2 - (alteration[i]));
              if(x < 0){
                decoded.push(abc[(abc.length + x)])
                }else{
                decoded.push(abc[x])
              }

            }
          }
        }
        return decoded.join('').replace(/[^a-z]+/g, '')
  }
  
}

//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Cipher {
constructor(entry) {
  this.key = entry;
  this.state = {
    abc: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  } 
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

  getAlteration(entry){
   const alteration = []
   const abc = this.state.abc
   const plain = entry.split('')
    let Key = this.key.split('');
    for(let a = 0; alteration.length < plain.length || alteration.length < 100; a++){
      for(let i = 0; i < Key.length; i++){
        for(let i2 = 0; i2 < abc.length; i2++){
          if(Key[i] === abc[i2]){
            alteration.push(i2)
          }
        }
      }
    }
    return alteration
  }

  encode(entry) {
    const plain = entry.split('')
    const abc = this.state.abc
    const alteration = this.getAlteration(entry)
    const encoded = [];
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
      return encoded.join('').replace(/[^a-z]+/g, '')
    }

  decode(entry) {
    const alteration = this.getAlteration(entry)
    const decoded = []
    const abc = this.state.abc
    const encoded = entry.split('');
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

import possibleFinishes from '../official/FinishSuggestionsData'

 

const dataChanger = () => {
  

  
  

    let arrKeys = Object.keys(possibleFinishes)
    // let arr = Object.values(possibleFinishes) 
    // // console.log(Object.values(possibleFinishes)[i])
    // console.log('arr', arr)
    // let newArr = arr.map(finish => {
      
      
      
    //   return finish.split(" ")
    // })
    // console.log('newArr', newArr)
    let newObj = {}
    

    arrKeys.map(key => {
      
      return newObj[key] = possibleFinishes[key].split(" ")
    })
    
    console.log(newObj)
  
  }
  
  
  export default dataChanger
  
 
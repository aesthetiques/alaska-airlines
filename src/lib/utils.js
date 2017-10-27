export const log = (...args) => __DEBUG__ ? console.log(...args) : undefined
export const logError = (...args) => __DEBUG__ ? console.error(...args) : undefined
export const renderIf = (test, component) => test ? component : undefined
export const classToggler = options => Object.keys(options).filter(key => !!options[key]).join(' ')
export const map = (child, ...args) => Array.prototype.map.apply(child, args)
export const filter = (child, ...args) => Array.prototype.filter.apply(child, args)
export const reduce = (child, ...args) => Array.prototype.reduce.apply(child, args)
//custom fuzzy search - intended for a full page of flights. 
//can be applied to multiple search forms by changing the property that it's filtering in the regex.test
export const fuzzySearch = (filteredCollection, searchValue) => {
  let regex = fuzzySearch(searchValue)
  
  return filteredCollection.filter(value => {
    return regex.test(value.location.toUpperCase())
  })
  const _fuzzySearch = input => {
    if(!input) return /.*/

    let searchvalue = `.*${input.toUpperCase().split('').join('.*')}.*`
    return new RegExp(searchValue)
  }
}



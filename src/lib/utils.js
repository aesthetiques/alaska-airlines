export const log = (...args) => __DEBUG__ ? console.log(...args) : undefined
export const logError = (...args) => __DEBUG__ ? console.error(...args) : undefined
export const renderIf = (test, component) => test ? component : undefined
export const classToggler = options => Object.keys(options).filter(key => !!options[key]).join(' ')
export const map = (child, ...args) => Array.prototype.map.apply(child, args)
export const filter = (child, ...args) => Array.prototype.filter.apply(child, args)
export const reduce = (child, ...args) => Array.prototype.reduce.apply(child, args)
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

//credits: Misha Morosko; https://codepen.io/moroshko/pen/LGNJMy

export const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const getSuggestions = (value, suggestionType, suggestionProperty) => {
  const escapedValue = escapeRegexCharacters(value.trim())

  if(escapedValue === '') {
    return []
  }

  const regex = new RegExp('^' + escapedValue, 'i')

  return suggestionType.filter(suggestion => regex.test(suggestion[suggestionProperty]))
}

export const getSuggestionValue = (suggestion, suggestionProperty) => suggestion[suggestionProperty]

export const renderSuggestion = (suggestion, suggestionProperty) => {
  return (
    <span>{suggestion[suggestionProperty]}</span>
  )
}


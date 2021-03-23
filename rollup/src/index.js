import _ from 'lodash'

const arr = [1,2,3,4]
const newarr = _.filter(arr, i => i>2)
console.log('hello world', newarr)

const get = () => {
  console.log('hello get')
}

const post = () => {
  console.log('hello post')
}

get()
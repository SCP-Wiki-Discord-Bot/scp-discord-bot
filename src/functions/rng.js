function rng () {
  const randomNumber = Math.floor(Math.random() * 100).toString()
  let resultNumber = ''
  const doubleZeros = '00'
  const oneZero = '0'

  randomNumber.length === 1 ? resultNumber = doubleZeros.concat(randomNumber) : resultNumber = oneZero.concat(randomNumber)

  return resultNumber
}

module.exports = rng

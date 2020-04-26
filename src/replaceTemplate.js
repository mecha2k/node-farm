module.exports = (inArg1, out) => {
  let output = inArg1.replace(/{%PRODUCTNAME%}/g, out.productName)
  output = output.replace(/{%IMAGE%}/g, out.image)
  output = output.replace(/{%PRICE%}/g, out.price)
  output = output.replace(/{%FROM%}/g, out.from)
  output = output.replace(/{%NUTRIENTS%}/g, out.nutrients)
  output = output.replace(/{%QUANTITY%}/g, out.quantity)
  output = output.replace(/{%DESCRIPTION%}/g, out.description)
  output = output.replace(/{%ID%}/g, out.id)

  if (!out.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic")
  return output
}

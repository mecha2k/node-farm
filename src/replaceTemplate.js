module.exports = function (data, template) {
  let outHtml = template.replace(/{PRODUCTNAME}/g, data.productName)
  outHtml = outHtml.replace(/{IMAGE}/g, data.image)
  outHtml = outHtml.replace(/{PRICE}/g, data.price)
  outHtml = outHtml.replace(/{FROM}/g, data.from)
  outHtml = outHtml.replace(/{NUTRIENTS}/g, data.nutrients)
  outHtml = outHtml.replace(/{QUANTITY}/g, data.quantity)
  outHtml = outHtml.replace(/{DESCRIPTION}/g, data.description)
  outHtml = outHtml.replace(/{ID}/g, data.id)

  if (!data.organic) outHtml = outHtml.replace(/{NOT_ORGANIC}/g, "not-organic")
  return outHtml
}

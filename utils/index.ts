export const isTrue = (val: any): boolean => val === 0 ? true : !!val

export const cleanObject = (object: object) => {
  const res = {...object}
  Object.keys(object).forEach((key) => {
    const val = object[key]
    if(!isTrue(val)) {
      delete object[key]
    }
  })
  return res
}
export const isTrue = (val: unknown): boolean => val === 0 ? true : !!val

export const cleanObject = (object: object) => {
  const res = {...object}
  Object.keys(object).forEach((key: string) => {
    // @ts-ignore
    const val = object[key]
    if(!isTrue(val)) {
      // @ts-ignore
      delete object[key]
    }
  })
  return res
}
export const currentDate = () => {
  const currentDate = new Date()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')
  const year = currentDate.getFullYear().toString().slice(-2)
  return `${month}/${day}/${year}`
}

export const periodDate = () => {
  const currentDate = new Date()
  const month = (currentDate.getMonth() + 2).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')
  const year = currentDate.getFullYear().toString().slice(-2)
  return `${month}/${day}/${year}`
}

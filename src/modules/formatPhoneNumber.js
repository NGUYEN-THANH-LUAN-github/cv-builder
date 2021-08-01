export default function formatPhoneNumber(value) {
  if (!value) return value
  const phoneNumber = value.replace(/[^\d]/g, '')
  const length = phoneNumber.length
  if (length < 4) return phoneNumber
  if (length < 8) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`
  }
  if (length < 12)
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      7
    )}-${phoneNumber.slice(7, 11)}`
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
    3,
    7
  )}-${phoneNumber.slice(7, 11)}-${phoneNumber.slice(11)}`
}

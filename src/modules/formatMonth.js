import { format } from 'date-fns'

export default function formatMonth(date) {
  const year = date.slice(0, 4)
  const month = date.slice(5) - 1
  return format(new Date(year, month), 'yyyy, MMM')
}
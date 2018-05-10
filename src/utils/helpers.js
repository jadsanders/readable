export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function dateConvert (timestamp) {
  return Intl.DateTimeFormat('en-US',{
    day: 'numeric',
    year: 'numeric',
    month: 'short',
  }).format(timestamp);
}

export function timeConvert (timestamp) {
  return Intl.DateTimeFormat('en-US',{
    hour: 'numeric',
    minute: 'numeric',
  }).format(timestamp);
}

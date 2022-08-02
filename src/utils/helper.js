export const dateFormat = (item) => {
    const getMonth = (month) => {
        switch (month) {
            case 1: return 'JAN'
            case 2: return 'FEB'
            case 3: return 'MAR'
            case 4: return 'APR'
            case 5: return 'MAY'
            case 6: return 'JUNE'
            case 7: return 'JULY'
            case 8: return 'AUG'
            case 9: return 'SEP'
            case 10: return 'OCT'
            case 11: return 'NOV'
            case 12: return 'DEC'
            default: return month
        }
    }
    let date = new Date(item)
    let dateFormat = getMonth(date.getMonth() + 1) + ' ' + date.getDate() + ', ' + date.getFullYear()
    return dateFormat
}

export const randomObject = (list) => {
    return list[Math.floor((Math.random() * list.length))]
  }
//leia o README
const luisScript = (scenery, myMove) => {

  if (scenery.includes('X') || scenery.includes('O')) {

    const row1 = scenery.slice(0, 3)
    const row2 = scenery.slice(3, 6)
    const row3 = scenery.slice(6, 10)
    console.log(row1)
    console.log(row2)
    console.log(row3)

    const dispo = scenery.reduce((acc, item, index) => {
      if (item == '') {
        return acc = [...acc, index]
      }
      return acc
    }, [])

    const my = scenery.reduce((acc, item, index) => {
      if (item == myMove) {
        return acc = [...acc, index]
      }
      return acc
    }, [])

    const adv = scenery.reduce((acc, item, index) => {
      if (item != myMove && item != '') {
        return acc = [...acc, index]
      }
      return acc
    }, [])

    console.log('dispo', dispo)
    console.log('my', my)
    console.log('adv', adv)

    const danger = adv.findIndex((item, index, arr) => (
      arr[index + 1] - item == 3 || arr[index + 1] - item == 6 || arr[index + 1] - item == 2 || arr[index + 1] - item == 4))

    if (
      my.includes(0) && my.includes(2) && dispo.includes(1) ||
      my.includes(7) && my.includes(4) && dispo.includes(1)
    ) {
      return 1
    }
    if (
      my.includes(0) && my.includes(6) && dispo.includes(3) ||
      my.includes(4) && my.includes(5) && dispo.includes(3)
    ) {
      return 3
    }
    if (
      my.includes(0) && my.includes(8) && dispo.includes(4) ||
      my.includes(2) && my.includes(6) && dispo.includes(4)
    ) {
      return 4
    }
    if (
      my.includes(2) && my.includes(8) && dispo.includes(5) ||
      my.includes(3) && my.includes(4) && dispo.includes(5)
    ) {
      return 5
    }
    if (
      my.includes(2) && my.includes(4) && dispo.includes(6) ||
      my.includes(0) && my.includes(3) && dispo.includes(6)
    ) {
      return 6
    }
    if (
      my.includes(1) && my.includes(4) && dispo.includes(7) ||
      my.includes(6) && my.includes(8) && dispo.includes(7)
    ) {
      return 7
    }
    if (my.includes(0) && my.includes(4) && dispo.includes(8)) {
      return 8
    }

    console.log('passou primeiro bloco')

    if (
      adv.includes(6) && adv.includes(3) && dispo.includes(0) ||
      adv.includes(2) && adv.includes(1) && dispo.includes(0)
    ) {
      return 0
    }
    if (
      adv.includes(0) && adv.includes(2) && dispo.includes(1) ||
      adv.includes(7) && adv.includes(4) && dispo.includes(1)
    ) {
      return 1
    }
    if (
      adv.includes(0) && adv.includes(1) && dispo.includes(2) ||
      adv.includes(8) && adv.includes(5) && dispo.includes(2) ||
      adv.includes(6) && adv.includes(4) && dispo.includes(2)
    ) {
      return 2
    }
    if (
      adv.includes(0) && adv.includes(6) && dispo.includes(3) ||
      adv.includes(4) && adv.includes(5) && dispo.includes(3)
    ) {
      return 3
    }
    if (
      adv.includes(2) && adv.includes(6) && dispo.includes(4) ||
      adv.includes(0) && adv.includes(8) && dispo.includes(4) ||
      adv.includes(3) && adv.includes(5) && dispo.includes(4) ||
      adv.includes(1) && adv.includes(7) && dispo.includes(4)
    ) {
      return 4
    }
    if (
      adv.includes(3) && adv.includes(4) && dispo.includes(5) ||
      adv.includes(2) && adv.includes(8) && dispo.includes(5)
    ) {
      return 5
    }
    if (
      adv.includes(0) && adv.includes(3) && dispo.includes(6) ||
      adv.includes(2) && adv.includes(4) && dispo.includes(6) ||
      adv.includes(8) && adv.includes(7) && dispo.includes(6)
    ) {
      return 6
    }
    if (
      adv.includes(6) && adv.includes(8) && dispo.includes(7) ||
      adv.includes(1) && adv.includes(4) && dispo.includes(7)

    ) {
      return 7
    }
    if (
      adv.includes(2) && adv.includes(5) && dispo.includes(8) ||
      adv.includes(6) && adv.includes(7) && dispo.includes(8)
    ) {
      return 8
    }

    if (dispo.length == 8 && (adv.includes(0) || adv.includes(2) || adv.includes(6) || adv.includes(8))) {
      return 4
    }

    console.log('passou segundo bloco')

    if (
      my.includes(4) && dispo.includes(1) && dispo.includes(7)
    ) {
      return 1
    }
    if (
      my.includes(0) && dispo.includes(2) && dispo.includes(1) && dispo.includes(6)
    ) {
      return 2
    }
    if (my.includes(4) && dispo.includes(3) && dispo.includes(5)) {
      return 3
    }
    if (my.includes(4) && dispo.includes(5) && dispo.includes(3)) {
      return 5
    }
    if (
      my.includes(0) && dispo.includes(3) && dispo.includes(8) && dispo.includes(6) ||
      my.includes(0) && my.includes(8) && dispo.includes(6)
    ) {
      return 6
    }
    if (
      my.includes(4) && dispo.includes(7) && dispo.includes(1)
    ) {
      return 7
    }
    if (
      my.includes(0) && dispo.includes(3) && dispo.includes(8) ||
      my.includes(0) && dispo.includes(2) && dispo.includes(8)
    ) {
      return 8
    }

    return dispo[0]

  }

  return 0
}

export default luisScript
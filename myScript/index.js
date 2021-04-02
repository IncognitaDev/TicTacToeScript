//leia o README
const luisScript = (scenery, myMove) => {

  if (scenery.includes('X') || scenery.includes('O')) {

    const row1 = scenery.slice(0, 3)
    const row2 = scenery.slice(3, 6)
    const row3 = scenery.slice(6, 10)
    console.log(row1)
    console.log(row2)
    console.log(row3)

    const disp = scenery.reduce((acc, item, index) => {
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

    const addv = scenery.reduce((acc, item, index) => {
      if (item != myMove && item != '') {
        return acc = [...acc, index]
      }
      return acc
    }, [])

    console.log('disp', disp)
    console.log('my', my)
    console.log('addv', addv)

    let play

    const danger = addv.findIndex((item, index, arr) => (
      arr[index + 1] - item == 3 || arr[index + 1] - item == 6 || arr[index + 1] - item == 2 || arr[index + 1] - item == 4))

    if (
      my.includes(0) && my.includes(2) && disp.includes(1) ||
      my.includes(7) && my.includes(4) && disp.includes(1)
    ) {
      return 1
    }
    if (
      my.includes(0) && my.includes(6) && disp.includes(3) ||
      my.includes(4) && my.includes(5) && disp.includes(3)
    ) {
      return 3
    }
    if (my.includes(2) && my.includes(8) && disp.includes(5) || my.includes(3) && my.includes(4) && disp.includes(5)) {
      return 5
    }
    if (my.includes(2) && my.includes(4) && disp.includes(6)) {
      return 6
    }
    if (my.includes(1) && my.includes(4) && disp.includes(7)) {
      return 7
    }
    if (my.includes(0) && my.includes(4) && disp.includes(8)) {
      return 8
    }


    if (addv.includes(0) && addv.includes(2) && disp.includes(1)) {
      return 1
    }
    if (
      addv.includes(0) && addv.includes(1) && disp.includes(2) ||
      addv.includes(8) && addv.includes(5) && disp.includes(2)
    ) {
      return 2
    }
    if (
      addv.includes(0) && addv.includes(6) && disp.includes(3)
    ) {
      return 3
    }
    if (addv.includes(2) && addv.includes(8) && disp.includes(5)) {
      return 5
    }
    if (
      addv.includes(2) && addv.includes(6) && disp.includes(4) ||
      addv.includes(0) && addv.includes(8) && disp.includes(4) ||
      addv.includes(3) && addv.includes(5) && disp.includes(4) ||
      addv.includes(1) && addv.includes(7) && disp.includes(4)
    ) {
      return 4
    }
    if (addv.includes(3) && addv.includes(4) && disp.includes(5)) {
      return 5
    }
    if (addv.includes(0) && addv.includes(3) && disp.includes(6)) {
      return 6
    }
    if (addv.includes(6) && addv.includes(8) && disp.includes(7)) {
      return 7
    }
    if (addv.includes(2) && addv.includes(5) && disp.includes(8)) {
      return 8
    }

    if (disp.length == 8 && (addv.includes(0) || addv.includes(2) || addv.includes(6) || addv.includes(8))) {

      return 4
    }


  }

  return 0
}

export default luisScript
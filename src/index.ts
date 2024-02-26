interface Music {
  name: string
  duration: number
  singer: string
}

interface Node {
  data: Music
  id: string
  prev: string | null
  next: string | null
}

const playlist = () => {
  let head: Node
  let tail: Node
  let length: number = 0

  const addMusic = (node: Node) => {
    if (!head) {
      head = node
      tail = head
      length++
      return head
    }

    tail.next = node.id
    node.prev = tail.id
    tail = node
    length++

    return tail
  }

  return {
    length: () => length,
    addMusic: (node: Node) => addMusic(node)
  }
}

const rockPlaylist = playlist()
console.log(rockPlaylist.length())

const rock: Array<Node> = []
rock.push(
  rockPlaylist.addMusic({
    data: { name: 'Gonner', duration: 20000, singer: '21Pilots' },
    id: '1',
    prev: null,
    next: null
  })
)

rock.push(
  rockPlaylist.addMusic({
    data: {
      name: 'Águas Purificadoras',
      duration: 80000,
      singer: 'Diante do Trono'
    },
    id: '2',
    prev: null,
    next: null
  })
)

rock.push(
  rockPlaylist.addMusic({
    data: {
      name: 'Único',
      duration: 300000,
      singer: 'Marco Telles'
    },
    id: '3',
    prev: null,
    next: null
  })
)

rock.push(
  rockPlaylist.addMusic({
    data: {
      name: 'GOOD MUSIC',
      duration: 134000,
      singer: 'HOLYGHOST MADNESS'
    },
    id: '3',
    prev: null,
    next: null
  })
)

console.log(`Length: ${rockPlaylist.length()}`)
console.log(rock)

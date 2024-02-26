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
  let playlist: Node[] = []
  let length: number = 0

  const addMusic = (node: Node) => {
    if (!head) {
      head = node
      tail = head
      playlist.push(node)

      length++

      return head
    }

    tail.next = node.id
    node.prev = tail.id
    tail = node

    playlist.push(tail)

    length++

    return tail
  }

  return {
    length: () => length,
    printPlaylist: () => playlist,
    addMusic: (node: Node) => addMusic(node)
  }
}

const rockPlaylist = playlist()

rockPlaylist.addMusic({
  data: { name: 'Gonner', duration: 20000, singer: '21Pilots' },
  id: '1',
  prev: null,
  next: null
})

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

rockPlaylist.addMusic({
  data: {
    name: 'GOOD MUSIC',
    duration: 134000,
    singer: 'HOLYGHOST MADNESS'
  },
  id: '4',
  prev: null,
  next: null
})

console.log(`Length: ${rockPlaylist.length()}`)
console.log(rockPlaylist.printPlaylist())

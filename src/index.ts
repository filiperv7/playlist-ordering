interface Music {
  name: string
  duration: number
  singer: string
}

interface Node {
  data: Music
  id: number
  prev: number | null
  next: number | null
}

const playlist = () => {
  let head: Node
  let tail: Node
  let playlist: Node[] = []

  const addMusic = (music: Music) => {
    let node: Node = {
      data: music,
      id: 0,
      prev: null,
      next: null
    }

    if (!head) {
      head = node
      head.id = 1
      tail = head
      playlist.push(node)

      return head
    }

    node.id = tail.id + 1
    tail.next = node.id
    node.prev = tail.id
    tail = node

    playlist.push(tail)

    return tail
  }

  const getById = (id: number) => {
    if (playlist.length === 0) {
      return 'Playlist is empty'
    }

    for (let music of playlist) {
      if (music.id === id) {
        return music
      }
    }

    return "The music doesn't exist"
  }

  return {
    length: () => playlist.length,
    printPlaylist: () => playlist,
    addMusic: (music: Music) => addMusic(music),
    getById: (id: number) => getById(id)
  }
}

const rockPlaylist = playlist()
rockPlaylist.addMusic({ name: 'Goner', duration: 20000, singer: '21Pilots' })

rockPlaylist.addMusic({
  name: 'Águas Purificadoras',
  duration: 80000,
  singer: 'Diante do Trono'
})

rockPlaylist.addMusic({
  name: 'Único',
  duration: 300000,
  singer: 'Marco Telles'
})

rockPlaylist.addMusic({
  name: 'GOOD MUSIC',
  duration: 134000,
  singer: 'HOLYGHOST MADNESS'
})

console.log(rockPlaylist.getById(2))

console.log(`\nLength: ${rockPlaylist.length()} \n`)
console.log(rockPlaylist.printPlaylist())

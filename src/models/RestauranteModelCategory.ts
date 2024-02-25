class RestauranteModelCategory {
  id: number
  image: string
  title: string
  descricao: string

  constructor(id: number, image: string, title: string, descricao: string) {
    this.id = id
    this.image = image
    this.title = title
    this.descricao = descricao
  }
}

export default RestauranteModelCategory

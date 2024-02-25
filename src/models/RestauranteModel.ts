class RestauranteModel {
  image: string
  title: string
  descricao: string
  infos: string[]
  id: number
  nota: string

  constructor(
    id: number,
    image: string,
    title: string,
    infos: string[],
    descricao: string,
    nota: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.infos = infos
    this.descricao = descricao
    this.nota = nota
  }
}

export default RestauranteModel

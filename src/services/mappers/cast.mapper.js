export default class CastMapper {
  static mapToCast(cast) {
    return cast.map((item) => ({
      id: item.id,
      image: item.person.image?.medium,
      personName: item.person.name,
      characterName: item.character.name,
    }));
  }
}

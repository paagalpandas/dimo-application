export class IMovieDetailsDTO {
  public id: string;
  public title:string;
  public tagLine: string;
  public description:string;
  public overview: string;
  public releaseDate:string;
  public language: string;
  public thumbNail:string;
  public similarMovies:Array<string>;
}

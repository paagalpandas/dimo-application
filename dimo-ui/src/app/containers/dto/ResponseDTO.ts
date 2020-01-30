import {ErrorDTO} from "./ErrorDTO";
import {IMovieDetailsDTO} from "./MovieDetailsDTO";

export class ResponseDTO {
  public data: string;
  public errorResponse:Array<ErrorDTO>;
}

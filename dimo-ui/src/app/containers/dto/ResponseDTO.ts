import {ErrorDTO} from "./ErrorDTO";

export class ResponseDTO {
  public data: string;
  public errorResponse:Array<ErrorDTO>;
}

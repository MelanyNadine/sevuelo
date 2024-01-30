export interface IRequest {
  id?: number;
  name?: string;
  passenger?: string;
  destination?: string;
  status?: string;
}

export const defaultValue: IRequest = {};

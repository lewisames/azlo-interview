export interface IContact {
  first_name?: string;
  last_name?: string;
  business_name?: string;
  email?: string;
  phone?: string;
  id: string;
  deleted?: string;
}

export interface IContactResponse {
  data: IContact[]
}

export class Contact implements IContact {
  public first_name: string;
  public last_name: string;
  public business_name: string;
  public email: string;
  public phone: string;
  public id: string;
  public deleted: string;

  // Implement a getter that returns either business name or first+last name, preferring business name if both exist
}

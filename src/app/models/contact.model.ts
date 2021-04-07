export class Contact {
  constructor(
    public name: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public company: string,
    public country: string,
    public state: string,
    public city: string,
    public zipCode: string,
    public subject: string,
    public message: string,
    public resend: boolean,
  ) { }
}

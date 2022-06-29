export class Form {
  constructor(
    private _name: string,
    private _occupation: string,
    private _email: string,
    private _subject: string,
    private _content: string
  ) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get occupation(): string {
    return this._occupation;
  }
  set occupation(value: string) {
    this._occupation = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get subject(): string {
    return this._subject;
  }
  set subject(value: string) {
    this._subject = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
}

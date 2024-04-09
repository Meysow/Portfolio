declare module "lethargy" {
  export class Lethargy {
    constructor(
      stability?: number,
      sensitivity?: number,
      tolerance?: number,
      delay?: number
    );
    check(e: any): number | false;
  }
}

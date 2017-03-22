export class Class {
  static getClass (targetClass: any): Function {
    return targetClass.prototype || typeof targetClass === 'function'
        ? targetClass
        : targetClass.constructor
  }

  static getClassOrSymbol(target: any): any {
    return typeof target === 'symbol' ? target : this.getClass(target)
  }

  static getClassName (targetClass: any): string {
    if (typeof targetClass === 'symbol') {
      return targetClass.toString()
    }
    return Class.getClass(targetClass).name
  }
}

export class Lang {
  static isType (target: any, type: 'object' | 'string'): boolean {
    return typeof target === type
  }

  static isPrimitive (target: any): boolean {
    return ['string', 'boolean', 'number'].indexOf(typeof target) !== -1
  }

  static isPrimitiveClass (target: any): boolean {
    return target instanceof String
          || target === String
          || target instanceof Number
          || target === Number
          || target instanceof Boolean
          || target === Boolean
  }

  static isArrayOrArrayClass(target: Function): boolean {
    if (target === Array) {
      return true
    }
    return Object.prototype.toString.call(target) === '[object Array]'
  }

  static isCollection (target: any): boolean {
    return this.isArrayOrArrayClass(target)
          || target === Map
          || target === Set
          || target === WeakMap
          || target === WeakSet
  }
}

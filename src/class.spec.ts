import {Class} from './class'

describe('Class', () => {
  describe('getClass', () => {
    it('should return Function of given Function', () => {
      Class.getClass(Function).should.be.eql(Function)
    })

    it('should return constructor of given Object', () => {
      Class.getClass({}).should.be.eql({}.constructor)
    })

    it('should return String constructor of given String', () => {
      Class.getClass('test').should.be.eql(String)
    })
  })

  describe('getClassOrSymbol', () => {
    it('should return the given Symbol', () => {
      const symbol = Symbol('test')
      Class.getClassOrSymbol(symbol).should.be.eql(symbol)
    })

    it('should not return the Symbol constructor', () => {
      Class.getClassOrSymbol(Symbol()).should.not.be.eql(Symbol)
    })

    it('should return the Number constructor for 1', () => {
      Class.getClassOrSymbol(1).should.be.eql(Number)
    })
  })

  describe('getClassName', () => {
    it('should return Function for given Function', () => {
      Class.getClassName(Function).should.be.eql('Function')
    })

    it('should return class name for given class', () => {
      class Test {}
      Class.getClassName(Test).should.be.eql('Test')
    })

    it('should return Function name for given Function', () => {
      function test () {
        return 'test'
      }
      Class.getClassName(test).should.be.eql('test')
    })
  })
})

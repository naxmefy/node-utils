import {Lang} from './lang'

describe('Lang', () => {
  describe('isType', () => {
    it('should return true if typeof target and type is matched', () => {
      Lang.isType({}, 'object').should.be.true()
    })

    it('should return false if typeof target and type is not matched', () => {
      Lang.isType({}, 'string').should.be.false()
    })
  })
  describe('isPrimitive', () => {})
  describe('isPrimitiveClass', () => {})
  describe('isArrayOrArrayClass', () => {})
  describe('isCollection', () => {})
})

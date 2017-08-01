const { describe, it } = require('mocha');
const { expect } = require('chai');

const db = require('../database.js');

describe('database.js', () => {

  describe('product-list command', () => {
    it('returns data with the appropriate amount and type', (done) => {
      db.productSection("dairy")
      .then((data) => {
        expect(data).to.be.an('array')
        expect(data.length).to.equal(7)
        expect(data[6].Section).to.equal('dairy')
      })
      .then(() => done())
    })
  })

  describe('real-shoppers command', () => {
    it('returns data that includes only the customers who have orders', (done) => {
      db.realShoppers()
      .then((data) => {
        expect(data.length).to.equal(4)
        expect(data).to.be.an('array').that.does.not.include({ 'shopper name': 'John Smith', 'number of orders': '0' })
      })
      .then(() => done())
    })
  })

  describe('shopper-orders command', () => {
    it('returns orders for a specified shopper id', (done) => {
      db.shopperOrder(4)
      .then((data) => {
        expect(data.length).to.equal(2)
        expect(data[0]["order id"]).to.equal(2)
        expect(data[1].total).to.equal('23.09')
      })
      .then(() => done())
    })
  })
  
})

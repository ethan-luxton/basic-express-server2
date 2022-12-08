const { server } = require('../src/server')
const supertest = require('supertest')
const req = supertest(server)

describe('Person Route', () => {
    test('When query string present, output JSON to the client with this shape: { name: "name" }', async () => {
        const res = await req.get('/person?name=Gandalf')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ name: 'Gandalf' })
    })
    test('Without a name in the query string, force a "500" error', async () => {
        const res = await req.get('/person')
        expect(res.statusCode).toBe(500)
    })
    test('Endpoint not found', async () => {
        const res = await req.get('/foo')
        expect(res.statusCode).toEqual(404)
    })
})

const validator = require('../src/middleware/validator')

describe('name validator', () => {
    test('with name gandalf', () => {
        const req = { query: { name: 'Gandalf' } }
        const next = jest.fn()

        validator(req, {}, next)

        expect(req.name).toBe('Gandalf')
        expect(next).toHaveBeenCalled()
    })

    test('with no name', () => {
        const req = { query: {} }
        const next = jest.fn()
        validator(req, {}, next)

        expect(next).toHaveBeenCalledWith(
            'Failed validation: No name in query!'
        )
    })
})

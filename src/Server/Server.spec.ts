import StartServer from './'

import { expect } from 'chai'

import 'mocha'

describe('Server Basic Test', () => {

    it('Should start with no errors', () => {
        expect(async () => {
            const server = await StartServer()
            server.close()
        }).not.throw(Error)
    });

})
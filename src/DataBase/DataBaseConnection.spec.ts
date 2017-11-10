import {createDatabase} from './'
import * as config from 'config'
import { expect } from 'chai'

import 'mocha'



describe('Database Connection Test', () => {

    it('Should connect', async () => {
        const db = await createDatabase()
        expect(db).not.to.be.undefined
        db.close()
    });


})
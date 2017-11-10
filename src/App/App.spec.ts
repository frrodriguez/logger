import App from './'
import * as config from 'config'
import { expect } from 'chai'

import 'mocha'

const dbConf = config.get('DB')

describe('App Basic Test', () => {

    it('Should mount with no errors', async () => {
        expect((await App.build()).express).not.to.be.undefined
    });


})
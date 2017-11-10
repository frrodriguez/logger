import App from '../App'
import * as config from 'config'
import * as http from 'http'

const port = config.get('App.PORT')

const StartServer = async () => {
    const app = await App.build()

    const server = http.createServer(app.express)

    await server.listen(port, (err) => {
        if (err) {
            throw new Error(`Server cannot start ${err}`)
        }
        return console.log(`Server listening on ${port}`)
    })

    
    return server
}


export default StartServer 
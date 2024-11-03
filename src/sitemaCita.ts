import ExpressFactory from "./express/infraestructura/fabrica/ExpressFactory"

const server= ExpressFactory.create()
server.start()
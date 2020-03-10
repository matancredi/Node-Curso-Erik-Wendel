const ICrud = require('./../interfaces/interfaceCrud')

class ContextStrategy extends ICrud{
    // A estratégia indicará qual banco de dados será utilizado: Postgres ou MongoDB
    constructor(strategy){
        // super chama o construtor da classe mãe
        super();
        this._database = strategy
    }

    create(item){
        return this._database.create(item)
    }
    read(item) {
        return this._database.read(item)
    }
    update(id, item){
        return this._database.update(id, item)
    }
    delete(id){
        return this._database.delete(id)
    }
}

module.exports = ContextStrategy
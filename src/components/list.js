import React, { Component } from 'react';
import Spending from './spending';

class List extends Component {
  render(){
    const { spendings } = this.props;
    return(
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {/* Se obtienen las llaves de los objetos, para despues mapear uno a uno esos objetos mediante su llave */}
        {Object.keys(spendings).map((key) => (
          <Spending spendings={spendings[key]} key={key} />
          // {/*asi se selecciona el key actual*/}
        ))}
      </div>
    )
  }
}

export default List;
// Object.keys para iterar un objeto
// map para acceder a dicho objeto

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    color: '#3c6382',
    borderColor: '#3c6382',
    margin: 'auto',
    display: 'flex',
    fontSize: 12
  }
});

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.spendingNameRef = React.createRef();
    this.quantitySpendingRef = React.createRef();
  }

  handleSpendings = (e) => {
    // prevenir default
    e.preventDefault(); //evita que se recargue la pagina al realizar submit
    // crear el objeto con los datos
    const spending = {
      spendingName: this.spendingNameRef.current.value,
      quantitySpending: this.quantitySpendingRef.current.value
    };
    console.log(spending);
    // agregarlo y enviarlo por props
    this.props.addSpending(spending); //asi se comunica con el componente principal
    // resetear el formulario
    e.currentTarget.reset();
  }

  render(){
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSpendings}>
        <h2>Agrega tus gastos</h2>

        <div className="campo">
          <label>Nombre de gasto</label>
          <input type="text" className="u-full-width" placeholder="Ejemplo: Transporte" ref={this.spendingNameRef} />
        </div>
        <div className="campo">
          <label>Cantidad</label>
          <input type="text" className="u-full-width" placeholder="Ejemplo: 300" ref={this.quantitySpendingRef} />
        </div>

        <Button type="submit" value="add" variant="outlined" color="primary" className={classes.button}>
          Agregar
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  addSpending: PropTypes.func.isRequired
}

export default withStyles(styles)(Form);

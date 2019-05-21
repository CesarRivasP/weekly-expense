import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
  render(){
    const { classes } = this.props;
    return (
      <form>
        <h2>Agrega tus gastos</h2>

        <div className="campo">
          <label>Nombre de gasto</label>
          <input type="text" className="u-full-width" placeholder="Ejemplo: Transporte" />
        </div>
        <div className="campo">
          <label>Cantidad</label>
          <input type="text" className="u-full-width" placeholder="Ejemplo: 300" />
        </div>

        <Button type="submit" value="add" variant="outlined" color="primary" className={classes.button}>
          Agregar
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);

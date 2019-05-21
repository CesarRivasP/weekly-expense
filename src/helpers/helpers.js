export const budgetValidation = (budget) => {
  // Aqui verifica que lo ingresado es un numero
  let totalBudget = parseInt(budget, 10) || 0;

  if (totalBudget > 0){
    return totalBudget;
  }
  else {
    return false;
  }
}

export const reviewBudget = (budget, remaining) => {
  let classe;

  if(budget / 4 > remaining){
    classe = 'alert alert-danger'
  }
  else if((budget / 2) > remaining){
    classe = 'alert alert-warning'
  }
  else {
    classe = 'alert alert alert-success'
  }

  return classe
}

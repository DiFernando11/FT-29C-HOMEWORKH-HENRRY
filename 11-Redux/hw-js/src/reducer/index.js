const {
  INCREMENTO,
  DECREMENTO,
  INCREMENTOINPAR,
  INCREMENTOASYNC,
} = require("../action-types");

const initialState = {
  contador: 0,
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  const incrementNumberInpar = () => {
    state.contador % 2 === 0 ? state.contador += 1 : state.contador += 2;
    return state.contador;
  };

  switch (action.type) {
    case INCREMENTO:
      return { ...state, contador: state.contador + 1 };
    case DECREMENTO:
      return { ...state, contador: state.contador - 1 };
    case INCREMENTOINPAR:
      return { ...state, contador: incrementNumberInpar() };
    case INCREMENTOASYNC:
      return  { ...state, contador: state.contador + 2};
    default:
      return {
        ...state,
      };
  }
}

module.exports = contador;

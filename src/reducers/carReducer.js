
//initial state for reducer
export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500, purchased: false },
      { id: 2, name: 'Racing detail package', price: 1500, purchased: false},
      { id: 3, name: 'Premium sound system', price: 500, purchased: false },
      { id: 4, name: 'Rear spoiler', price: 250, purchased: false }
    ]
  };

export const carReducer = (state = initialState, action) => {
    
    const featureTracker = state.car.features.map(feature => feature.name)
    switch (action.type) {
        case "ADD_FEATURE":
            if(featureTracker === action.payload.name) {
                return{...state}
            } else {
                return {
                    ...state,                    
                    additionalPrice: state.additionalPrice + action.payload.price,
                    car: {
                        ...state.car,
                        features: [
                          ...state.car.features,
                          {name: action.payload.name, price: action.payload.price}
                        ]
                    }
                }
            }

            case "REMOVE_FEATURE":
              return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                  ...state.car,
                  features: state.car.features.filter(item => {
                    return item !== action.payload
                  })
                }
              }

            default: 
              return state
    }
}
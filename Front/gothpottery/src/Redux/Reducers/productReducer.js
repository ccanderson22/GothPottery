import constants from '../constants'

const initState = {
    data: [
        {
        id: 'aaa', 
        title: 'Mug', 
        price: 15.99, 
        description: 'Clay mug', 
        dimensions: '3"x3"x4"',
        buildType: 'Hand made',
        color: ['blue', 'red'],
        clayBody: 'clay',
        glaze: ['shiny red'],
        dateAdded: '12-02-1992',
        type: 'Drink ware',
        available: true,
        featured: false
        },
        {
        id: 'bbb', 
        title: 'Plate', 
        price: 55.99, 
        description: 'Clay plate', 
        dimensions: '8"x8"x1"',
        buildType: 'Wheel thrown',
        color: ['Black', 'Aqua'],
        clayBody: 'clay',
        glaze: ['Hickory', 'Matte'],
        dateAdded: '11-18-2019',
        type: 'Dish ware',
        available: true,
        featured: true
        },
        {
        id: 'ccc', 
        title: 'Heart Ornament', 
        price: 15.99, 
        description: 'Heart ornament', 
        dimensions: 'H:3" W: 3"',
        buildType: 'Hand made',
        color: ['Pink', 'Red'],
        clayBody: 'Not clay',
        glaze: ['Matte', 'Orange'],
        dateAdded: '08-23-2018',
        type: 'Decorations',
        available: true,
        featured: true
        },
        {
        id: 'abc', 
        title: 'Paper Weight', 
        price: 10999.99, 
        description: 'Gold plated ', 
        dimensions: '2"x2"x2"',
        buildType: 'Hand made',
        color: ['Gold'],
        clayBody: 'Clay plated in gold',
        glaze: ['none'],
        dateAdded: '06-06-2006',
        type: 'Misc.',
        available: false,
        featured: false
        },

    ],
}

function productReducer(state = initState, action) {
    switch (action.type) {
        case constants.SET_PRODUCTS : {
            return Object.assign({}, state, {
                data: [...action.payload]
            })
        }
        default : {
            return state;
        }
    }
}

export default productReducer; 

const initialState = {
    score         : 0,
    totalScore    : 0,
    clickedImages : [] ,
    images        : [
        "/images/Brow.jpg","/images/Butler.jpg", "/images/lebron.jpg",
        "/images/Harden.jpg", "/images/KD.jpg", "/images/KP.jpg",
        "/images/Kyle.jpg", "/images/Kyrie.jpg", "/images/Embiid.jpg",
        "/images/wade.jpg", "/images/Russell.jpg", "/images/PG.jpg"  
    ]  
};

const shuffle = (array) => {
    let m = array.length;
    let t; 
    let i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}


const reducer = (state = initialState, action) => {
    if (action.type === "SHUFFLE") {
        const shuffledImages = shuffle(initialState.images);
        return {
            images: shuffledImages
        };
    }
    return state;
};



export default reducer;
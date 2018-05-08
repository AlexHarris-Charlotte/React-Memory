import React from 'react';
import './ImageSection.css';

class ImageSection extends React.Component {
    state = {
        images: [
            "./images/Brow.jpg","./images/Butler.jpg", "./images/lebron.jpg",
            "./images/Harden.jpg", "./images/KD.jpg", "./images/KP.jpg",
            "./images/Kyle.jpg", "./images/Kyrie.jpg", "./images/Embiid.jpg",
            "./images/wade.jpg", "./images/Russell.jpg", "./images/PG.jpg"
        ],

        clickedImages: [],
        score: 0,
        totalScore: 0
    }

    clickHandler(e) {
        const imageScoreState = this.state.score;
        const previousImagesState = [...this.state.images];
        const imageSrc = e.target.src.slice(21);
        let totalScore = this.state.totalScore;
        this.clickHandlerLogic(imageSrc, previousImagesState, imageScoreState, totalScore);

        // Always want to shuffle images
        const shuffledImages = this.shuffle(previousImagesState);
        this.setState({
            images: shuffledImages
        });  
    };

    // The shuffle function is used to randomize the image array after an image is clicked
    shuffle(array) {
        let m = array.length;
        let t; 
        let i;

        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        };
        return array;
      };

      clickHandlerLogic(src, prevImgState, scoreState, total) {
        if (!this.state.clickedImages.includes(src)) {
            const shuffledImages = this.shuffle(prevImgState);
            this.setState({
                clickedImages: [...this.state.clickedImages, src],
                score: this.state.score + 1
            });
        } else {
            if (scoreState > total) {
                this.setState({
                    totalScore: this.state.totalScore = this.state.score
                });
            };
            this.setState({
                score: this.state.score = 0,
                clickedImages: []
            });
        };
      };


    render() {
        return (
            <div>
                <h3>
                    Score: <span>{this.state.score}</span> | Highest Score: <span>{this.state.totalScore}</span>
                </h3>
                {this.state.images.map((image, index) => {
                    return (
                        <img className={'hover'} style={{margin: '10px'}} src={image} 
                        onClick={((e) => this.clickHandler(e))} 
                        key={index}
                        /> 
                )})}
            </div>
        )
    };
};

export default ImageSection;
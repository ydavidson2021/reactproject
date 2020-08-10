import React, { Component } from 'react';

class Directory extends Component {
    constructor(props){
        super(props);
        this.state= {
            sweets: [
                {
                    id: 0,
                    name: 'Macarons',
                    image: 'assets/img/macaron.jpg',
                    description: "Sweet Tooth Fairy recommendation: Bakery Lorraine."
                },
                {
                    id: 1,
                    name: 'Chocolates',
                    image: 'assets/img/chocolate.jpg',
                    description: "Sweet Tooth Fairy recommendation: Chocollazo."
                },
                {
                    id: 2,
                    name: 'Churros',
                    image: 'assets/img/churros.jpg',
                    description: "Sweet Tooth Fairy recommendation: Honcho's"
                },
                {
                    id: 3,
                    name: 'Cupcakes',
                    image: 'assets/img/cupcake.jpg',
                    description: "Sweet Tooth Fairy recommendation: Bird Bakery"
                },
                {
                    id: 4,
                    name: 'Donuts',
                    image: 'assets/img/donuts.jpg',
                    description: "Sweet Tooth Fairy recommendation: The Art of Donut"
                },
                {
                    id: 5,
                    name: 'Cookies',
                    image: 'assets/img/cookies.jpg',
                    description: "Sweet Tooth Fairy recommendation: Tiff's Treats"
                },
                {
                    id: 6,
                    name: 'Frozen Yogurt',
                    image: 'assets/img/frozenyogurt.jpg',
                    description: "Sweet Tooth Fairy recommendation: Menchie's"
                },
                {
                    id: 7,
                    name: 'Ice Cream',
                    image: 'assets/img/icecream.jpg',
                    description: "Sweet Tooth Fairy recommendation: Lick Ice Cream"
                },
                {
                    id: 8,
                    name: 'Bubble Tea',
                    image: 'assets/img/bubbletea.jpg',
                    description: "Sweet Tooth Fairy recommendation: Brew's Lee Tea"
                },
                {
                    id: 9,
                    name: 'Acai Bowl',
                    image: 'assets/img/acaibowl.jpg',
                    description: "Sweet Tooth Fairy recommendation: Rise Up"
                }


            ],
        };
    }

    render() {
        const directory = this.state.sweets.map(sweet => {
            return (
                <div className="col">
                    <img src={sweet.image} alt={sweet.name} width={400} height={400} />
                    <h2>{sweet.name}</h2>
                    <p>{sweet.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory; 
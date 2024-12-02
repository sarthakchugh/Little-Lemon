import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonPie from '../assets/lemon dessert.jpg';
import james from '../assets/john.jpg';
import sarah from '../assets/jane.jpg';
import emily from '../assets/cathy.jpg';
import daniel from '../assets/rammy.jpg';

export const SPECIALS = [
    {
        name: 'Greek Salad',
        image: greekSalad,
        description:
            'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: 12.99,
    },
    {
        name: 'Bruschetta',
        image: bruschetta,
        description:
            'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: 5.99,
    },
    {
        name: 'Lemon Pie',
        image: lemonPie,
        description:
            'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: 9.99,
    },
];

export const TESTIMONIALS = [
    {
        name: 'James R.',
        image: james,
        rating: 4.5,
        review: 'From the moment we walked in, we felt like family. Mario and Adrian’s passion shines through every dish. The grilled octopus and baklava were unforgettable. Highly recommended!',
    },
    {
        name: 'Emily S.',
        image: emily,
        rating: 4,
        review: 'Little Lemon exceeded our expectations. The menu is creative, and every dish is crafted with care. The staff were attentive, and the desserts were heavenly. Definitely our new go-to spot!',
    },
    {
        name: 'Sarah J.',
        image: sarah,
        rating: 4.5,
        review: 'Little Lemon is a hidden gem! The food is bursting with authentic Mediterranean flavors, and the ambiance is cozy and inviting. The lemon-infused dishes are a must-try! I can’t wait to return.',
    },
    {
        name: 'Daniel F.',
        image: daniel,
        rating: 5,
        review: 'Little Lemon exceeded our expectations. The menu is creative, and every dish is crafted with care. The staff were attentive, and the desserts were heavenly. Definitely our new go-to spot!',
    },
];

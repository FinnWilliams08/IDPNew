import chickenstew from "../assets/chickenstew.png";
import fishnchips from "../assets/fishnchips.png";
import lasagna from "../assets/lasagna.png";
import mushroomsoup from "../assets/mushroomsoup.png";
import pienmash from "../assets/pienmash.png";
import spagbol from "../assets/spagbol.png";
import tomatosoup from "../assets/tomatosoup.png";
import prawn from "../assets/prawn.png";
import salad from "../assets/salad.png";
import bruschetta from "../assets/bruscheta.png";
import chickendinner from "../assets/chickendinner.png";
import cottagepie from "../assets/cottagepie.png";
import macncheese from "../assets/macncheese.png";
import picybits from "../assets/picybits.png";
import cucumberslices from "../assets/cucumberslices.png";

// Sample products list
export const sampleProductsList = [
  {
    id: "1",
    title: "Chicken Stew",
    alt: "Chicken Stew",
    imageSource: chickenstew,
    price: 14.0,
    description: "A hearty and warming dish made with tender slow-cooked chicken, carrots, potatoes, and a light herb-infused broth. Soft and easy to chew. Suitable for diabetics. Dairy-free. Approx. 350 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "2",
    title: "Fish and Chips",
    alt: "Fish and Chips",
    imageSource: fishnchips,
    price: 12.0,
    description: "A British classic featuring lightly battered white fish fillet with golden chips. Easy to chew but not suitable for diabetics. Contains dairy. Approx. 600 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "3",
    title: "Lasagne",
    alt: "Lasagne",
    imageSource: lasagna,
    price: 15.0,
    description: "A rich and easy-to-chew Italian favourite with layers of pasta, slow-cooked beef ragu, béchamel sauce, and melted cheese. Contains dairy and gluten. Not suitable for diabetics. Approx. 550 kcal per serving.",
    availability: false,
    category: "Mains"
  },
  {
    id: "4",
    title: "Mushroom Soup",
    alt: "Mushroom Soup",
    imageSource: mushroomsoup,
    price: 10.0,
    description: "A creamy soup made with fresh mushrooms, garlic, and herbs. Soft texture makes it ideal for chewing difficulties. Suitable for diabetics. Contains dairy. Approx. 250 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "5",
    title: "Pie and Mash",
    alt: "Pie and Mash",
    imageSource: pienmash,
    price: 15.0,
    description: "A hearty meat pie with creamy mashed potatoes. Contains gluten and dairy. Not suitable for diabetics. Approx. 650 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "6",
    title: "Spaghetti Bolognese",
    alt: "Spaghetti Bolognese",
    imageSource: spagbol,
    price: 13.5,
    description: "Slow-cooked minced beef, tomatoes, and herbs over soft spaghetti. Contains gluten. Suitable for diabetics in moderation. Dairy-free. Approx. 500 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "7",
    title: "Tomato Soup",
    alt: "Tomato Soup",
    imageSource: tomatosoup,
    price: 9.0,
    description: "A rich and easy-to-chew tomato soup made from ripe tomatoes and aromatic herbs. Suitable for diabetics. Dairy-free. Approx. 200 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "8",
    title: "Prawn Cocktail",
    alt: "Prawn Cocktail",
    imageSource: prawn,
    price: 11.5,
    description: "Fresh prawns that are easy to chew with a classic Marie Rose sauce and crisp lettuce. Suitable for diabetics. Dairy-free. Approx. 220 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "9",
    title: "Fresh Salad",
    alt: "Fresh Salad",
    imageSource: salad,
    price: 8.0,
    description: "A crisp salad with mixed greens, cucumbers, tomatoes, and a light vinaigrette. Suitable for diabetics. Dairy-free. Approx. 150 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "10",
    title: "Bruschetta",
    alt: "Bruschetta",
    imageSource: bruschetta,
    price: 7.0,
    description: "Crispy toasted bread topped with fresh tomatoes, garlic, and basil. Contains gluten. Suitable for diabetics in moderation. Dairy-free. Approx. 180 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "11",
    title: "Chicken Dinner",
    alt: "Chicken Dinner",
    imageSource: chickendinner,
    price: 17.0,
    description: "Grilled chicken, steamed vegetables, and mashed potatoes. High in protein and easy to chew. Suitable for diabetics in portion control. Dairy-free. Approx. 500 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "12",
    title: "Cottage Pie",
    alt: "Cottage Pie",
    imageSource: cottagepie,
    price: 14.5,
    description: "Minced beef, vegetables, and creamy mashed potatoes. Easy to chew. Suitable for diabetics in moderation. Contains dairy. Approx. 480 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "13",
    title: "Mac and Cheese",
    alt: "Mac and Cheese",
    imageSource: macncheese,
    price: 11.0,
    description: "Tender macaroni in a creamy cheese sauce. Easy to chew but contains dairy and gluten. Not suitable for diabetics. Approx. 600 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "14",
    title: "Picky Bits",
    alt: "Picky Bits",
    imageSource: picybits,
    price: 9.5,
    description: "A selection of light bites including sliced cheese, cured meats, fresh bread, and a dip. Contains dairy and gluten. Not suitable for diabetics. Approx. 350 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "15",
    title: "Cucumber Slices with Cream Cheese",
    alt: "Cucumber Slices",
    imageSource: cucumberslices,
    price: 6.0,
    description: "Fresh cucumber slices topped with a light spread of cream cheese and a sprinkle of black pepper. Refreshing and easy to chew. Suitable for diabetics in moderation. Contains dairy. Approx. 80 kcal per serving.",
    availability: true,
    category: "Starters"
  },
];


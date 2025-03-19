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

// Sample products list
export const sampleProductsList = [
  {
    id: "1",
    title: "Chicken Stew",
    alt: "Chicken Stew",
    imageSource: chickenstew,
    price: 13.99,
    description: "A hearty and warming dish made with tender slow-cooked chicken, carrots, potatoes, and a light herb-infused broth. This meal is high in protein and fibre, supporting muscle health and digestion. It is soft and easy to chew, making it suitable for those with chewing difficulties. Low in added sugar and carefully portioned, making it a diabetic-friendly option. Dairy-free. Approx. 350 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "2",
    title: "Fish and Chips",
    alt: "Fish and Chips",
    imageSource: fishnchips,
    price: 12,
    description: "A British classic featuring a lightly battered white fish fillet, served with golden chips and mushy peas. The fish is rich in protein and omega-3 fatty acids, which support heart and brain health. The batter is light and crispy while the fish remains flaky and soft, making it easy to chew. Not suitable for diabetics due to the batter and chips. Contains dairy. Approx. 600 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "3",
    title: "Lasagne",
    alt: "Lasagne",
    imageSource: lasagna,
    price: 15,
    description: "A rich and indulgent Italian favourite, made with layers of pasta, slow-cooked beef ragu, creamy béchamel sauce, and melted cheese. A good source of protein and calcium but contains dairy and gluten. The soft layers make it easy to chew. Not recommended for diabetics due to its high carbohydrate content. Approx. 550 kcal per serving.",
    availability: false,
    category: "Mains"
  },
  {
    id: "4",
    title: "Mushroom Soup",
    alt: "Mushroom Soup",
    imageSource: mushroomsoup,
    price: 9.99,
    description: "A smooth and creamy mushroom soup made with fresh mushrooms, garlic, and herbs. High in fibre and packed with antioxidants. The silky texture makes it ideal for those with chewing or swallowing difficulties. Low in sugar, suitable for diabetics. Contains dairy. Approx. 250 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "5",
    title: "Pie and Mash",
    alt: "Pie and Mash",
    imageSource: pienmash,
    price: 14.99,
    description: "A traditional British dish with a hearty minced beef pie, served alongside creamy mashed potatoes and parsley liquor sauce. High in protein and iron, but contains gluten and dairy. The soft filling makes it easy to chew. Not recommended for diabetics due to the pastry. Approx. 650 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "6",
    title: "Spaghetti Bolognese",
    alt: "Spaghetti Bolognese",
    imageSource: spagbol,
    price: 13.50,
    description: "A comforting Italian pasta dish made with slow-cooked minced beef, tomatoes, garlic, and herbs, served over soft spaghetti. High in protein and fibre. The sauce is naturally low in sugar, making it a moderate choice for diabetics if consumed in portion-controlled servings. Dairy-free. Approx. 500 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "7",
    title: "Tomato Soup",
    alt: "Tomato Soup",
    imageSource: tomatosoup,
    price: 8.99,
    description: "A rich and velvety tomato soup made with sun-ripened tomatoes and a hint of basil. Packed with vitamins and antioxidants. The smooth texture makes it perfect for those with chewing difficulties. Low in sugar and suitable for diabetics. Dairy-free. Approx. 200 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "8",
    title: "Prawn Cocktail",
    alt: "Prawn Cocktail",
    imageSource: prawn,
    price: 11.50,
    description: "A refreshing and light starter consisting of fresh prawns served with a classic Marie Rose sauce, crisp lettuce, and lemon. High in protein and low in calories. Suitable for diabetics and dairy-free. Approx. 220 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "9",
    title: "Fresh Salad",
    alt: "Fresh Salad",
    imageSource: salad,
    price: 7.99,
    description: "A vibrant and healthy salad made with crisp mixed greens, cucumbers, cherry tomatoes, and a light vinaigrette. High in fibre and essential vitamins. Suitable for diabetics, dairy-free, and easy to chew. Approx. 150 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "10",
    title: "Bruschetta",
    alt: "Bruschetta",
    imageSource: bruschetta,
    price: 6.99,
    description: "Crispy toasted bread topped with a fresh tomato, garlic, and basil mixture. A light and refreshing appetiser. Contains gluten. Suitable for diabetics in moderation. Dairy-free. Approx. 180 kcal per serving.",
    availability: true,
    category: "Starters"
  },
  {
    id: "11",
    title: "Chicken Dinner",
    alt: "Chicken Dinner",
    imageSource: chickendinner,
    price: 16.99,
    description: "A well-balanced meal with grilled chicken, steamed vegetables, and mashed potatoes. High in protein, low in sugar, and easy to chew. Suitable for diabetics in controlled portions. Dairy-free. Approx. 500 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "12",
    title: "Cottage Pie",
    alt: "Cottage Pie",
    imageSource: cottagepie,
    price: 14.50,
    description: "A comforting dish made with seasoned minced beef, vegetables, and topped with creamy mashed potatoes. High in protein and iron. Easy to chew. Suitable for diabetics in moderation. Contains dairy. Approx. 480 kcal per serving.",
    availability: true,
    category: "Mains"
  },
  {
    id: "13",
    title: "Mac and Cheese",
    alt: "Mac and Cheese",
    imageSource: macncheese,
    price: 10.99,
    description: "A creamy and indulgent pasta dish made with tender macaroni and a rich cheese sauce. High in calcium and protein. Contains dairy and gluten. Easy to chew. Not suitable for diabetics due to high carbohydrate content. Approx. 600 kcal per serving.",
    availability: true,
    category: "Mains"
  },
];


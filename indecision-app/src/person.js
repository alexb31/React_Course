export const isAdult = (age) => (age >= 18 ? "Major" : "Minor");

export const canDrink = (age) => (age >= 21 ? true : false);

const isSenior = (age) => age >= 65;

export default isSenior;
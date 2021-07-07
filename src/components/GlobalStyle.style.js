import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,400;0,800;1,400&family=Open+Sans&display=swap');

// Colour Variables
/* 
$primary-Colour: #3498db;
$primaryDark-Colour: #145E8F;
$secondary-Colour: #DBDB1F;
$accent-Colour: #DB4B4B; 
*/

body{
    background-color: #3498db;
    font-family: 'Open Sans', sans-serif;
    margin:0;
    padding: 0;
    color: #ecf0f1;

}
`;

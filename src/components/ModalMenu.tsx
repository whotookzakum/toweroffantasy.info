import { SSR_CHARACTERS } from "../data/en-US/characterList";

// const testFolder = '../data/en-US/characters/ssr';
// const fs = require('fs');

// fs.readdirSync(testFolder).forEach((file: any) => {
//   console.log(file);
// });




function ModalMenu() {
    console.log(SSR_CHARACTERS[7].weapon.recommendedMatrix.set2);
    return(
        <div>
            Hey
            <img src="../data/images/art/${character.name}.png" alt="" />
        </div>
    );
}

export default ModalMenu;
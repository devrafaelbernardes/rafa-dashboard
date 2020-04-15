import { TextPortuguese } from "./Languages";
import { getLanguage, USD } from "storage";

function returnTexts(){
    switch (getLanguage()) {
        case USD:
            return null;
        default:
            return TextPortuguese;
    }
}
export const Texts = returnTexts();
export default Texts;
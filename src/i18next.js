import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./Ing/en.json";
import hn from "./Ing/hn.json"

i18next.use(initReactI18next).init({
    resources: {
        en:{
            translation: en,
        
            
        },
        hn:{
            translation: hn,
            
        },
    },
    Ing: localStorage.getItem("Ing") || "en",
})


export default i18next;
import React from "react";
import { useTranslation } from "react-i18next";



export default function App(){
  const {t, i18n} = useTranslation();
  const handleChangeLng =(Ing) =>{
    i18n.changeLanguage(Ing);
    localStorage.setItem("Ing",Ing);
  

  }

  
  
   return(
    <div>
      
     
      <button onClick={() => handleChangeLng("en")}>English</button>
      
      <button onClick={() => handleChangeLng("hn")}> Hindi</button>
      <h1>{t("alok")}</h1>
      <h2>{t("this is my language support page")} </h2>
    </div>
  );
}

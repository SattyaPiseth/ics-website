import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"

const useFontClass = () =>{
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const [fontClass, setFontClass] = useState(localStorage.getItem("fontClass"))

    useEffect(()=>{
        const newFontClass = currentLanguage === "kh" ? "font-suwannaphum" : "font-poppins"
        setFontClass(newFontClass)
        localStorage.setItem('fontClass',newFontClass)
    },[currentLanguage])

    return {currentLanguage, fontClass};
}
export default useFontClass;
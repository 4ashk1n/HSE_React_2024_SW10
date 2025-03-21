import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import MessageNotification from "./components/MessageNotification";

const App: React.FC = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ru" ? "en" : "ru";
        i18n.changeLanguage(newLang);
    };

    return (
        <div>
            <h1>{t("title")}</h1>
            <button onClick={toggleLanguage}>
                {i18n.language === "ru" ? "Switch to English" : "Переключить на русский"}
            </button>
            <MessageNotification />
        </div>
    );
};

export default App;

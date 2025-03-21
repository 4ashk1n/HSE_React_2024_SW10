import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MessageNotification: React.FC = () => {
    const { t } = useTranslation();
    const [count, setCount] = useState(0);
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const randomCount = Math.floor(Math.random() * 10) + 1;
        setCount(randomCount);

        const now = new Date();
        const formatted = new Intl.DateTimeFormat("ru-RU", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(now);

        setFormattedDate(formatted);
    }, []);

    return (
        <p>
            {t("message", {
                count,
                messages: t("messages", { count }),
                date: formattedDate,
            })}
        </p>
    );
};

export default MessageNotification;

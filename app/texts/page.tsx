import React from "react";
import styles from "./page.module.css";
import AddText from "@/components/Texts/AddText";
import RemoveText from "@/components/Texts/RemoveText";

const TextsManager: React.FC = () => {
    return (
        <div className={styles.textsManagerContainer}>
            <AddText />
            <RemoveText />
        </div>
    )
};

export default TextsManager;
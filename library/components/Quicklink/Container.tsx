import { MenuItem } from "@/data/menu";
import { FC } from "react";
import { Quicklink } from ".";
import "./styles.css";

interface QuicklinksContainerProps {
    quicklinks: MenuItem[];
}

export const QuicklinksContainer: FC<QuicklinksContainerProps> = (props) => {
    const { quicklinks } = props;

    return (
        <div className="quicklinks-container">
            {quicklinks.map((quicklink, index) => (
                <Quicklink key={index} quicklink={quicklink} />
            ))}
        </div>
    )
}
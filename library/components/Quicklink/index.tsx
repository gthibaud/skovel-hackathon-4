import { MenuItem } from "@/data/menu";
import Link from "next/link";
import { FC } from "react";
import "./styles.css";

interface QuicklinkProps {
    quicklink: MenuItem;
}

export const Quicklink: FC<QuicklinkProps> = (props) => {
    const { title, to, iconFill: Icon } = props.quicklink;

    return (
        <Link href={to} className="quicklink">
            {/* Using the slot pattern to render the icon (https://stackoverflow.com/questions/76614923/how-to-pass-a-component-as-a-prop-using-next-13) */}
            {Icon &&
                <Icon.type
                    {...Icon.props}
                    style={{
                        display: 'flex',
                        margin: '0',
                    }}
                    size={42}
                    className="icon"
                />
            }
            <div className="title">{title}</div>
        </Link>
    );
}
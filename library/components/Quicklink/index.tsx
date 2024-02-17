'use client'
import { MenuItem } from "@/data/menu";
import Link from "next/link";
import { FC } from "react";
import "./styles.css";

interface QuicklinkProps {
    quicklink: MenuItem;
}

export const Quicklink: FC<QuicklinkProps> = (props) => {
    const { title, to, icon: Icon } = props.quicklink;

    return (
        <Link href={to} className="quicklink">
            {Icon &&
                <div className="icon">
                    <Icon
                        style={{
                            display: 'flex',
                            margin: '0',
                        }}
                        color="white"
                        size={48}
                    />
                </div>
            }
            <div className="title">{title}</div>
        </Link>
    );
}
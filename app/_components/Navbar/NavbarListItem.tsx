import Link from "next/link";

export default function NavbarListItem(props: Props) {
    return (
        <li className="w-fit hover:translate-x-1 transition-transform">
            <Link href={props.href}
                  target={props.target ?? '_self'}>
                {props.value}
            </Link>
        </li>
    );
}

interface Props {
    value: string
    href: string
    target?: string | null
}
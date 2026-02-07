import Link from "next/link"

export default function NavBar() {
    const menu = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About us",
            url: "/about"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ]
    return (
        <nav>
            <ul>
                {menu.map((m, index) =>
                    <li key={index}>
                        <Link href={m.url}>
                            {m.name}
                        </Link>
                    </li>)}
            </ul>
        </nav>
    )
}
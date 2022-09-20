import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="manu-label is-hidden-touch">My sales</p>
      <ul className="menu-list">
        <MenuItem href="/" label="Home"/>
        <MenuItem href="/" label="Register"/>
        <MenuItem href="/" label="Config"/>
      </ul>
    </aside>
  );
};

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <li>
        <Link href={props.href}>
      <a>
        <span className="icon"></span> {props.label}
      </a>
      </Link>
    </li>
  );
};

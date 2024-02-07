export default function NavigationLinks({ ...props }) {
  const links = ["home", "shop", "about", "contact"];

  return (
    <ul {...props}>
      {links.map((link) => {
        return (
          <li key={link}>
            <a className="pb-2 hover:border-b-2 border-white" href="#">
              {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

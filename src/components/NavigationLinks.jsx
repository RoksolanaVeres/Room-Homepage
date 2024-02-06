export default function NavigationLinks({ ...props }) {
  const links = ["home", "shop", "about", "contact"];

  return (
    <ul {...props}>
      {links.map((link) => {
        return (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        );
      })}
    </ul>
  );
}

import "../styles/header.css";

export function Header() {
  const links = [
    "Github",
    "LinkedIn",
    "Portfolio",
    "Email",
    "Phone Number",
    "City",
  ];

  return (
    <header>
      <h1>Zachary Hahn</h1>
      <ul>
        {links.map((link) => {
          return (
            <li>
              <a href="url">{link}</a>
            </li>
          );
        })}
      </ul>
      <p>
        This is a short description of my experience and what I am looking for.
        It should not be verbose and should be 2 lines or shorter. This is where
        you sell yourself!
      </p>
    </header>
  );
}

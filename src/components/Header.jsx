export const Header = () => {
  return (
    <div className="header">
      <div className="header_container  wow animate__animated animate__pulse">
        <div className="logo">
          <h1>
            Sneakers and
            <br />
            Clothes
          </h1>
        </div>
        <div className="Menu">
          <ul>
            <li>
              <input className="search" placeholder="поиск..." />
            </li>
            <li>Кросовки</li>
            <li>Куртки</li>
            <li>Шапки</li>
            <li>
              <i className="fa-solid fa-user" />
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping" />
            </li>
          </ul>
        </div>
        <div className="Menu2">
          <div className="container_menu">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

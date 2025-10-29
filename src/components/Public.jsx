import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap"> Dan D. Repairs</span>
        </h1>
      </header>
      <main className="public_main">
        <p>
          Located in Buenos Aires, Argentina. Listos para reparar sus ZAPATOS!
        </p>
        <address className="public_addr">
          Dan D Repairs.
          <br />
          555 Calle Falsa
          <br />
          Buenos Aires, Arg
          <a href="#">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: David Davidson</p>
      </main>
      <footer>
        <Link to="/login">Employee login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;

import Nav from "../nav/nav";

const Layout = (props) => {
  return (
    <div>
      <header>
        <Nav/>
      </header>
      {props.children}

      <footer>
         
      </footer>
    </div>
  );
};

export default Layout;

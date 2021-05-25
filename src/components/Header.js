function Header() {
  return (
    <div className="flex justify-evenly">
      <div>
        <p>headerLeft</p>
      </div>
      <div>
        <input
          className="shadow-md flex flex-1"
          type="text"
          placeholder="Search Amazon"
        />
      </div>
      <div>
        <p>headerRight</p>
      </div>
    </div>
  );
}

export default Header;

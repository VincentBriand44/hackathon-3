function MenuProfile({ isActive }) {
  return (
    <div
      style={{ display: isActive ? "block" : "none" }}
      className="absolute z-10 hidden p-4 my-4 rounded-xl right-4 bg-slate-800"
    >
      <ul>
        <li>
          <p>Kit de combat</p>
          <span>X</span>
        </li>
        <li>
          <p>Manuel du parfait tueur de Reptilien</p>
          <span>X</span>
        </li>
        <li>
          <p>Kit de combat</p>
          <span>X</span>
        </li>
        <li>
          <p>Kit de combat</p>
          <span>X</span>
        </li>
      </ul>
    </div>
  );
}

export default MenuProfile;

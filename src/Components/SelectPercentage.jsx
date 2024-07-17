export default function SelectPercentage({
  children,
  personalRate,
  friendRate,
  setPersonalRate,
  setFriendRate,
  type,
}) {
  return (
    <div className="form">
      {children}
      {type === "personal" ? (
        <select
          value={personalRate}
          onChange={(e) => setPersonalRate(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely Amazing (20%)</option>
        </select>
      ) : (
        <select
          value={friendRate}
          onChange={(event) => setFriendRate(Number(event.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely Amazing (20%)</option>
        </select>
      )}
    </div>
  );
}

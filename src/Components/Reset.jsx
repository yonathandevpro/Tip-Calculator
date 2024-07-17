export default function Reset({ setFriendRate, setPersonalRate, total }) {
  function handleClick() {
    setFriendRate(0);
    setPersonalRate(0);
  }
  return total !== 0 && <button onClick={handleClick}>Reset</button>;
}

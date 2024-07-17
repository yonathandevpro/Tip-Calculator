export default function Reset({ setFriendRate, setPersonalRate, total }) {
  function handleClick() {
    setFriendRate(0);
    setPersonalRate(0);
  }
  return <button onClick={handleClick}>Reset</button>;
}

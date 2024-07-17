import { useState } from "react";

import BillInput from "./BillInput";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";

export default function App() {
  const [bill, setBill] = useState(0);
  const [personalRate, setPersonalRate] = useState(0);
  const [friendRate, setFriendRate] = useState(0);

  function calculateTip(personalRate, friendRate, bill) {
    const friendPerc = (friendRate / 100) * bill;
    const personalPerc = (personalRate / 100) * bill;
    const avg = (friendPerc + personalPerc) / 2;
    return avg;
  }

  const tip = calculateTip(personalRate, friendRate, bill);
  const total = bill + tip;

  return (
    <form className="container">
      <BillInput setBill={setBill} bill={bill} />
      <SelectPercentage
        type="personal"
        setPersonalRate={setPersonalRate}
        personalRate={personalRate}
      >
        <label>How did you like the service?</label>
      </SelectPercentage>
      <SelectPercentage
        type="friend"
        setFriendRate={setFriendRate}
        friendRate={friendRate}
      >
        <label>How did your friend like the service?</label>
      </SelectPercentage>
      <Output tip={tip} total={total} bill={bill} />
      <Reset
        setPersonalRate={setPersonalRate}
        setFriendRate={setFriendRate}
        total={total}
      />
    </form>
  );
}

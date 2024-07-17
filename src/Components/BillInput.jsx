export default function BillInput({ setBill, bill }) {
  return (
    <div className="form">
      <label> How much was the bill?</label>
      <input
        placeholder="0"
        value={bill}
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

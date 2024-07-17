export default function Output({ tip, total, bill }) {
  return (
    <div className="output">
      <p>{total !== 0 && `You pay $${total} from ($${bill} + $${tip} tip)`}</p>
    </div>
  );
}

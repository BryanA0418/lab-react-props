export default function Progress({ReDonations}) {
  
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">{`$${ReDonations.reduce((acc,currVal)=> acc += currVal.amount,0)}`}</span> of
    <span className="secondary">$1000</span>
  </h2>
</section>
  )
}

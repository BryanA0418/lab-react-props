function RecentDonations({ReDonations}) {
  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    {ReDonations.map(donor=><li><span>{`${donor.name} donated ${donor.amount}` }</span>{`${donor.caption}`}</li>)}
  </ul>
</section>
  )
}
export default RecentDonations;
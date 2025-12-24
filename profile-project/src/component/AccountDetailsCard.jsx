export default function AccountDetailsCard({ details }) {
  return (
    <div className="card infoCard">
      <h2 className="cardTitle">Account Details</h2>
      <div className="rows">
        <Row label="Plan" value={details.plan} />
        <Row label="Member Since" value={details.memberSince} />
        <Row label="Status" value={<span className="pill">{details.status}</span>} />
      </div>
    </div>
  );
}

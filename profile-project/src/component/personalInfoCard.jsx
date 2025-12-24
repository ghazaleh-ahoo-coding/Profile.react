import Row from "./Row";

export default function PersonalInfoCard({ info }) {
  return (
    <div className="Card infocard">
      <h2 className="cardTitle">Personal Information</h2>
      <div className="rows">
        {Object.keys(info).map((label) => (
          <Row label={label} value={info[label]} />
        ))}
      </div>
    </div>
  );
}

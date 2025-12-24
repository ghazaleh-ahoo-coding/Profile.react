import Row from "./Row";

export default function AccountDetailsCard(details){
    return(
        <div classname="card UnfoCard">
            <h2 className="cardtitle"> Account Details</h2>
            <div className="rows">
                <Row label="Role" value={details.Role}></Row>
                <Row label="Status" value={<span className='pill'>Active</span>}></Row>
                <Row label="Verification" value={<span className='verified'>✔️Verified</span>}></Row>
            </div>
        </div>
    )
}
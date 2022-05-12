const PackageCard = ({card}) => {

    const {
        type,
        value,
        parcel,
        valueRl,
        free
    } = card;

    return ( 
        <div className={`package-card ${type}`}>
            <div className="label">

            </div>
        </div>
     );
}
 
export default PackageCard;
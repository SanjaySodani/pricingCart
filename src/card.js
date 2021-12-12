import './App.css';

function Card(props) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.data.tier}</h5>
                    <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        {props.offers.map((offer, index) => {
                            return <li key={index} className={props.data.offers > index ? "" : "text-muted"}>
                                <span className="fa-li">
                                    <i className={props.data.offers > index ? "fas fa-check" : "fas fa-times"}></i>
                                </span>{offer}
                            </li>
                        })}
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
import './App.css';
import Card from './card';

function App() {

  let offers = [
    "Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports"
  ]

  let data = [
    {
      tier: "Free",
      price: 0,
      offers: 4
    },
    {
      tier: "Plus",
      price: 9,
      offers: 7
    },
    {
      tier: "Pro",
      price: 49,
      offers: 8
    }
  ]

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card offers={offers} data={data[0]} />
          <Card offers={offers} data={data[1]} />
          <Card offers={offers} data={data[2]} />
        </div>
      </div>
    </section>
  );
}

export default App;

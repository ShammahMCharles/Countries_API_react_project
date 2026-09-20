import { Link } from "react-router-dom";
import type { Country } from "../types/countries";

interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      to={`/country/${country.codes.alpha_2}`}
      className="text-decoration-none text-body"
    >
      <div className="card h-100 shadow-sm">
        <img
          src={country.flag.url_png}
          className="card-img-top"
          alt={`Flag of ${country.names.common}`}
          style={{
            height: "180px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {country.names.common}
          </h5>

          <p className="card-text mb-1">
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>

          <p className="card-text mb-1">
            <strong>Region:</strong>{" "}
            {country.region}
          </p>

          <p className="card-text">
            <strong>Capital:</strong>{" "}
            {country.capitals[0]?.name ?? "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
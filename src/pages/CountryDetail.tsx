import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import type { CountryResponse } from "../types/countries";

function CountryDetail() {
  const { countryCode } = useParams<{
    countryCode: string;
  }>();

  const url = `https://api.restcountries.com/countries/v5/codes.alpha_2/${countryCode}`;

  const { data, loading, error } =
    useFetch<CountryResponse>(url);

  const country = data?.data.objects[0];

  return (
    <div className="container mt-4">
      {loading && <p>Loading country...</p>}

      {error && <p>Error: {error}</p>}

      {country && (
        <>
          <h1>{country.names.common}</h1>

          <div className="row mt-4">
            <div className="col-md-6">
              <img
                src={country.flag.url_png}
                className="img-fluid rounded"
                alt={country.flag.description}
              />
            </div>

            <div className="col-md-6">
              <h3>Country Information</h3>

              <p>
                <strong>Official Name:</strong>{" "}
                {country.names.official}
              </p>

              <p>
                <strong>Region:</strong>{" "}
                {country.region}
              </p>

              <p>
                <strong>Subregion:</strong>{" "}
                {country.subregion}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>

                <p>
                  <strong>Capital:</strong>{" "}
                  {country.capitals?.[0]?.name ?? "N/A"}
                </p>

                <p>
                  <strong>Currency:</strong>{" "}
                  {country.currencies?.[0]?.name ?? "N/A"}
                </p>

                <p>
                  <strong>Currency Symbol:</strong>{" "}
                  {country.currencies?.[0]?.symbol ?? "N/A"}
                </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetail;
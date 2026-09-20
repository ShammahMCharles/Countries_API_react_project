import useFetch from "../hooks/useFetch";
import CountryCard from "../components/CountryCard";
import type { CountryResponse } from "../types/countries";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const url = "https://api.restcountries.com/countries/v5";

  const { data, loading, error } = useFetch<CountryResponse>(url);

  if (loading) {
    return (
      <div className="container py-5">
        <h2>Loading countries...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <h2>Error loading countries</h2>
        <p>{error}</p>
      </div>
    );
  }

  const countries = data?.data.objects ?? [];

  return (
    <main className="container py-5">
      <h1 className="mb-4">Countries</h1>

      <label htmlFor="country-select" className="form-label">
        Find a country
      </label>
      <select
        id="country-select"
        className="form-select mb-3"
        defaultValue=""
        onChange={(event) => {
          const countryCode = event.target.value;

          if (countryCode) {
            navigate(`/country/${countryCode}`);
          }
        }}
      >
        <option value="">Select a country</option>

        {countries.map((country) => (
          <option key={country.codes.alpha_2} value={country.codes.alpha_2}>
            {country.names.common}
          </option>
        ))}
      </select>

      <div className="row g-4">
        {countries.map((country) => (
          <div className="col-12 col-md-6 col-lg-4" key={country.codes.alpha_2}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;

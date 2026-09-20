export interface Country {
  names: {
    alternates: string[];
    common: string;
    official: string;
  };

  codes: {
    alpha_2: string;
    alpha_3: string;
    ccn3: string;
    cioc: string;
    fifa: string;
    fips: string;
    gec: string;
  };

  flag: {
    emoji: string;
    description: string;
    url_png: string;
    url_svg: string;
  };

  region: string;
  subregion: string;
  population: number;

  capitals: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    attributes: Record<string, boolean>;
  }[];

  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];

  languages: {
    bcp47: string;
    name: string;
    native_name: string;
    iso639_1: string;
    iso639_2b: string;
    iso639_2t: string;
    iso639_3: string;
  }[];

  borders: string[];
  timezones: string[];

  date: {
    academic_year_start: {
      day: number;
      month: number;
    };

    fiscal_year_start: {
      corporate: FiscalYearStart;
      government: FiscalYearStart;
      personal: FiscalYearStart;
    };

    start_of_week: string;
  };
}

export interface FiscalYearStart {
  basis: string;
  day: number;
  month: number;
}

export interface CountryResponse {
  data: {
    objects: Country[];
    meta: {
      total: number;
      count: number;
      limit: number;
      offset: number;
      more: boolean;
    };
  };
}

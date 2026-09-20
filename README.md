# 🌎 Country Discovery App

A React + TypeScript application that allows users to explore countries and view detailed information about each country. This project was created as part of my Per Scholas software engineering training and builds upon concepts and patterns I previously used in my Recipe Discovery App.

## 📌 Project Overview

The Country Discovery App allows users to browse countries and explore information such as:

- Country name
- Official country name
- Flag
- Region
- Subregion
- Population
- Capital
- Currency
- Languages
- Borders
- Time zones

The application uses an external REST API to retrieve country information and React Router to navigate between the country list and individual country detail pages.

---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- React Router
- Bootstrap
- REST API
- Context API
- Custom React Hooks

---

## 🧠 What I Reused From My Recipe Discovery App

One of the goals of this project was to take concepts I had already learned from my Recipe Discovery App and apply them to a new project instead of starting completely from scratch.

The overall architecture was very similar.

### Recipe App

The Recipe app used:

```text
Recipe Card
     ↓
React Router
     ↓
Recipe Detail
     ↓
useParams()
     ↓
API Request
     ↓
Recipe Information
```

The Country app follows the same general pattern:

```text
Country Card
     ↓
React Router
     ↓
Country Detail
     ↓
useParams()
     ↓
API Request
     ↓
Country Information
```

This made the Country app easier to understand because I was able to recognize patterns I had already implemented.

### Reusing Components and Concepts

I was able to reuse concepts from the Recipe project including:

- `useFetch` for API requests
- `useParams()` for dynamic routes
- React Router
- Bootstrap cards
- TypeScript interfaces
- Mapping API data into components
- Loading and error states
- Component-based architecture

For example, the Recipe application used a dynamic route similar to:

```tsx
<Route path="/recipe/:recipeId" element={<RecipeDetail />} />
```

The Country application uses the same concept:

```tsx
<Route path="/country/:countryCode" element={<CountryDetail />} />
```

---

## 🚧 New Problems and Challenges

Although the Country app was similar to the Recipe app, it introduced several new problems that required me to understand the API and my TypeScript types more carefully.

### 1. Understanding a New API Structure

The biggest difference was the structure of the API response.

The Recipe API returned data in a relatively simple structure:

```text
data
└── meals
    └── recipe
```

The Country API uses a more deeply nested structure:

```text
data
└── objects
    └── country
        ├── names
        ├── codes
        ├── flag
        ├── currencies
        ├── languages
        ├── capitals
        └── ...
```

Because of this, I had to pay much more attention to how the API data was structured before creating my TypeScript interfaces and accessing the information in my components.

---

### 2. Creating TypeScript Interfaces From API Data

Another challenge was figuring out exactly what information the API provided.

Instead of guessing what properties existed, I used the API response to create interfaces describing the data.

For example:

```tsx
interface Country {
  names: {
    common: string;
    official: string;
  };

  codes: {
    alpha_2: string;
    alpha_3: string;
  };

  region: string;
  population: number;
}
```

The Country interface eventually became much larger because the API provides information about flags, currencies, languages, capitals, borders, time zones, and other country information.

This helped reinforce the importance of understanding the API response before writing the components that consume it.

---

### 3. Dynamic Country Routes

Another new challenge was determining what value should be used in the URL when a user clicks a country.

Instead of using a recipe ID such as:

```text
/recipe/52772
```

the Country app can use a country code:

```text
/country/US
```

The country card can then use the country's alpha-2 code:

```tsx
<Link to={`/country/${country.codes.alpha_2}`}>
```

The Country Detail page retrieves that value with:

```tsx
const { countryCode } = useParams<{ countryCode: string }>();
```

This reinforced my understanding of how dynamic routing works in React.

---

## ❤️ Planned Features

The project is still being developed. Planned functionality includes:

- [ ] Clickable country cards
- [ ] Country detail pages
- [ ] Country selection dropdown
- [ ] Dark mode
- [ ] Improved responsive styling
- [ ] Additional country information

---

## 📚 What I Learned

This project helped me understand that building a second application using the same technologies can be just as valuable as learning a completely new technology.

Because I had already built the Recipe Discovery App, I was able to recognize familiar patterns instead of having to learn everything from scratch.

At the same time, the Country API intr

import type { LocationType } from "@/types/location";

export default function LocationCard({ results }: { results: LocationType[] }) {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  );
}

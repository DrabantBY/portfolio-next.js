import type { EpisodeType } from "@/types/episode";

export default function EpisodeCard({ results }: { results: EpisodeType[] }) {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  );
}

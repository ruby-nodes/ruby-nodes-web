type ReleaseDateProps = {
  date: Date;
};

function formatDate(date: Date) {
  return `
   ${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}
  `;
}

export default function ReleaseDate({ date }: ReleaseDateProps) {
  return <p className="text-sm text-c-primary">{formatDate(date)}</p>;
}

type ReleaseDateProps = {
  date: Date;
};

function formatDate(date: Date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export default function ReleaseDate({ date }: ReleaseDateProps) {
  return <p className="text-sm text-c-primary">{formatDate(date)}</p>;
}

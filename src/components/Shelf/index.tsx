interface ShelfProps {
  title?: string;
}

export function Shelf({ title }: ShelfProps) {
  return (
    <div>
      {title}
      Minha Shelf
    </div>
  );
}

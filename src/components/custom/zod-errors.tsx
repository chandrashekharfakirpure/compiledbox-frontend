
export function ZodErrors({ error }: { error: string[] }) {
    if (!error) return null;
    return error.map((err: string, index: number) => (
      
      <div key={index} className="text-rose-500 text-xs italic mt-2">
        {err}
      </div>
    ));
  }
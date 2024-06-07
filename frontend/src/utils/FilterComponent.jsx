import { Input } from "@material-tailwind/react";

export const FilterComponent = ({ filterText, onFilter, onClear, filter }) => (
  <>
    <div className="flex justify-end">
      <Input
        placeholder={`Filtrar por nome do ${filter}`}
        className="w-[25rem]"
        value={filterText}
        onChange={onFilter}
      />
    </div>
  </>
);
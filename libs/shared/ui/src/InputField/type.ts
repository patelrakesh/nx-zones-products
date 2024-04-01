export type InputFieldProps = {
  type: string;
  name: string;
  label: string;
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

import { DatePickerInput } from '@mantine/dates';

function handleSearchBar() {
  return (
    <DatePickerInput
      placeholder="Dato"
      radius="xl"
      withAsterisk
    />
  );
}

export default handleSearchBar
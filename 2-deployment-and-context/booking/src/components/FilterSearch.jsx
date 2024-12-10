import { useBookingContext } from "../components/BookingContext";
import { Container, Center, Paper, Title, Space, Checkbox, Group } from "@mantine/core";

const FilterSearch = () => {
  const { filters, setFilters } = useBookingContext();

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const updatedCategory = prev[category]?.includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...(prev[category] || []), value];

      return { ...prev, [category]: updatedCategory };
    });
  };

  const availableFilters = {
    selectedTimeSlots: [
      "8:00-9:00",
      "9:00-10:00",
      "10:00-11:00",
      "11:00-12:00",
      "12:00-13:00",
      "13:00-14:00",
      "14:00-15:00",
      "15:00-16:00",
      "16:00-17:00",
    ],
    selectedFeatures: ["Lille Skærm", "Stor Skærm", "Tavle"],
    selectedCapacity: ["2-8 pers", "8-10 pers"],
  };

  return (
    <Container size="lg" style={{ height: "100vh", margin: "0 -20px" }}>
      <div>
          <h1 className="start" style={{ marginTop: '-10px' }}>
            Filtrer Din Søgning
          </h1>
        <Paper
          withBorder
          shadow="md"
          p={30}
          radius="md"
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >

          <div>
            <Title order={4}>Room type</Title>
            <Group mt="xs" spacing="xs">
              {availableFilters.selectedCapacity.map((capacity) => (
                <Checkbox
                  key={capacity}
                  label={capacity}
                  checked={filters.selectedCapacity.includes(capacity)}
                  onChange={() => handleCheckboxChange("selectedCapacity", capacity)}
                />
              ))}
            </Group>
          </div>
          <Space h="md" />
          
          {/* Time Slots */}
          <div>
            <Title order={4}>Time Slots</Title>
            <Group mt="xs" spacing="xs">
              {availableFilters.selectedTimeSlots.map((time) => (
                <Checkbox
                  key={time}
                  label={time}
                  checked={filters.selectedTimeSlots.includes(time)}
                  onChange={() => handleCheckboxChange("selectedTimeSlots", time)}
                />
              ))}
            </Group>
          </div>

          <Space h="md" />

          {/* Features */}
          <div>
            <Title order={4}>Features</Title>
            <Group mt="xs" spacing="xs">
              {availableFilters.selectedFeatures.map((feature) => (
                <Checkbox
                  key={feature}
                  label={feature}
                  checked={filters.selectedFeatures.includes(feature)}
                  onChange={() => handleCheckboxChange("selectedFeatures", feature)}
                />
              ))}
            </Group>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default FilterSearch;
import { useState } from "react";
import { Container, Center, Paper, Title, Space, Checkbox, Group } from "@mantine/core";

const FilterSearch = () => {
    const [filters, setFilters] = useState({
    lokaleType: [],
    tidsrum: [],
    skaerm: [],
    tavle: [],
    });

    const lokaleTypes = [
    "Kontor 2-8 pers",
    "Mødelokale 2-8 pers",
    "Mødelokale 8-10 pers",
    "Undervisningslokale 20-35 pers",
    "Undervisningslokale 30-45 pers",
    ];

    const tidsrum = [
    "8:00-9:00",
    "9:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    ];

    const skaerm = ["Lille", "Stor"];
    const tavle = ["Ja", "Nej"];

    const allItems = [
    {
        name: "Room A",
        lokaleType: "Kontor 2-8 pers",
        tidsrum: "8:00-9:00",
        skaerm: "Lille",
        tavle: "Ja",
    },
    {
        name: "Room B",
        lokaleType: "Mødelokale 2-8 pers",
        tidsrum: "10:00-11:00",
        skaerm: "Stor",
        tavle: "Nej",
    },
    {
        name: "Room C",
        lokaleType: "Undervisningslokale 20-35 pers",
        tidsrum: "11:00-12:00",
        skaerm: "Lille",
        tavle: "Ja",
    },
    {
        name: "Room D",
        lokaleType: "Mødelokale 8-10 pers",
        tidsrum: "9:00-10:00",
        skaerm: "Stor",
        tavle: "Nej",
    },
    ];

    const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
        const currentCategory = prev[category];
        const updatedCategory = currentCategory.includes(value)
        ? currentCategory.filter((item) => item !== value)
        : [...currentCategory, value];

        return { ...prev, [category]: updatedCategory };
    });
    };

    const filteredResults = allItems.filter((item) => {
    const matchesLokaleType =
        filters.lokaleType.length === 0 || filters.lokaleType.includes(item.lokaleType);
    const matchesTidsrum =
        filters.tidsrum.length === 0 || filters.tidsrum.includes(item.tidsrum);
    const matchesSkaerm =
        filters.skaerm.length === 0 || filters.skaerm.includes(item.skaerm);
    const matchesTavle =
        filters.tavle.length === 0 || filters.tavle.includes(item.tavle);

    return matchesLokaleType && matchesTidsrum && matchesSkaerm && matchesTavle;
    });

    return (
    <Container size="lg" style={{ height: "100vh", display: "flex" }}>
        <Center style={{ flex: 0 }}>
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
            <Title align="left" mb="sm">
            Filter Search
            </Title>
            <Space h="md" />

          {/* Lokale Type */}
            <div>
            <Title order={4}>Lokale Type</Title>
            <Group mt="xs" spacing="xs">
                {lokaleTypes.map((type) => (
                <Checkbox
                    key={type}
                    label={type}
                    checked={filters.lokaleType.includes(type)}
                    onChange={() => handleCheckboxChange("lokaleType", type)}
                />
                ))}
            </Group>
            </div>

            <Space h="md" />

          {/* Tidsrum */}
            <div>
            <Title order={4}>Tidsrum</Title>
            <Group mt="xs" spacing="xs">
                {tidsrum.map((time) => (
                <Checkbox
                    key={time}
                    label={time}
                    checked={filters.tidsrum.includes(time)}
                    onChange={() => handleCheckboxChange("tidsrum", time)}
                />
                ))}
            </Group>
            </div>

            <Space h="md" />

          {/* Skærm */}
            <div>
            <Title order={4}>Skærm</Title>
            <Group mt="xs" spacing="xs">
                {skaerm.map((screen) => (
                <Checkbox
                    key={screen}
                    label={screen}
                    checked={filters.skaerm.includes(screen)}
                    onChange={() => handleCheckboxChange("skaerm", screen)}
                />
                ))}
            </Group>
            </div>

            <Space h="md" />

          {/* Tavle */}
            <div>
            <Title order={4}>Tavle</Title>
            <Group mt="xs" spacing="xs">
                {tavle.map((option) => (
                <Checkbox
                    key={option}
                    label={option}
                    checked={filters.tavle.includes(option)}
                    onChange={() => handleCheckboxChange("tavle", option)}
                />
                ))}
            </Group>
            </div>

            <Space h="md" />

          {/* Results */}
            <div>
            <Title order={4}>Search Results</Title>
            {filteredResults.length > 0 ? (
            <ul>
                {filteredResults.map((item) => (
                <li key={item.name}>{item.name}</li>
                ))}
            </ul>
            ) : (
                <p>No results match your criteria.</p>
            )}
            </div>
        </Paper>
    </Center>
    </Container>
    );
};

export default FilterSearch;

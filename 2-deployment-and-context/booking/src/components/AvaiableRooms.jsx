import { useState, useEffect } from "react";
import { Container, Button, Text, Card, Box } from "@mantine/core";
import RoomCard from "./RoomCard";

export default function AvailableRooms() {
  const [rooms, setRooms] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState(null); // Store user info here

  // Fetch logged-in user information
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = supabase.auth.user(); // Get the current user
        if (user) {
          // If a user is logged in, fetch additional user data (e.g., from the 'users' table)
          const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', user.email) // Match user by email
            .single(); // Assume one user with that email

          if (error) {
            console.error("Error fetching user data:", error);
            setErrorMessage("Error fetching user information. Please try again later.");
          } else {
            setUserInfo(data); // Set the user's information
          }
        } else {
          setErrorMessage("User not logged in.");
        }
      } catch (error) {
        setErrorMessage("Unexpected error occurred while fetching user information.");
        console.error(error);
      }
    };

    fetchUserInfo();
  }, []); // Fetch user info once when the component mounts

  // Fetch rooms from Supabase
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data, error } = await supabase.from("rooms").select("*");

        if (error) {
          setErrorMessage("Error fetching rooms. Please try again later.");
          console.error(error);
        } else {
          setRooms(data);
        }
      } catch (error) {
        setErrorMessage("Unexpected error occurred while fetching rooms.");
        console.error(error);
      }
    };

    fetchRooms();
  }, []); // Fetch once when component mounts

  return (
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
      <h1 className='start' style={{ fontSize: "2rem", marginBottom: "20px" }}>Ledige Lokaler</h1>

      {/* Display user info */}
      {userInfo && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <Text size="sm">Logged in as: {userInfo.first_name} {userInfo.last_name}</Text>
          <Text size="sm">Role: {userInfo.role}</Text>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && <Text color="red" style={{ marginBottom: "20px" }}>{errorMessage}</Text>}

      {/* Display message if no rooms are available */}
      {rooms.length === 0 ? (
        <Box
          /*style={{
            backgroundColor: "#e0e0e0",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "100%",
            marginTop: "20px"
          }}*/
        >
          {/*<Text weight={700} style={{ fontSize: "1.2rem" }}>
            Ingen ledige lokaler på nuværende tidspunkt
          </Text>
          <Text style={{ fontSize: "1rem" }}>
            Søg en anden dato eller tidspunkt, for at finde ledige lokaler du kan booke.
          </Text>*/}
        </Box>
      ) : (
        // Rooms list
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", width: "100%" }}>
          {rooms.map((room) => (
            <Card key={room.id} shadow="sm" padding="lg" style={{ padding: "15px", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
              <Text weight={500}>{room.name}</Text>
              <Text size="sm">{room.type}</Text>
              <Text size="sm">Capacity: {room.capacity}</Text>
              <Text size="sm">Equipment: {room.equipment}</Text>
              <Button style={{ marginTop: "10px" }}>Book Room</Button>
            </Card>
          ))}
        </div>
      )}
      <RoomCard />
    </Container>
  );
}

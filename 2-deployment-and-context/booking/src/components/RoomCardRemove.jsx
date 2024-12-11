import React, { useState, useEffect } from "react";
import { Divider, Group, Text, Card, Button, Space, Modal } from "@mantine/core";
import { PersonIcon, DesktopIcon, Pencil2Icon, ClockIcon, CalendarIcon } from "@radix-ui/react-icons";
import { getSupabaseClient } from "../supabase/getSupabaseClient";

function RoomCardRemove() {
  const [modalOpened, setModalOpened] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const supabase = getSupabaseClient();

  const user = supabase.auth.getUser();
    console.log("Logged in user email:", user?.email);

// Fetch bookings data
useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from("bookings")
          .select("*"); // Removed the .eq("email", userInfo.email) filter
  
        if (error) {
          console.error("Error fetching bookings:", error.message);
          alert("Failed to fetch bookings. Please try again.");
        } else {
          setBookings(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred. Please try again.");
      }
    };
  
    fetchBookings();
  }, [supabase]); // Removed userInfo.email from the dependency array

  const handleCancelBooking = async (bookingId) => {
    try {
      const { error } = await supabase.from("bookings").delete().eq("id", bookingId);

      if (error) {
        console.error("Error canceling booking:", error.message);
        alert("Failed to cancel the booking. Please try again.");
      } else {
        setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
        setModalOpened(false);
        alert("Booking successfully canceled.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <Card key={booking.id} shadow="sm" padding="lg" radius="lg" withBorder
          style={{ marginBottom: "20px" }}>
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Group justify="left" mb="xs">
                <Text fw={600}>{booking.room_name}</Text>
              </Group>
              <Group justify="right" mb="xs">
                <ClockIcon size={20} color={"orange"} />
                <Text size="sm">{booking.time_slot}</Text>
                <CalendarIcon size={20} color={"orange"} />
                <Text size="sm">{booking.date}</Text>
              </Group>
            </div>

            <Space h="xl" />

            {/* Bottom row */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Group gap="xl" align="start">
                <Group gap="xs" align="center">
                  <PersonIcon size={20} />
                  <Text>{booking.capacity}</Text>
                </Group>
                {booking.features?.split(",").map((feature, index) => (
                  <Group gap="xs" align="center" key={index}>
                    {feature === "Skærm" && <DesktopIcon size={20} />}
                    {feature === "Projektor" && <DesktopIcon size={20} />}
                    {feature === "Tavle" && <Pencil2Icon size={20} />}
                    <Text>{feature}</Text>
                  </Group>
                ))}
              </Group>
              <Button
                color="#373A40"
                radius="xl"
                onClick={() => {
                  setSelectedBooking(booking);
                  setModalOpened(true);
                }}
              >
                Aflys
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <Text>Ingen Bookinger fundet</Text>
      )}

      {/* Modal */}
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="lg"
        radius="lg"
        centered
      >
        {selectedBooking && (
          <>
            <div>
              <Text fw={600}>{selectedBooking.room_name}</Text>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <ClockIcon size={20} color={"orange"} />
                <Text size="sm">{selectedBooking.time_slot}</Text>
                <CalendarIcon size={20} color={"orange"} />
                <Text size="sm">{selectedBooking.date}</Text>
              </div>
            </div>
            <Space h="md" />
            <Divider orientation="horizontal" />
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <PersonIcon size={20} />
              <Text size="sm">{selectedBooking.capacity}</Text>
              {selectedBooking.features?.split(",").map((feature, index) => (
                <Group gap="xs" align="center" key={index}>
                  {feature === "Skærm" && <DesktopIcon size={20} />}
                  {feature === "Projektor" && <DesktopIcon size={20} />}
                  {feature === "Tavle" && <Pencil2Icon size={20} />}
                  <Text>{feature}</Text>
                </Group>
              ))}
            </div>
            <Space h="md" />
            <Button
              fullWidth
              color="#373A40"
              mt="lg"
              radius="xl"
              onClick={() => handleCancelBooking(selectedBooking.id)}
            >
              Aflys booking
            </Button>
          </>
        )}
      </Modal>
    </>
  );
}

export default RoomCardRemove;

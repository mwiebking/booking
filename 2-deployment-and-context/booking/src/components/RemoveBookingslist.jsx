import RoomCardRemove from "./RoomCardRemove";
import { useBookingContext } from "./BookingContext";


function Mybookingslist() {

  return (
    <>
    <h1 className="start" style={{ marginTop: '-10px' }}>Mine Bookinger</h1>

<RoomCardRemove/>
    </>
  );
}

export default Mybookingslist;

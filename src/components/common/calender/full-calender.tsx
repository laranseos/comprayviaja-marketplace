"use client"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FC, useState } from "react";
import { Modal, ModalBody } from "reactstrap";

interface IFullCalendarProps {
  modal: boolean;
  toggle: () => void;
}
const FullCalendarComponent: FC<IFullCalendarProps> = ({ modal, toggle }) => {
  const [events, setEvents] = useState([]);

  return (
      <Modal
        className="video-modal"
        centered
        size="lg"
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 100 }}
      >
        <ModalBody>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            editable={true}
            events={events}
          />
        </ModalBody>
      </Modal>
  );
};

export default FullCalendarComponent;

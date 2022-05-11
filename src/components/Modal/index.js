import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ModalComponent({ title, onSubmit, day }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState('test');
  const [email, setEmail] = React.useState('test');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    onSubmit(day, title, { name, email });
    setIsOpen(false);
  }

  return (
    <span>
      <span className="hover" onClick={openModal}>
        ➕
      </span>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2
          className="text-align-center"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          {title}
        </h2>
        <form>
          <fieldset>
            <label className="block">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </fieldset>
          <fieldset>
            <label className="block">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </fieldset>
        </form>
        <button className="float-right" onClick={closeModal}>
          Done
        </button>
      </Modal>
    </span>
  );
}

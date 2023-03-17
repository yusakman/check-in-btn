const Button = ({ props }) => {
  const { open, setOpen } = props;
  return (
    <div className="button">
      <div className="round-bottom">
        <div className="round-top" onClick={(e) => setOpen(true)}>
          <p className="button-text">Check In</p>
        </div>
      </div>
    </div>
  );
};

export default Button;

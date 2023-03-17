const Button = ({ props }) => {
  const { setOpen, account, loadAccount, balance } = props;

  const handleCheckIn = async (e) => {
    e.preventDefault();
    await loadAccount();
    setOpen(true);
  };

  return (
    <div className="button">
      <div className="round-bottom">
        <div className="round-top" onClick={(e) => handleCheckIn(e)}>
          <p className="button-text">Check In</p>
        </div>
      </div>
    </div>
  );
};

export default Button;

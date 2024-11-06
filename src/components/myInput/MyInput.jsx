function MyInput({name, type, placeholder, label}) {
  return (
    <>
      <label for={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
}

export default MyInput;

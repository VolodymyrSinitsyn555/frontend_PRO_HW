function MyInput({name, type, placeholder, label}) {
  return (
    <div>
      <label for={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
}

export default MyInput;

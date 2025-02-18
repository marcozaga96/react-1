const ButtonComponent = (prop) => {
  return (
    <button>
      <a href={prop.url}>{prop.buttonProp}</a>
    </button>
  );
};
export default ButtonComponent;

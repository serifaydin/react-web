function Form(props) {
    return (
      <form onSubmit={props.getWeather}>
        <input type="text" name="city"/>
        <input type="text" name="county"/>

        <button>Hava Durumunu Göster</button>
      </form>
    );
  }
  
  export default Form;
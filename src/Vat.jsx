import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const endpoint = "https://api.vatcomply.com/vat?vat_number=";

export default function Vat() {
  const [vatIDValidation, setVatIDValidation] = useState(null);
  const { register, handleSubmit } = useForm();

  const getVatValidation = async (vat) => {
    const result = await axios(endpoint + vat);
    setVatIDValidation(result.data);
    return result;
  };

  const onSubmit = (data) => {
    getVatValidation(data.vat);
  };

  return (
    <div>
      <h1>Vat</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="VAT" {...register("vat")} />
        <input type="submit" value={"Validar"} />
      </form>
      {vatIDValidation && (
        <div>
          O contribuinte inserido pertence à empresa {vatIDValidation.name}
          <br />
          Morada: {vatIDValidation.address}
        </div>
      )}
    </div>
  );
}

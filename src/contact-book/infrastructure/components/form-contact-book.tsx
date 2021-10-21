
import FormContactBookComposition from "../../domain/models/contracts/form-contact-composition";

const API_FORM = FormContactBookComposition;

const FormContactBook = () => {

    return (
        <>
            <div className="form-card">

                <div>
                    <h3 style={{ textAlign: 'center' }} >Información de contacto</h3>
                </div>
                <div className="flex flex-dir-col pd-30 gap-20">

                    {API_FORM.map(({ event, title, ...rest }, i) => (
                        <div key={i}>
                            <h5>{title}</h5>
                            <input className="input-element font-size-14"  {...rest} {...event} />
                        </div>
                    ))}
                    <div>
                        <button className="btn font-size-14" > Agregar</button>
                    </div>
                </div>
            </div>
            <div>
                <h3>Favoritos</h3>
            </div>
        </>
    );
}


export default FormContactBook;
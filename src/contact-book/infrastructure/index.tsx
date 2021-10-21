import Container from "../../api-characters/infrastructure/components/Container";

const ContactBook = (): JSX.Element => {

    return (
        <>
            <Container class_style="grid-template-auto-fill-col">
                <div className="flex flex-dir-col align-i-center gap-50">

                    <div className="form-card">

                        <div>
                            <h3>Información de contacto</h3>
                        </div>
                        <div className="flex flex-dir-col pd-30 gap-20">
                            <div>
                                <h5>NOMBRE</h5>
                                <input className="input-element font-size-14" type="text" name="name" />
                            </div>
                            <div>
                                <h5>TELEFONO</h5>
                                <input className="input-element" type="text" name="tel" />
                            </div>
                            <div>
                                <h5>CORREO</h5>
                                <input className="input-element" type="email" name="email" />
                            </div>
                            <div>
                                <button className="btn font-size-14" > Agregar</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Favoritos</h4>
                    </div>
                </div>

                <div>
                    <h3>Lista de contactos</h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem dolores quam, id assumenda eum dicta sequi error sit obcaecati nihi
                    l rem excepturi reprehenderit a iure libero natus consequuntur? Vel.
                </div>
            </Container>
        </>
    );

}

export default ContactBook;
// /src/components/Registro.jsx
import { useState } from 'react'
import Alert from './Alert.jsx';
import MySocialButton from './SocialButton.jsx';
import Formulario from './Formulario.jsx';

function Registro ()    {
                            console.log('Loading Registro')
                            const [alert, setAlert] = useState({msg:"", color: ""});
                            return (    
                                    <>
                                        <div className="registro rounded border border-dark bg-white">
                                                                            <div className="reg-title">
                                                                                                    <h3>Crea una cuenta</h3>
                                                                                                    
                                                                                                    
                                                                            </div>
                                                                            <MySocialButton
                                                                                            firsticon="fa-brands fa-facebook"
                                                                                            secondicon="fa-brands fa-github"
                                                                                            thirdicon="fa-brands fa-linkedin-in"
                                                                            />
                                                                            <small>O usa tu e-mail para registrarte</small>

                                                                            <Formulario setAlert={setAlert}/>
                                                                            {alert.msg && <Alert msg={alert.msg} color={alert.color}/> }
                                            
                                        
                                        </div>
                                    </>   
                                    );
                        }

export default Registro;
// /src/components/Registro.jsx
import MySocialButton from './SocialButton.jsx';
//import MyFormulario from './Formulario.jsx';
//import MyAlert from './Alert.jsx';

function Registro ()    {
                            console.log('Loading Registro')
                            return (    
                                        <div className="registro rounded">
                                                                            <div className="reg-title">
                                                                                                    <h3>Crea una cuenta</h3>
                                                                                                    
                                                                                                    
                                                                            </div>
                                                                            <MySocialButton
                                                                                            firsticon="fa-brands fa-facebook"
                                                                                            secondicon="fa-brands fa-github"
                                                                                            thirdicon="fa-brands fa-linkedin-in"
                                                                            />
                                                                            <small>O usa tu e-mail para registrarte</small>
                                            
                                        
                                        </div>
                                        
                                    )
                        }

export default Registro
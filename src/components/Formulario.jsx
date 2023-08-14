// /src/components/Formulario.jsx
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function Formulario ({ setAlert })      {

                                const [nombre,setNombre] = useState('');
                                const [email,setEmail] = useState('');
                                const [password,setPassword] = useState('');
                                const [confirmpassword,setConfirmPassword] = useState('');

                                const validarFormulario = (e) =>    {

                                    

                                                                        if (password == "" || confirmpassword == "" || nombre == "" || email=="")   {
                                                                                                                                                        setAlert    ({
                                                                                                                                                                        msg: "Completa todos los campos.",
                                                                                                                                                                        color: "danger"
                                                                                                                                                                    });
                                                                                                                                                        return;
                                                                                                                                                    }
                                                                        else if (password != confirmpassword)   {
                                                                                                                    setAlert    ({
                                                                                                                                    msg: "Las contraseñas no coinciden.",
                                                                                                                                    color: "danger"
                                                                                                                                });
                                                                                                                    return;
                                                                                                                }

                                                                        else    {
                                                                                    setAlert    ({
                                                                                                    msg: "Usuario registrado exitosamente",
                                                                                                    color: "success"
                                                                                                });
                                                                                    setNombre("");
                                                                                    setEmail("");
                                                                                    setPassword("");
                                                                                    setConfirmPassword("");
                                                                                }
                                                                                    
                                
                                                                    };

                                return  (
                                            
                                            <form className="formulario pt-2" onSubmit={validarFormulario}>
                                                                            <input className="m-1 rounded small" type="text" placeholder="Nombre" name="Nombre" onChange={(e) => setNombre(e.target.value)}></input>
                                                                            <input className="m-1 rounded small" type="email" placeholder="tucorreo@ejemplo.com" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                                                                            <input id="password" className="m-1 rounded small" type="password" placeholder="Contraseña" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                                                                            <input id="confirmpassword" className="m-1 rounded small" type="password" placeholder="Confirma tu Contraseña" name="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                                                                            <Button variant='success m-1 p-0 small' type="submit">Registrarse</Button>

                                            </form>
                                            
                                        );
                            }

export default Formulario;
// /src/components/SocialButton.jsx

function MySocialButton({firsticon,secondicon,thirdicon})   {

                                return  (
                                            <div className="social-btn-zone">
                                                                                <div className="micon border border-dark rounded-circle">
                                                                                        <i className={firsticon}></i>  
                                                                                </div>

                                                                                <div className="micon border border-dark rounded-circle">
                                                                                        <i className={secondicon}></i>  
                                                                                </div>

                                                                                <div className="micon border border-dark rounded-circle">
                                                                                        <i className={thirdicon}></i>  
                                                                                </div>
                                                                            
                                            </div>
                                        )

                            }

export default MySocialButton
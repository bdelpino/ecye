// /src/components/Alert.jsx

function Alert({color,msg})  {

                        return  (
                                    <>
                                        <div className={`alert alert-${color} mt-2`}>
                                                <p>{msg}</p>

                                        </div>
                                    </>
                                )


                    } 

export default Alert
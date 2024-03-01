// Yhteystiedot.js
import React from "react";
import { Link } from 'react-router-dom';

const Yhteystiedot = () => {


    
    return (
        <section className="my-5 py-5">
            <div className="container">
                {/* Yhteystiedot-otsikko */}
                <div className="well well-sm">
                    <h2><strong>Yhteystiedot</strong></h2>
                </div>

                {/* Kaksi karttaa ja lomake */}
                <div className="row">
                    <div className="col-md-7">
                        {/* Koirakenttä */}
                        <div>
                            <h3><strong>Koirakenttä</strong></h3>
                            <iframe
                                title="Google Maps - Koirakenttä"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14397.237028746471!2d28.092095658931193!3d63.18817170926281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46835120c66cb2eb%3A0xd55b9d5cbffe6ab3!2sHaukilammentie%20200%2C%2073300%20Kuopio!5e0!3m2!1sfi!2sfi!4v1709241882190!5m2!1sfi!2sfi"
                                style={{ border: "0", width: "100%", height: "350px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <br />                        
                        <br />

                        {/* Tassusataman Koirapuisto */}
                        <div>
                            <h3><strong>Tassusataman Koirapuisto</strong></h3>
                            <br />
                            <iframe
                                title="Google Maps - Tassusataman Koirapuisto"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.609403919998!2d28.09915523271257!3d63.20498846746407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46835092a110e6f1%3A0xb13262e40bbbc99a!2sKoirapuisto%20Nilsi%C3%A4n%20Satama!5e0!3m2!1sfi!2sfi!4v1709242182749!5m2!1sfi!2sfi"
                                style={{ border: "0", width: "100%", height: "350px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="col-md-5">
                        {/* Ota yhteyttä -lomake */}
                        <h4><strong>Ota yhteyttä</strong></h4>
                        <form style={{ border: "1px solid #ccc", padding: "10px" }}>

                            <div className="form-group mb-3">
                                <label htmlFor="name">Nimesi</label>
                                <input type="text" id="name" className="form-control" placeholder="Nimesi" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Sähköpostiosoitteesi</label>
                                <input type="email" id="email" className="form-control" placeholder="Sähköpostiosoitteesi" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Puhelinnumerosi</label>
                                <input type="tel" id="phone" className="form-control" placeholder="Puhelinnumerosi" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Viestisi</label>
                                <textarea id="message" cols="30" rows="7" className="form-control" placeholder="Viestisi"></textarea>
                            </div>
                            <Link to="#" className="btn btn-outline-primary">
                                Lähetä viesti 
                                <i className="fa fa-paper-plane-o ml-2" aria-hidden="true"></i>
                                <i className="fa">&#9993;</i>
                            </Link>
                        </form>

                        <br />
                        
                        {/* Videonäyttö */}
                        <video autoPlay loop controls muted style={{ width: "100%", height: "350px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
                            <source src={`${process.env.PUBLIC_URL}/Media/Mustikka_aika_Sisu.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <br />

                {/* Taulukko vastuuhenkilöistä */}
                <div className="table-responsive mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><i className="person-icon" style={{ color: "#191385" }}></i></th>
                                <th>Nimi</th>
                                <th>Rooli</th>
                                <th>Sähköposti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i className="person-icon" style={{ color: "#191385" }}>&#128100;</i></td>
                                <td>Matti Meikälainen</td>
                                <td>Rally-toko</td>
                                <td>matti.meikäläinen@gmail.com</td>
                            </tr>
                            <tr>
                                <td><i className="person-icon" style={{ color: "#191385" }}>&#128100;</i></td>
                                <td>Maija Mallikas</td>
                                <td>Käytöskouluttaja</td>
                                <td>maija.mallikas@outlook.com</td>
                            </tr>
                            <tr>
                                <td><i className="person-icon" style={{ color: "#191385" }}>&#128100;</i></td>
                                <td>Johtaja Jonna</td>
                                <td>Yhdistyksen puheenjohtaja</td>
                                <td>johtaja.jonna@gmail.com</td>
                            </tr>
                            <tr>
                                <td><i className="person-icon" style={{ color: "#191385" }}>&#128100;</i></td>
                                <td colSpan="2">Yhdistyksen sähköposti</td>
                                <td>kivatkirsut@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Yhteystiedot;
